import { Group } from "../../types/groups.types";

interface Props {
  group: Group;
}

function GroupItem({ group }: Props) {
  return (
    <li className="h-48 bg-white shadow border border-gray-100 rounded-lg p-4 flex transition-all hover:shadow-xl hover:cursor-pointer">
      {group.name}
    </li>
  );
}

export default GroupItem;
