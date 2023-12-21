import dayjs from "dayjs";
import useCalendar from "./hooks/useCalendar";

function Calendar() {
  const { dates } = useCalendar({ date: dayjs().add(1, "month") });
  console.log(dates);
  return <div>Calendar</div>;
}

export default Calendar;
