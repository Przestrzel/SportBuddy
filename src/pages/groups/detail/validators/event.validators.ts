import * as yup from "yup";

// eslint-disable-next-line import/prefer-default-export
export const eventSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  date: yup.string().required(),
  end: yup.string().required(),
  start: yup.string().required(),
  fee: yup.number(),
  limit: yup.number(),
  location: yup.string().required(),
});
