import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import routes from "../../../config/routes";
import Button from "../../common/Button/Button";
import { logout } from "../../../pages/auth/store/auth.slice";
import useAnimation from "../../../hooks/useAnimation";

function ListLink({ to, children }: { children: React.ReactNode; to: string }) {
  return (
    <li className="text-stone-900 hover:text-blue-600 transition-all">
      <Link to={to}>{children}</Link>
    </li>
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
      className="w-screen h-16"
    >
      <ul className="flex justify-start gap-8 items-center h-full px-24">
        <ListLink to={routes.home}>Home</ListLink>
        <ListLink to={routes.groups}>Groups</ListLink>
        <li className="ml-auto">
          <Button onClick={onLogout}>Sign out</Button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navigation;
