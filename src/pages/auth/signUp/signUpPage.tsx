import NamedLogo from "../../../components/common/Logo/NamedLogo";
import Header from "../../../components/typography/Header/Header";
import AuthPageContainer from "../common/AuthPageContainer/AuthPageContainer";
import SignUpForm from "./form/SignUpForm";

function SignUpPage() {
  return (
    <AuthPageContainer>
      <div className="container w-full border-b border-gray-300 pb-6 mb-6">
        <NamedLogo />
      </div>
      <Header className="text-center mb-4">Sign up</Header>
      <SignUpForm />
    </AuthPageContainer>
  );
}

export default SignUpPage;
