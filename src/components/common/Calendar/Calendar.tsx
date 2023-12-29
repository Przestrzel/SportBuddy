import dayjs from "dayjs";
import React, { useMemo } from "react";
import useCalendar from "./hooks/useCalendar";
import CalendarHeaderCell from "./HeaderCell/CalendarHeaderCell";
import Card from "../Card/Card";
import CalendarCell from "./Cell/CalendarCell";
import CalendarHeader from "./Header/CalendarHeader";

const headers = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Calendar() {
  const [date, setDate] = React.useState(dayjs().startOf("month"));
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const { dates } = useCalendar({ date });

  const calendar = useMemo(
    () =>
      dates.map((_date) => (
        <CalendarCell
          cell={_date}
          selectedDate={selectedDate}
          onClick={setSelectedDate}
        />
      )),
    [dates, selectedDate],
  );

  return (
    <Card className="w-full h-full max-h-[600px] flex gap-16">
      <div className="w-3/4 border-r border-gray-200">Events</div>
      <div className="self-center flex flex-col justify-start gap-8">
        <CalendarHeader date={date} setDate={setDate} />
        <div className="w-full h-full max-w-xs max-h-80 grid grid-cols-7 gap-4">
          {headers.map((header) => (
            <CalendarHeaderCell key={header} name={header.charAt(0)} />
          ))}
          {calendar}
        </div>
      </div>
    </Card>
  );
}

export default Calendar;
