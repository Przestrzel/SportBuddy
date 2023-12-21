import dayjs from "dayjs";

export interface CalendarCell {
  date: dayjs.Dayjs;
  type: "current" | "previous" | "next";
}
