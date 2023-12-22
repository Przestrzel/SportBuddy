import dayjs from "dayjs";
import { useMemo } from "react";
import useCalendar from "./hooks/useCalendar";
import CalendarHeaderCell from "./HeaderCell/CalendarHeaderCell";
import Card from "../Card/Card";
import CalendarCell from "./Cell/CalendarCell";

const headers = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const COLS = 7;
const DATES_HEIGHT = 3;
const ROWS = 5 * DATES_HEIGHT + 2;

function Calendar() {
  const { dates } = useCalendar({ date: dayjs().startOf("month") });

  const calendar = useMemo(
    () =>
      dates.map((date) => (
        <CalendarCell cell={date} className={`row-span-${DATES_HEIGHT}`} />
      )),
    [dates],
  );

  return (
    <Card className={`w-full h-full grid grid-cols-${COLS} grid-rows-${ROWS}`}>
      <div className="col-span-7">HEADER</div>
      {headers.map((header) => (
        <CalendarHeaderCell key={header} name={header} />
      ))}
      {calendar}
    </Card>
  );
}

export default Calendar;
