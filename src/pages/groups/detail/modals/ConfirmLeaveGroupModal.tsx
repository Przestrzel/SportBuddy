import Modal from "../../../../components/common/Modal/Modal";

interface Props {
  group: string;
  onClose: () => void;
  open: boolean;
}

function ConfirmLeaveGroupModal({ open, onClose, group }: Props) {
  const onConfirm = () => {
    // TODO: Handle confirm
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} onConfirm={onConfirm}>
      Are you sure you want to leave group?
    </Modal>
  );
}

export default ConfirmLeaveGroupModal;
