import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Modal from "../../../../components/common/Modal/Modal";
import { useLeaveGroupMutation } from "../../../../store/services/groups.services";
import routes from "../../../../config/routes";

interface Props {
  group: string;
  onClose: () => void;
  open: boolean;
}

function ConfirmLeaveGroupModal({ open, onClose, group }: Props) {
  const [leaveGroup] = useLeaveGroupMutation();
  const navigate = useNavigate();

  const onConfirm = () => {
    leaveGroup({ groupId: group })
      .unwrap()
      .then(() => {
        navigate(routes.groups);
        toast.success("You've successfully left group!");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        onClose();
      });
  };

  return (
    <Modal open={open} onClose={onClose} onConfirm={onConfirm}>
      Are you sure you want to leave group?
    </Modal>
  );
}

export default ConfirmLeaveGroupModal;
