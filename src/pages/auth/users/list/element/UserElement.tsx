import UserIcon from "../../../../../assets/icons/UserIcon";
import { User } from "../../../types/auth.types";

interface Props {
  user: User;
}

function UserElement({ user }: Props) {
  return (
    <div className="flex gap-4 w-full items-start justify-start cursor-pointer hover:bg-stone-100 px-4 py-2 transition-all">
      <UserIcon className="w-6 h-6 min-w-6 min-h-6 text-stone-300 mt-[2px]" />
      <div className="flex flex-col">
        <p className="text-stone-900">{user.username}</p>
        <p className="text-stone-600">{user.fullName}</p>
      </div>
    </div>
  );
}

export default UserElement;
