import { User } from "../../types/auth.types";
import UserOperationsElement from "./element/UserOperationsElement";

interface Props {
  onClick: (id: string) => void;
  users: User[];
}

function UserOperationsList({ users, onClick }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <UserOperationsElement key={user.id} user={user} onClick={onClick} />
      ))}
    </div>
  );
}

export default UserOperationsList;
