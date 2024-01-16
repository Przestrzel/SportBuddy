import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import Button from "../../../../components/common/Button/Button";
import { ILogin } from "../../types/auth.types";
import routes from "../../../../config/routes";
import Link from "../../../../components/common/Link/Link";
import { loginSchema } from "../../validators/auth.validators";
import ControlledInput from "../../../../components/common/ControlledInput/ControlledInput";
import { login } from "../../../../store/slices/auth.slice";
import LoadingWrapper from "../../../../components/common/LoadingWrapper/LoadingWrapper";

function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data: ILogin) => {
    toast.success(`Welcome ${data.email}`);

    // TODO: Replace mock with API call
    const user = {
      id: "Guid",
      email: data.email,
      firstName: "John",
      lastName: "Snow",
      accessToken: "12",
    };
    dispatch(login(user));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg flex flex-col gap-2"
    >
      <div>
        <ControlledInput
          control={control}
          name="email"
          type="text"
          label="E-mail"
        />
      </div>
      <div>
        <ControlledInput
          control={control}
          name="password"
          type="password"
          label="Password"
        />
      </div>
      <div className="flex justify-between mt-2">
        <Link to={routes.signUp}>Don`t have an account?</Link>
        <LoadingWrapper size={8} isLoading={false}>
          <Button disabled={!isValid} type="submit">
            Sign in
          </Button>
        </LoadingWrapper>
      </div>
    </form>
  );
}

export default LoginForm;
