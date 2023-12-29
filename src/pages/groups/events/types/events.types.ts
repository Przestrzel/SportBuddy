import { DateT, LocationT, TimeT } from "../../../../types/date";
import { MoneyT } from "../../../../types/money";
import { User } from "../../../auth/types/auth.types";

export type Category = string;

export interface Match {
  category: Category;
  date: DateT;
  end: TimeT;
  fee: MoneyT | undefined;
  id: string;
  limit: number | undefined;
  location: LocationT;
  members: User[];
  name: string;
  start: TimeT;
}

export type CreateMatchForm = Omit<Match, "id">;
