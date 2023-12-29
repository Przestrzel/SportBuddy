import Group from "../../../../assets/icons/Group";
import Header from "../../../../components/typography/Header/Header";
import { Group as TGroup } from "../../types/groups.types";

interface Props {
  group: TGroup;
}

function GroupInfo({ group }: Props) {
  return (
    <div>
      <Header className="flex gap-2 items-center">
        <Group />
        {group.name}
      </Header>
      <p className="text-gray-500">{group.description}</p>
    </div>
  );
}

export default GroupInfo;
