import { Toaster } from "react-hot-toast";
import Navigation from "./navigation/Navigation";

interface Props {
  children: React.ReactNode;
  isLogged: boolean;
}

function Layout({ children, isLogged }: Props) {
  return (
    <>
      {isLogged ? <Navigation /> : null}
      <main className="w-screen bg-gray-200 px-24 flex-1">
        {children}
        <Toaster position="bottom-left" reverseOrder={false} />
      </main>
    </>
  );
}

export default Layout;
