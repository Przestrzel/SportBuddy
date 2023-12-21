import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { AiFillHome, AiOutlineTeam } from "react-icons/ai";

import routes from "../../../config/routes";
import Button from "../../common/Button/Button";
import { logout } from "../../../pages/auth/store/auth.slice";
import useAnimation from "../../../hooks/useAnimation";

function ListLink({ to, children }: { children: React.ReactNode; to: string }) {
  return (
    <Link className="group" to={to}>
      <li className="w-20 h-12 hover:bg-gray-200 transition-all flex items-center justify-center rounded [&>svg]:fill-stone-900 [&>svg]:w-6 [&>svg]:h-6 group-hover:[&>svg]:fill-blue-500 [&>svg]:transition-all">
        {children}
      </li>
    </Link>
  );
}

function Navigation() {
  const dispatch = useDispatch();
  const { initial, animate, transition } = useAnimation({ mode: "normal" });

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <motion.nav
      initial={initial}
      animate={animate}
      transition={transition}
      className="w-screen bg-slate-100 shadow-sm fixed top-0 left-0"
    >
      <ul className="flex justify-start gap-8 items-center h-16 px-24">
        <ListLink to={routes.home}>
          <AiFillHome />
        </ListLink>
        <ListLink to={routes.groups}>
          <AiOutlineTeam />
        </ListLink>
        <li className="ml-auto">
          <Button onClick={onLogout}>Sign out</Button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navigation;
