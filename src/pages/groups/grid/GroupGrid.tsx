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
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="p-12 pt-4 w-full h-full"
    >
      <motion.ul className="grid grid-cols-3 gap-8">
        {groups.map((group) => (
          <GroupItem key={group.id} group={group} />
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default GroupGrid;
