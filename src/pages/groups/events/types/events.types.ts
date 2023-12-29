import { DateT, LocationT, TimeT } from "../../../../types/date";
import { MoneyT } from "../../../../types/money";
import { User } from "../../../auth/types/auth.types";

export interface Match {
  date: DateT;
  end: TimeT;
  fee: MoneyT;
  id: string;
  limit: number | null;
  location: LocationT;
  members: User[];
  name: string;
  registrationType: "members-first" | "mixed";
  start: TimeT;
}
