import { CalendarCell as ICalendarCell } from "../types/calendar.types";

interface Props {
  cell: ICalendarCell;
  className: string;
}

function CalendarCell({ cell, className }: Props) {
  const nonCurrentStyle =
    cell.type !== "current"
      ? "text-gray-400 bg-gray-100 hover:bg-gray-100 hover:cursor-default"
      : "";

  const textStyle = cell.type === "current" ? "text-stone-800" : "";
  return (
    <div
      className={`flex justify-center items-center ${textStyle} hover:bg-gray-50 border border-gray-300 hover:cursor-pointer ${className} ${nonCurrentStyle}`}
    >
      {cell.date.format("DD")}
    </div>
  );
}

export default CalendarCell;
