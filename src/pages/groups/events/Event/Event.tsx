import dayjs from "dayjs";
import { Match } from "../types/events.types";
import Calendar from "../../../../assets/icons/Calendar";
import LocationDot from "../../../../assets/icons/LocationDot";
import Clock from "../../../../assets/icons/Clock";

interface Props {
  match: Match;
}

function Event({ match }: Props) {
  return (
    <div className="w-full py-2 px-4 flex justify-between items-center select-none [&:not(:last-child)]:border-b border-gray-200">
      <div className="flex flex-col justify-start gap-4">
        <p className="text-sm font-medium text-gray-900">{match.name}</p>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center text-sm text-stone-500">
            <Calendar className="w-4 h-4" />
            <p>{dayjs(match.date).format("MMMM DD YYYY")}</p>
          </div>
          <div className="flex gap-2 items-center text-sm text-stone-500">
            <Clock className="w-4 h-4" />
            <p>
              {match.start} — {match.end}
            </p>
          </div>
          <div className="flex gap-2 items-center text-sm text-stone-500">
            <LocationDot className="w-4 h-4" />
            <p>{match.location}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-stone-500" />
      </div>
    </div>
  );
}

export default Event;
