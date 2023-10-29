import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});
