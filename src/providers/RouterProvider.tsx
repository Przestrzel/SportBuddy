import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/login/LoginPage";
import Layout from "../components/layout/Layout";
import NotFound from "../components/common/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

function AppRouterProvider() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading</div>} />
  );
}

export default AppRouterProvider;
