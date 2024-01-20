import Event from "../Event/Event";
import { Match } from "../types/events.types";

interface Props {
  canRegister: boolean;
  matches: Match[];
  size: 240 | 320 | 400;
}

function EventList({ matches, canRegister, size }: Props) {
  return (
    <div className={`flex flex-col gap-2 h-[${size}px] overflow-y-auto`}>
      {matches.map((match) => (
        <Event key={match.id} match={match} canRegister={canRegister} />
      ))}
    </div>
  );
}

export default EventList;
