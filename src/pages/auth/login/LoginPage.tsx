import Card from "../../../components/common/Card/Card";
import Input from "../../../components/common/Input/Input";
import Label from "../../../components/common/Label/Label";
import Header from "../../../components/typography/Header/Header";

function LoginPage() {
  return (
    <section className="container w-full h-full flex">
      <div className="m-auto w-1/3 h-1/2">
        <Card>
          <form className="w-full max-w-lg">
            <Header className="text-center mb-12">Sign in</Header>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="John"
              className="mb-4"
            />
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </form>
        </Card>
      </div>
    </section>
  );
}

export default LoginPage;
