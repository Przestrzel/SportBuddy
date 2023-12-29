import dayjs from "dayjs";
import { Match } from "../types/events.types";
import Calendar from "../../../../assets/icons/Calendar";
import LocationDot from "../../../../assets/icons/LocationDot";
import Clock from "../../../../assets/icons/Clock";
import MoneyBill from "../../../../assets/icons/MoneyBill";
import InfoContainer from "./InfoContainer/InfoContainer";

interface Props {
  match: Match;
}

function Event({ match }: Props) {
  return (
    <div className="w-full py-2 pb-4 px-4 flex justify-between items-center select-none [&:not(:last-child)]:border-b border-gray-200">
      <div className="flex flex-col justify-start gap-4 w-full">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-stone-900">{match.name}</p>
          {match.limit ? (
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                match.members.length >= match.limit
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {match.limit} / {match.members.length}
            </div>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          <InfoContainer text={dayjs(match.date).format("MMMM DD YYYY")}>
            <Calendar className="w-5 h-5" />
          </InfoContainer>
          <InfoContainer text={`${match.start} — ${match.end}`}>
            <Clock className="w-5 h-5" />
          </InfoContainer>
          <InfoContainer text={match.location}>
            <LocationDot className="w-5 h-5" />
          </InfoContainer>
          {match.fee ? (
            <InfoContainer text={match.fee.toString()}>
              <MoneyBill className="w-5 h-5" />
            </InfoContainer>
          ) : null}
        </div>
      </div>
      <div>
        <p className="text-sm text-stone-500" />
      </div>
    </div>
  );
}

export default Event;
