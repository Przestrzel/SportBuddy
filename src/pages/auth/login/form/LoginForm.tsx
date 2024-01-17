import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Button from "../../../../components/common/Button/Button";
import { ILogin } from "../../types/auth.types";
import routes from "../../../../config/routes";
import Link from "../../../../components/common/Link/Link";
import { loginSchema } from "../../validators/auth.validators";
import ControlledInput from "../../../../components/common/ControlledInput/ControlledInput";
import { authSlice } from "../../../../store/slices/auth.slice";
import LoadingWrapper from "../../../../components/common/LoadingWrapper/LoadingWrapper";
import { useLoginMutation } from "../../../../store/services/auth.services";
import { useAppDispatch } from "../../../../store/store";

function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });
  const [handleLogin, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = (data: ILogin) => {
    handleLogin(data)
      .unwrap()
      .then((res) => {
        dispatch(authSlice.actions.setToken(res.accessToken));
      })
      .catch(() => {
        toast.error("Wrong email or password");
      });
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
        <LoadingWrapper isLoading={isLoading}>
          <Button disabled={!isValid} type="submit">
            Sign in
          </Button>
        </LoadingWrapper>
      </div>
    </form>
  );
}

export default LoginForm;
