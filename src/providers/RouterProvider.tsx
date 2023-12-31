import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login/LoginPage";
import Layout from "../components/layout/Layout";
import routes from "../config/routes";
import SignUpPage from "../pages/auth/signUp/SignUpPage";
import { useAppSelector } from "../store/store";
import GroupPage from "../pages/groups/page/GroupPage";
import GroupDetailPage from "../pages/groups/detail/page/GroupDetailPage";
import HomePage from "../pages/home/page/HomePage";

function PublicRoutes() {
  return (
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.signUp} element={<SignUpPage />} />
      <Route path="*" element={<Navigate to={routes.login} />} />
    </Routes>
  );
}

function PrivateRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.groups}>
        <Route path="" element={<GroupPage />} />
        <Route path=":id" element={<GroupDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.home} />} />
    </Routes>
  );
}

function AppRouterProvider() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      <Layout isLogged={!!user}>
        {user ? <PrivateRoutes /> : <PublicRoutes />}
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouterProvider;
