import Card from "../../../components/common/Card/Card";
import NamedLogo from "../../../components/common/Logo/NamedLogo";
import PageContainer from "../../../components/common/PageContainer/PageContainer";
import Header from "../../../components/typography/Header/Header";
import LoginForm from "./form/LoginForm";

function LoginPage() {
  return (
    <PageContainer>
      <div className="m-auto w-1/3 h-1/2">
        <Card className="max-w-sm">
          <div className="container w-full border-b border-gray-300 pb-6 mb-6">
            <NamedLogo />
          </div>
          <Header className="text-center mb-4">Sign in</Header>
          <LoginForm />
        </Card>
      </div>
    </PageContainer>
  );
}

export default LoginPage;
