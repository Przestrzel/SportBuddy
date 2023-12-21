import NamedLogo from "../../../components/common/Logo/NamedLogo";
import Header from "../../../components/typography/Header/Header";
import AuthPageContainer from "../common/AuthPageContainer/AuthPageContainer";
import LoginForm from "./form/LoginForm";

function LoginPage() {
  return (
    <AuthPageContainer>
      <div className="container w-full border-b border-gray-300 pb-6 mb-6">
        <NamedLogo />
      </div>
      <Header size="3xl" className="text-center mb-4">
        Sign in
      </Header>
      <LoginForm />
    </AuthPageContainer>
  );
}

export default LoginPage;
