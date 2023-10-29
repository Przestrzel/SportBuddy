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

function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IRegister>({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: IRegister) => {
    toast.success(`Successful registration ${data.firstName} ${data.lastName}`);
    navigate(routes.login);
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
      <div className="flex justify-between mt-2">
        <Link to={routes.login}>Already have an account?</Link>
        <Button disabled={!isValid} type="submit">
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
