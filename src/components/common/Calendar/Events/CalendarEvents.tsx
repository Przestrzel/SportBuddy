import dayjs from "dayjs";
import Header from "../../../typography/Header/Header";
import Calendar from "../../../../assets/icons/Calendar";
import EventList from "../../../../pages/groups/events/EventList/EventList";

interface Props {
  className: string;
  date: dayjs.Dayjs;
}

function CalendarEvents({ date, className }: Props) {
  return (
    <div className={className}>
      <Header size="2xl" className="flex items-center gap-4">
        <Calendar />
        {date.format("DD MMMM YYYY")}
      </Header>
      <EventList />
    </div>
  );
}

export default CalendarEvents;
