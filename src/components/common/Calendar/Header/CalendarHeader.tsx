import dayjs from "dayjs";
import Chevron from "../../../../assets/icons/Chevron";
import Button from "../../Button/Button";

interface Props {
  date: dayjs.Dayjs;
  setDate: (date: dayjs.Dayjs) => void;
}

function CalendarHeader({ date, setDate }: Props) {
  return (
    <div className="flex items-center justify-between">
      <Button
        buttonType="tertiary"
        onClick={() => setDate(date.subtract(1, "month"))}
      >
        <Chevron />
      </Button>
      <span className="text-stone-800 font-medium text-l text-center">
        {date.format("MMMM YYYY")}
      </span>
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
