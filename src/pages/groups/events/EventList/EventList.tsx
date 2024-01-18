import Event from "../Event/Event";
import { Match } from "../types/events.types";

interface Props {
  matches: Match[];
}

function EventList({ matches }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {matches.map((match) => (
        <Event key={match.id} match={match} />
      ))}
    </div>
  );
}

export default EventList;
