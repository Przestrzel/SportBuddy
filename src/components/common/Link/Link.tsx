import { Link as RouterLink } from "react-router-dom";
import routes from "../../../config/routes";

interface Props {
  children: React.ReactNode;
  to: (typeof routes)[keyof typeof routes];
}

function Link({ children, to }: Props) {
  return (
    <RouterLink
      to={to}
      className="text-sm text-indigo-500 flex items-center rounded p-2 transition-all hover:text-indigo-400 hover:bg-gray-50"
    >
      {children}
    </RouterLink>
  );
}

export default Link;
