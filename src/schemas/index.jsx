import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstname: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your FirstName"),
  lastname: Yup.string().min(2).max(25).required("Please enter your LastName"),
  userbio: Yup.string().min(2).max(100).required("Please enter Bio"),
  userlocation: Yup.string()
    .min(10)
    .max(25)
    .required("Please enter your Location"),
  userimage: Yup.mixed()
    .nullable()
    .required("Please upload your profile picture"),
});
