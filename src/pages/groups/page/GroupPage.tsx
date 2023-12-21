import PageContainer from "../../../components/common/PageContainer/PageContainer";
import GroupGrid from "../grid/GroupGrid";
import { Group } from "../types/groups.types";

const groups: Group[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Group ${i}`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc.`,
}));

function GroupPage() {
  return (
    <PageContainer>
      <GroupGrid groups={groups} />
    </PageContainer>
  );
}

export default GroupPage;
