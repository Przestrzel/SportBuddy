import { Link } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import Card from "../../../components/common/Card/Card";
import Input from "../../../components/common/Input/Input";
import Label from "../../../components/common/Label/Label";
import Header from "../../../components/typography/Header/Header";
import NamedLogo from "../../../components/common/Logo/NamedLogo";

function LoginPage() {
  return (
    <section className="container w-full h-full flex">
      <div className="m-auto w-1/3 h-1/2">
        <Card>
          <form className="w-full max-w-lg">
            <NamedLogo />
            <Header className="text-center mt-4 mb-6">Sign in</Header>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="John"
              className="mb-4"
            />
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
            <div className="flex justify-between mt-4">
              <Button buttonType="link">
                <Link to="/register">Create an account</Link>
              </Button>
              <Button onClick={() => null}>
                <span>Sign in</span>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default LoginPage;
