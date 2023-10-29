import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../../../../components/common/Label/Label";
import Input from "../../../../components/common/Input/Input";
import Button from "../../../../components/common/Button/Button";
import { ILogin } from "../../types/auth.types";
import loginSchema from "../../validators/auth.validators";
import routes from "../../../../config/routes";
import Link from "../../../../components/common/Link/Link";

function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: ILogin) => {
    toast.success(`Welcome ${data.email}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <>
            <Label htmlFor="e-mail">E-mail</Label>
            <Input
              value={value}
              onChange={onChange}
              id="e-mail"
              type="text"
              placeholder="John"
              className="mb-4"
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <>
            <Label htmlFor="password">Password</Label>
            <Input
              value={value}
              onChange={onChange}
              id="password"
              type="password"
            />
          </>
        )}
      />
      <div className="flex justify-between mt-4">
        <Link to={routes.signUp}>Don`t have an account?</Link>
        <Button disabled={!isValid} type="submit" onClick={() => null}>
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
