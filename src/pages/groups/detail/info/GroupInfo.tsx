import { Group } from "../../types/groups.types";

interface Props {
  group: Group;
}

function GroupInfo({ group }: Props) {
  return (
    <div>
      <h3 className="text-slate-800">{group.name}</h3>
      <p className="text-gray-500">{group.description}</p>
    </div>
  );
}

export default GroupInfo;
