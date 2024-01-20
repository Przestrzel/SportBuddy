import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/common/Button/Button";
import Link from "../../../../components/common/Link/Link";
import routes from "../../../../config/routes";
import { IRegister } from "../../types/auth.types";
import { registerSchema } from "../../validators/auth.validators";
import ControlledInput from "../../../../components/common/ControlledInput/ControlledInput";
import { useSignUpMutation } from "../../../../store/services/auth.services";
import LoadingWrapper from "../../../../components/common/LoadingWrapper/LoadingWrapper";
import { useAppDispatch } from "../../../../store/store";
import { authSlice } from "../../../../store/slices/auth.slice";

function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IRegister>({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signUp, { isLoading }] = useSignUpMutation();

  const onSubmit = (data: IRegister) => {
    const registerData = {
      email: data.email,
      password: data.password,
      fullName: `${data.firstName} ${data.lastName}`,
      username: data.username,
    };
    signUp(registerData)
      .unwrap()
      .then((res) => {
        dispatch(authSlice.actions.setToken(res.accessToken));
        toast.success(
          `Successful registration ${data.firstName} ${data.lastName}`,
        );
        navigate(routes.login);
      })
      .catch(() => {
        toast.error("Something went wrong! Try again.");
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
          name="username"
          type="text"
          label="Username"
        />
      </div>
      <div className="flex gap-4">
        <div>
          <ControlledInput
            control={control}
            name="firstName"
            type="text"
            label="First name"
          />
        </div>
        <div>
          <ControlledInput
            control={control}
            name="lastName"
            type="text"
            label="Last name"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <ControlledInput
            control={control}
            name="password"
            type="password"
            label="Password"
          />
        </div>
        <div>
          <ControlledInput
            control={control}
            name="rePassword"
            type="password"
            label="Repeat password"
          />
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <Link to={routes.login}>Already have an account?</Link>
        <LoadingWrapper isLoading={isLoading}>
          <Button disabled={!isValid} type="submit">
            Sign in
          </Button>
        </LoadingWrapper>
      </div>
    </form>
  );
}

export default SignUpForm;
