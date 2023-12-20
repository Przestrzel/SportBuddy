import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import routes from "../../../config/routes";
import NamedLogo from "../../common/Logo/NamedLogo";
import Button from "../../common/Button/Button";
import { logout } from "../../../pages/auth/store/auth.slice";

function ListLink({ to, children }: { children: React.ReactNode; to: string }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}

function Navigation() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="w-screen h-16">
      <ul className="flex justify-start gap-8 items-center h-full px-24">
        <ListLink to={routes.home}>
          <NamedLogo size="small" />
        </ListLink>
        <ListLink to={routes.home}>Groups</ListLink>
        <li className="ml-auto">
          <Button onClick={onLogout}>Sign out</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
