import * as yup from "yup";

// eslint-disable-next-line import/prefer-default-export
export const createGroupSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});
