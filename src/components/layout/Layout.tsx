import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="w-screen h-screen bg-gray-200 px-24">
      <Outlet />
      <Toaster position="bottom-left" reverseOrder={false} />
    </main>
  );
}

export default Layout;
