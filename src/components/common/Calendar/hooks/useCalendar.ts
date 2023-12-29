import dayjs from "dayjs";
import { useMemo } from "react";
import { CalendarCell } from "../types/calendar.types";

interface Props {
  date: dayjs.Dayjs;
}

const GRID_SIZE = 6 * 7;

const useCalendar = ({ date }: Props) => {
  const daysInMonth = date.daysInMonth();
  const firstDayOfMonth = date.startOf("month").day();
  const startOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;
  const daysToFillAtStart = startOfMonth === 0 ? 6 : startOfMonth - 1;

  const dates: CalendarCell[] = useMemo(() => {
    const currentMonthDates = Array.from({ length: daysInMonth }, (_, i) => ({
      date: date.startOf("month").date(i + 1),
      type: "current" as const,
    }));
    const previousMonthDates = Array.from(
      { length: daysToFillAtStart },
      (_, i) => ({
        date: date
          .startOf("month")
          .subtract(1, "month")
          .endOf("month")
          .subtract(daysToFillAtStart - i - 1, "day"),
        type: "previous" as const,
      }),
    );
    const nextMonthDates = Array.from(
      {
        length:
          GRID_SIZE - currentMonthDates.length - previousMonthDates.length,
      },
      (_, i) => ({
        date: date
          .startOf("month")
          .add(1, "month")
          .startOf("month")
          .add(i, "day"),
        type: "next" as const,
      }),
    );
    return [...previousMonthDates, ...currentMonthDates, ...nextMonthDates];
  }, [date]);

  return {
    dates,
  };
};

export default useCalendar;
