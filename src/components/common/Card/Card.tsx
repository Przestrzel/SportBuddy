import { motion } from "framer-motion";
import useAnimation from "../../../hooks/useAnimation";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: Props) {
  const { initial, animate, transition } = useAnimation({ mode: "normal" });
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={`bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4 h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

Card.defaultProps = {
  className: "",
};

export default Card;
