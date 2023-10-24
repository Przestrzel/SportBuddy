import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import LoginPage from "../pages/auth/login/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

export default RouterProvider;
