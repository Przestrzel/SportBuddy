import PlusFilled from "../../../../../assets/icons/PlusFilled";
import { User } from "../../../types/auth.types";

interface Props {
  onClick: (id: string) => void;
  user: User;
}

function UserOperationsElement({ user, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={() => onClick(user.id)}
      className="flex gap-2 w-full items-start justify-start cursor-pointer hover:bg-stone-100 px-4 py-2 transition-all"
    >
      <PlusFilled className="w-6 h-6 text-blue-900" />
      <p className="text-stone-900">{user.username}</p>
      <p className="text-stone-700">{user.fullName}</p>
    </button>
  );
}

export default UserOperationsElement;
