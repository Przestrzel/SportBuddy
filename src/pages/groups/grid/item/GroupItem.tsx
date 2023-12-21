import { Link } from "react-router-dom";
import { Group } from "../../types/groups.types";
import routes from "../../../../config/routes";
import GroupInfo from "../../detail/info/GroupInfo";

interface Props {
  group: Group;
}

function GroupItem({ group }: Props) {
  return (
    <Link to={routes.group.replace(":id", group.id.toString())}>
      <li className="h-48 bg-white text-slate-800 shadow border border-gray-100 rounded-lg p-4 flex flex-col gap-6 transition-all hover:shadow-xl hover:cursor-pointer">
        <GroupInfo group={group} />
      </li>
    </Link>
  );
}

export default GroupItem;
