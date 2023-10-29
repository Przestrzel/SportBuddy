import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login/LoginPage";
import Layout from "../components/layout/Layout";
import routes from "../config/routes";
import SignUpPage from "../pages/auth/signUp/SignUpPage";

function AppRouterProvider() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.signUp} element={<SignUpPage />} />
          <Route path="*" element={<Navigate to={routes.login} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouterProvider;
