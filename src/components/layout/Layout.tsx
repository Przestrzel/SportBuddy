import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="w-screen h-screen bg-gray-200 px-24">
      <Outlet />
    </main>
  );
}

export default Layout;
