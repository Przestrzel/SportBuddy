import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import PageContainer from "../../../../components/common/PageContainer/PageContainer";
import Breadcrumbs from "../../../../components/common/Breadcrumbs/Breadcrumbs";
import Card from "../../../../components/common/Card/Card";
import GroupInfo from "../info/GroupInfo";
import Header from "../../../../components/typography/Header/Header";
import Button from "../../../../components/common/Button/Button";
import PlusFilled from "../../../../assets/icons/PlusFilled";
import EventList from "../../events/EventList/EventList";
import CreateEventModal from "../modals/CreateEventModal";
import routes from "../../../../config/routes";
import UserList from "../../../auth/users/list/UserList";
import AddUsersModal from "../modals/AddUsersModal";
import ConfirmLeaveGroupModal from "../modals/ConfirmLeaveGroupModal";
import { useGroupDetailsQuery } from "../../../../store/services/groups.services";

function GroupDetailPage() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [addUsersOpen, setAddUsersOpen] = React.useState(false);
  const [leaveGroupOpen, setLeaveGroupOpen] = React.useState(false);
  const navigate = useNavigate();
  const { data: group, error } = useGroupDetailsQuery(
    { groupId: id! },
    { skip: !id },
  );

  useEffect(() => {
    if (!id) {
      navigate(routes.groups);
    }
  }, [id]);

  useEffect(() => {
    if (error) {
      navigate(routes.groups);
      toast.error("You do not have access to this group");
    }
  }, [error]);

  if (!group) {
    return null;
  }

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
          <div className="flex justify-between">
            <Button onClick={() => setAddUsersOpen(true)} buttonType="primary">
              Add users
            </Button>
            <Button
              onClick={() => setLeaveGroupOpen(true)}
              buttonType="secondary"
            >
              Leave Group
            </Button>
          </div>
        </div>
        <div className="pl-4">
          <UserList
            users={[
              {
                id: "1",
                firstName: "John",
                lastName: "Smith",
                email: "john.smith@gmail.com",
              },
              {
                id: "2",
                firstName: "John",
                lastName: "Smith",
                email: "john.smith2@gmail.com",
              },
            ]}
          />
        </div>
      </Card>
      <CreateEventModal open={open} onClose={() => setOpen(false)} />
      <AddUsersModal
        open={addUsersOpen}
        onClose={() => setAddUsersOpen(false)}
        group={group.id}
      />
      <ConfirmLeaveGroupModal
        open={leaveGroupOpen}
        onClose={() => setLeaveGroupOpen(false)}
        group={group.id}
      />
    </PageContainer>
  );
}

export default GroupDetailPage;
