import Header from "../../../../components/typography/Header/Header";
import { Group } from "../../types/groups.types";

interface Props {
  group: Group;
}

function GroupInfo({ group }: Props) {
  return (
    <div>
      <Header>{group.name}</Header>
      <p className="text-gray-500">{group.description}</p>
    </div>
  );
}

export default GroupInfo;
