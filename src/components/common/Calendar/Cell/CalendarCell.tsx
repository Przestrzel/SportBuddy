import dayjs from "dayjs";
import { motion } from "framer-motion";
import { CalendarCell as ICalendarCell } from "../types/calendar.types";
import useAnimation from "../../../../hooks/useAnimation";

interface Props {
  cell: ICalendarCell;
  onClick: (date: dayjs.Dayjs) => void;
  selectedDate: dayjs.Dayjs;
}

function CalendarCell({ cell, selectedDate, onClick }: Props) {
  const { initial, animate, transition } = useAnimation({ mode: "fast" });
  const nonCurrentStyle = cell.type !== "current" ? "text-stone-300" : "";

  const textStyle = cell.type === "current" ? "text-stone-700" : "";
  const todayStyle = cell.date.isSame(dayjs(), "day") ? "text-blue-700" : "";
  const selectedStyle = cell.date.isSame(selectedDate, "day")
    ? "bg-blue-100"
    : "";

  const onClickHandle = () => {
    if (cell.type === "current") {
      onClick(cell.date);
    }
  };

  return (
    <motion.button
      initial={initial}
      animate={animate}
      transition={transition}
      key={cell.date.format()}
      type="button"
      className={`flex justify-center items-center ${textStyle}
      hover:bg-gray-100 rounded-full hover:cursor-pointer w-10 h-10
      select-none transition-all ${nonCurrentStyle} ${todayStyle} ${selectedStyle}
      `}
      onClick={onClickHandle}
    >
      {cell.date.format("DD")}
    </motion.button>
  );
}

export default CalendarCell;
