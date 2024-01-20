import * as yup from "yup";

// eslint-disable-next-line import/prefer-default-export
export const eventSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup
    .string()
    .required()
    .test("date", "Date should be in the future", (value) => {
      const now = new Date();
      const date = new Date(value);
      return date > now;
    }),
  end: yup.string().required(),
  start: yup.string().required(),
  fee: yup.number(),
  limit: yup.number(),
  location: yup.string().required(),
});
