import React from "react";
import toast from "react-hot-toast";
import Modal from "../../../../components/common/Modal/Modal";
import Header from "../../../../components/typography/Header/Header";
import UserOperationsList from "../../../auth/users/operationsList/UserOperationsList";
import {
  useGroupUsersToInviteQuery,
  useInviteUsersMutation,
} from "../../../../store/services/groups.services";
import { somethingWentWrongToast } from "../../../../utils/toast.utils";

interface Props {
  group: string;
  onClose: () => void;
  open: boolean;
}

function AddUsersModal({ open, onClose, group }: Props) {
  const [toInvite, setToInvite] = React.useState<string[]>([]);
  const [inviteUsers] = useInviteUsersMutation();
  const { users } = useGroupUsersToInviteQuery(
    { groupId: group },
    {
      selectFromResult: ({ data }) => ({
        users: data ?? [],
      }),
    },
  );

  const onConfirm = () => {
    inviteUsers({
      groupId: group,
      userIds: toInvite,
    })
      .unwrap()
      .then(() => {
        toast.success("You've successfully invited users!");
      })
      .catch(() => {
        somethingWentWrongToast();
      })
      .finally(() => {
        onClose();
      });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      confirmDisabled={!toInvite.length}
    >
      <div>
        <Header>Users to invite {toInvite.length}</Header>
        <UserOperationsList
          users={users.filter((user) => !toInvite.includes(user.id))}
          onClick={(id) => setToInvite((prev) => [...prev, id])}
        />
      </div>
    </Modal>
  );
}

export default AddUsersModal;
