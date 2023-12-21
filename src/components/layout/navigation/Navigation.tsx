import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import routes from "../../../config/routes";
import Button from "../../common/Button/Button";
import { logout } from "../../../pages/auth/store/auth.slice";
import useAnimation from "../../../hooks/useAnimation";
import Home from "../../../assets/icons/Home";
import Group from "../../../assets/icons/Group";
import Logout from "../../../assets/icons/Logout";

function ListLink({ to, children }: { children: React.ReactNode; to: string }) {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link className="group" to={to}>
      <li
        className={`w-20 h-12 hover:bg-gray-200 transition-all flex items-center justify-center rounded [&>svg]:fill-stone-900 [&>svg]:w-6 [&>svg]:h-6 group-hover:[&>svg]:fill-blue-500 [&>svg]:transition-all ${
          active ? "[&>svg]:fill-blue-600" : ""
        } `}
      >
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
      <ul className="flex justify-start gap-4 items-center h-16 px-24">
        <ListLink to={routes.home}>
          <Home />
        </ListLink>
        <ListLink to={routes.groups}>
          <Group />
        </ListLink>
        <li className="ml-auto">
          <Button
            className="flex items-center justify-center gap-2"
            onClick={onLogout}
          >
            <Logout className="w-6 h-6" />
            <span className="text-white">Logout</span>
          </Button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navigation;
