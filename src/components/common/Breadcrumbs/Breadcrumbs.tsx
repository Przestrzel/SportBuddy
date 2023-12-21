import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Chevron from "../../../assets/icons/Chevron";
import routes from "../../../config/routes";
import useAnimation from "../../../hooks/useAnimation";

interface Props {
  children: React.ReactNode;
  to: keyof typeof routes;
}

function Breadcrumbs({ to, children }: Props) {
  const { transition } = useAnimation({ mode: "normal" });

  return (
    <Link className="group" to={routes[to]}>
      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ transition }}
        className="w-full h-12 flex justify-start items-center gap-4 group-hover:[&>svg]:fill-blue-500 group-hover:text-blue-500 transition-all"
      >
        <Chevron className="w-8 h-8 transition-all" />
        {children}
      </motion.div>
    </Link>
  );
}

export default Breadcrumbs;
