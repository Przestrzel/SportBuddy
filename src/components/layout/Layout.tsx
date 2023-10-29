import { Toaster } from "react-hot-toast";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen h-screen bg-gray-200 px-24">
      {children}
      <Toaster position="bottom-left" reverseOrder={false} />
    </main>
  );
}

export default Layout;
