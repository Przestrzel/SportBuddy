import { User } from "../../types/auth.types";
import UserElement from "./element/UserElement";

interface Props {
  users: User[];
}

function UserList({ users }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <UserElement key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
