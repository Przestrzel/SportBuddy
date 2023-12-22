import dayjs from "dayjs";
import useCalendar from "./hooks/useCalendar";

function Calendar() {
  const { dates } = useCalendar({ date: dayjs().startOf("month") });

  return <div>Calendar</div>;
}

export default Calendar;
