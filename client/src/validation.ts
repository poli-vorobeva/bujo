import * as yup from "yup";

export const SchemaAuth = yup.object({
  email: yup.string().email("Invalid email").required("This field is required"),
  password: yup
    .string()
    .min(6, "Must have at least 6 characters")
    .required("This field is required"),
});
