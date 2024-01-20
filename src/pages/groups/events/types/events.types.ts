import { ModelWithId } from "../../../../types/common";
import { DateT, LocationT, TimeT } from "../../../../types/date";
import { MoneyT } from "../../../../types/money";
import { User } from "../../../auth/types/auth.types";

export type Category = string;
export type FakeDisciplineEnum = number;
export interface Match extends ModelWithId {
  category: Category;
  date: DateT;
  discipline: FakeDisciplineEnum;
  end: TimeT;
  fee: MoneyT | undefined;
  limit: number | undefined;
  location: LocationT;
  members: User[];
  name: string;
  start: TimeT;
}

export type CreateMatchForm = Omit<Match, "id">;
