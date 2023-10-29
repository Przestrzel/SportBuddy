import Button from "../../../../components/common/Button/Button";
import Input from "../../../../components/common/Input/Input";
import Label from "../../../../components/common/Label/Label";
import Link from "../../../../components/common/Link/Link";
import routes from "../../../../config/routes";

function SignUpForm() {
  return (
    <form className="w-full max-w-lg">
      <Label htmlFor="e-mail">E-mail</Label>
      <Input id="e-mail" type="text" />
      <div className="flex gap-4 mt-2">
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div>
          <Label htmlFor="rePassword">Repeat password</Label>
          <Input id="rePassword" type="password" />
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" type="text" />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" type="text" />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <Link to={routes.login}>Already have an account?</Link>
        <Button type="submit" onClick={() => null}>
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
