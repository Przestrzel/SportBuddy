import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import PageContainer from "../../../../components/common/PageContainer/PageContainer";
import Breadcrumbs from "../../../../components/common/Breadcrumbs/Breadcrumbs";
import Card from "../../../../components/common/Card/Card";
import GroupInfo from "../info/GroupInfo";
import { Group } from "../../types/groups.types";
import Header from "../../../../components/typography/Header/Header";
import Button from "../../../../components/common/Button/Button";
import PlusFilled from "../../../../assets/icons/PlusFilled";
import EventList from "../../events/EventList/EventList";
import CreateEventModal from "../modals/CreateEventModal";
import routes from "../../../../config/routes";
import UserList from "../../../auth/users/list/UserList";

function GroupDetailPage() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  if (!id) {
    return navigate(routes.groups);
  }
  const group: Group = {
    id,
    name: `Group ${id}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc.`,
  };

  return (
    <PageContainer className="pt-4 pb-4 flex flex-col gap-4">
      <Breadcrumbs to="groups">Groups</Breadcrumbs>
      <Card className="grid grid-cols-4">
        <div className="border-r border-gray-200 col-span-3 flex flex-col gap-4 pr-4">
          <GroupInfo group={group} />
          <div className="flex-1">
            <Header size="md" className="flex justify-between items-center">
              Upcoming Events
              <Button
                buttonType="tertiary"
                className="flex justify-center items-center gap-2"
                onClick={() => setOpen(true)}
              >
                <PlusFilled className="w-6 h-6" />
                Create Event
              </Button>
            </Header>
            <EventList />
          </div>
          <div className="flex-1">
            <Header size="md">Events History</Header>
            <EventList />
          </div>
        </div>
        <div className="pl-4">
          <UserList
            users={[
              {
                id: "1",
                firstName: "John",
                lastName: "Smith",
                phoneNumber: "512 829 128",
                email: "john.smith@gmail.com",
              },
              {
                id: "2",
                firstName: "John",
                lastName: "Smith",
                phoneNumber: "512 829 821",
                email: "john.smith2@gmail.com",
              },
            ]}
          />
        </div>
      </Card>
      <CreateEventModal open={open} onClose={() => setOpen(false)} />
    </PageContainer>
  );
}

export default GroupDetailPage;
