import dayjs from "dayjs";
import Header from "../../../typography/Header/Header";
import Calendar from "../../../../assets/icons/Calendar";
import EventList from "../../../../pages/groups/events/EventList/EventList";
import { useUserMatchesQuery } from "../../../../store/services/matches.services";

interface Props {
  className: string;
  date: dayjs.Dayjs;
}

function CalendarEvents({ date, className }: Props) {
  const { matches } = useUserMatchesQuery(
    { date: date.format("YYYY-MM-DD") },
    {
      selectFromResult: ({ data }) => ({
        matches: data ?? [],
      }),
    },
  );

  return (
    <div className={className}>
      <Header size="2xl" className="flex items-center gap-4">
        <Calendar />
        {date.format("DD MMMM YYYY")}
      </Header>
      <EventList matches={matches} canRegister={false} size={400} />
    </div>
  );
}

export default CalendarEvents;
