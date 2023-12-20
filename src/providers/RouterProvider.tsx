import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login/LoginPage";
import Layout from "../components/layout/Layout";
import routes from "../config/routes";
import SignUpPage from "../pages/auth/signUp/SignUpPage";
import { useAppSelector } from "../store/store";

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
      <Route path={routes.home} element={<div>Home</div>} />
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
