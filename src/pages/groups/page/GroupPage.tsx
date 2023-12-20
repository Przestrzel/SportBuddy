import PageContainer from "../../../components/common/PageContainer/PageContainer";
import GroupGrid from "../grid/GroupGrid";
import { Group } from "../types/groups.types";

const groups: Group[] = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  name: `Group ${i}`,
  description: `Group ${i} description`,
}));

function GroupPage() {
  return (
    <PageContainer>
      <GroupGrid groups={groups} />
    </PageContainer>
  );
}

export default GroupPage;
