import React from "react";
import Card from "../../../../../components/common/Card/Card";
import { GroupWithDetails } from "../../../types/groups.types";
import GroupInfo from "../../info/GroupInfo";
import Header from "../../../../../components/typography/Header/Header";
import Button from "../../../../../components/common/Button/Button";
import PlusFilled from "../../../../../assets/icons/PlusFilled";
import EventList from "../../../events/EventList/EventList";
import CreateEventModal from "../../modals/CreateEventModal";
import AddUsersModal from "../../modals/AddUsersModal";
import ConfirmLeaveGroupModal from "../../modals/ConfirmLeaveGroupModal";
import UserList from "../../../../auth/users/list/UserList";
import {
  useArchivedMatchesQuery,
  useUpcomingMatchesQuery,
} from "../../../../../store/services/groups.services";

interface Props {
  group: GroupWithDetails;
}

function GroupDetails({ group }: Props) {
  const [open, setOpen] = React.useState(false);
  const [addUsersOpen, setAddUsersOpen] = React.useState(false);
  const [leaveGroupOpen, setLeaveGroupOpen] = React.useState(false);
  const { upcomingMatches } = useUpcomingMatchesQuery(
    { groupId: group.id },
    {
      selectFromResult: ({ data }) => ({
        upcomingMatches: data ?? [],
      }),
    },
  );
  const { archivedMatches } = useArchivedMatchesQuery(
    { groupId: group.id },
    {
      selectFromResult: ({ data }) => ({
        archivedMatches: data ?? [],
      }),
    },
  );

  return (
    <>
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
            <EventList matches={upcomingMatches} />
          </div>
          <div className="flex-1">
            <Header size="md">Events History</Header>
            <EventList matches={archivedMatches} />
          </div>
          <div className="flex justify-between">
            <Button onClick={() => setAddUsersOpen(true)} buttonType="primary">
              Invite users
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
          <UserList users={group.members} />
        </div>
      </Card>
      <CreateEventModal
        group={group.id}
        open={open}
        onClose={() => setOpen(false)}
      />
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
    </>
  );
}

export default GroupDetails;
