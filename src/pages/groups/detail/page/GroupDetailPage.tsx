import { useParams } from "react-router-dom";
import PageContainer from "../../../../components/common/PageContainer/PageContainer";
import Breadcrumbs from "../../../../components/common/Breadcrumbs/Breadcrumbs";
import Card from "../../../../components/common/Card/Card";
import GroupInfo from "../info/GroupInfo";
import { Group } from "../../types/groups.types";
import Header from "../../../../components/typography/Header/Header";

function GroupDetailPage() {
  const { id } = useParams();

  const group: Group = {
    id: Number(id),
    name: `Group ${id}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc.`,
  };

  return (
    <PageContainer className="pt-4 pb-4 flex flex-col gap-4">
      <Breadcrumbs to="groups">Groups</Breadcrumbs>
      <Card className="grid grid-cols-4">
        <div className="border-r border-gray-200 col-span-3 flex flex-col gap-4">
          <GroupInfo group={group} />
          <div className="flex-1">
            <Header size="md">Upcoming events</Header>
          </div>
          <div>
            <Header size="md">Events history</Header>
          </div>
        </div>
        <div className="pl-4">Users</div>
      </Card>
    </PageContainer>
  );
}

export default GroupDetailPage;
