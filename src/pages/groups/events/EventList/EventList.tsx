import Event from "../Event/Event";
import { Match } from "../types/events.types";

function EventList() {
  const match: Match = {
    id: "1",
    name: "Test Event",
    date: "2020-01-01",
    start: "12:00",
    end: "13:00",
    location: "Test Location",
    fee: 15,
    limit: null,
    members: [],
    registrationType: "mixed",
  };
  return (
    <div className="flex flex-col gap-2">
      <Event match={match} />
      <Event match={match} />
      <Event
        match={{
          ...match,
          limit: 15,
        }}
      />
    </div>
  );
}

export default EventList;
