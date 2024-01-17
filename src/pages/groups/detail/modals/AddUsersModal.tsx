import React from "react";
import Modal from "../../../../components/common/Modal/Modal";
import Header from "../../../../components/typography/Header/Header";
import UserOperationsList from "../../../auth/users/operationsList/UserOperationsList";

interface Props {
  group: string;
  onClose: () => void;
  open: boolean;
}

function AddUsersModal({ open, onClose, group }: Props) {
  const [toInvite, setToInvite] = React.useState<string[]>([]);
  return (
    <Modal
      open={open}
      onClose={onClose}
      onConfirm={onClose}
      confirmDisabled={!toInvite.length}
    >
      <div>
        <Header>Users to invite {toInvite.length}</Header>
        <UserOperationsList
          users={[
            {
              id: "1",
              firstName: "John",
              lastName: "Smith",
              email: "john.smith@gmail.com",
            },
            {
              id: "2",
              firstName: "John",
              lastName: "Smith",
              email: "john.smith@gmail.com",
            },
            {
              id: "3",
              firstName: "John",
              lastName: "Smith3",
              email: "john.smith@gmail.com",
            },
          ].filter((user) => !toInvite.includes(user.id))}
          onClick={(id) => setToInvite((prev) => [...prev, id])}
        />
      </div>
    </Modal>
  );
}

export default AddUsersModal;
