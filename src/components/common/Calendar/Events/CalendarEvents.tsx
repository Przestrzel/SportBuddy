import dayjs from "dayjs";
import Header from "../../../typography/Header/Header";
import Calendar from "../../../../assets/icons/Calendar";

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
      Event List here
    </div>
  );
}

export default CalendarEvents;
