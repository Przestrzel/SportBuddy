import toast from "react-hot-toast";
import Button from "../../../../../components/common/Button/Button";
import LoadingWrapper from "../../../../../components/common/LoadingWrapper/LoadingWrapper";
import {
  useLeaveMatchMutation,
  useRegisterToMatchMutation,
} from "../../../../../store/services/groups.services";
import { selectUser } from "../../../../../store/slices/auth.slice";
import { useAppSelector } from "../../../../../store/store";
import { somethingWentWrongToast } from "../../../../../utils/toast.utils";
import { Match } from "../../types/events.types";

interface Props {
  match: Match;
}

function RegisterButton({ match }: Props) {
  const user = useAppSelector(selectUser);
  const isRegistered = match.members.some((member) => member.id === user?.id);
  const [register, { isLoading: isRegisterLoading }] =
    useRegisterToMatchMutation();
  const [leave, { isLoading: isLeaveLoading }] = useLeaveMatchMutation();

  const onRegister = () => {
    register({ matchId: match.id })
      .unwrap()
      .then(() => {
        toast.success("Successfully registered to match!");
      })
      .catch(somethingWentWrongToast);
  };

  const onLeave = () => {
    leave({ matchId: match.id })
      .unwrap()
      .then(() => {
        toast.success("Successfully left match!");
      })
      .catch(somethingWentWrongToast);
  };

  return (
    <LoadingWrapper isLoading={isRegisterLoading || isLeaveLoading}>
      {isRegistered ? (
        <Button onClick={onLeave} buttonType="secondary">
          Leave
        </Button>
      ) : (
        <Button onClick={onRegister} buttonType="primary">
          Register
        </Button>
      )}
    </LoadingWrapper>
  );
}

export default RegisterButton;
