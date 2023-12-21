import { motion } from "framer-motion";
import { Group } from "../types/groups.types";
import useAnimation from "../../../hooks/useAnimation";
import GroupItem from "./item/GroupItem";

interface Props {
  groups: Group[];
}

function GroupGrid({ groups }: Props) {
  const { initial, animate, transition } = useAnimation({ mode: "fast" });

  return (
    <motion.ul
      initial={initial}
      animate={animate}
      transition={transition}
      className="grid grid-cols-3 gap-8"
    >
      {groups.map((group) => (
        <GroupItem key={group.id} group={group} />
      ))}
    </motion.ul>
  );
}

export default GroupGrid;
