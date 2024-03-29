import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Match } from "../types/events.types";
import Calendar from "../../../../assets/icons/Calendar";
import LocationDot from "../../../../assets/icons/LocationDot";
import Clock from "../../../../assets/icons/Clock";
import MoneyBill from "../../../../assets/icons/MoneyBill";
import InfoContainer from "./InfoContainer/InfoContainer";
import useAnimation from "../../../../hooks/useAnimation";
import RegisterButton from "./RegisterButton/RegisterButton";

interface Props {
  canRegister: boolean;
  match: Match;
}

function Event({ match, canRegister }: Props) {
  const { initial, animate, transition } = useAnimation({ mode: "normal" });

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      layout
      className="w-full py-2 pb-4 px-4 flex justify-between items-center select-none [&:not(:last-child)]:border-b border-gray-200"
    >
      <div className="flex flex-col justify-start gap-4 w-full">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium text-stone-900">{match.name}</p>
          <div className="flex gap-4 items-center">
            <div
              className={`px-2 h-6 flex justify-center items-center py-1 rounded-full text-xs font-medium text-white ${
                match.limit && match.members.length >= match.limit
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            >
              {match.members.length} {match.limit ? `/ ${match.limit}` : null}
            </div>
            {canRegister ? <RegisterButton match={match} /> : null}
          </div>
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
    </motion.div>
  );
}

export default Event;
