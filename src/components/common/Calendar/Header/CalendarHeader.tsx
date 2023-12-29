import dayjs from "dayjs";
import { motion } from "framer-motion";
import Chevron from "../../../../assets/icons/Chevron";
import Button from "../../Button/Button";
import useAnimation from "../../../../hooks/useAnimation";

interface Props {
  date: dayjs.Dayjs;
  setDate: (date: dayjs.Dayjs) => void;
}

function CalendarHeader({ date, setDate }: Props) {
  const { initial, animate, transition } = useAnimation({ mode: "fast" });

  return (
    <div className="flex items-center justify-between">
      <Button
        buttonType="tertiary"
        onClick={() => setDate(date.subtract(1, "month"))}
      >
        <Chevron />
      </Button>
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition}
        key={date.format()}
        className="text-stone-800 font-medium text-l text-center"
      >
        {date.format("MMMM YYYY")}
      </motion.span>
      <Button
        buttonType="tertiary"
        onClick={() => setDate(date.add(1, "month"))}
      >
        <Chevron className="rotate-180" />
      </Button>
    </div>
  );
}

export default CalendarHeader;
