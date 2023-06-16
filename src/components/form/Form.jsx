import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import { Preview } from "../preview/Preview";
import { useContext } from "react";
import { ProfileContext } from "../../App";

export const UserForm = () => {
  const { setProfileData } = useContext(ProfileContext);

  const initialValues = {
    firstname: "",
    lastname: "",
    userbio: "",
    userlocation: "",
    userimage: null,
  };
  const {
    values,
    setFieldValue,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      setProfileData(values);
      console.log(setProfileData);
      alert("Profile Updated go to Profile Page ");
      action.resetForm();
    },
  });

  return (
    <div>
      <div className="max-w-3xl mx-auto rounded-md  bg-[#d6d6d6] mt-[5px] px-6 sm:px-6  lg:px-8">
        <p className="text-2xl font-bold leading-7 p-4 text-center text-black">
          Update Your Profile{}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="md:flex items-center mt-1">
            <div className="w-full md:w-1/2 flex flex-col h-28 ">
              <label
                htmlFor="firstname"
                className="font-semibold leading-none text-black"
              >
                FirstName
              </label>
              {errors.firstname && touched.firstname}
              <input
                type="text"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                name="firstname"
                id="firstname"
                className="leading-none  text-black p-3  mt-2 border-2 mb-3 rounded-lg bg-white outline-none h-10"
              />
              {errors.firstname && touched.firstname ? (
                <span className="flex  items-center font-medium tracking-wide text-red-600 text-xs mt-1 ml-1">
                  {errors.firstname}
                </span>
              ) : null}
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-2 h-28 ">
              <label
                htmlFor="lastname"
                className="font-semibold leading-none text-black"
              >
                LastName
              </label>
              <input
                type="text"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                id="lastname"
                className="leading-none text-black p-3  mt-2 border-2 mb-3 rounded-lg bg-white outline-none h-10 "
              />
              {errors.lastname && touched.lastname ? (
                <span className="flex  items-center font-medium tracking-wide text-red-600 text-xs mt-1 ml-1">
                  {errors.lastname}
                </span>
              ) : null}
            </div>
          </div>
          <div className="md:flex items-center mt-4">
            <div className="w-full flex flex-col">
              <label
                htmlFor="userlocation"
                className="font-semibold leading-none text-black"
              >
                Location
              </label>
              <input
                type="text"
                value={values.userlocation}
                onChange={handleChange}
                onBlur={handleBlur}
                id="userlocation"
                className="leading-none text-black p-3  mt-2 bg-white rounded-lg border-2 outline-none h-10"
              />
              {errors.userlocation && touched.userlocation ? (
                <span className="flex  items-center font-medium tracking-wide text-red-600 text-xs mt-1 ml-1">
                  {errors.userlocation}
                </span>
              ) : null}
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-4">
              <label
                htmlFor="userbio"
                className="font-semibold leading-none text-black"
              >
                Bio
              </label>
              <textarea
                type="text"
                value={values.userbio}
                onChange={handleChange}
                onBlur={handleBlur}
                id="userbio"
                className="h-20 outline-none text-base leading-none text-black p-3  mt-2 bg-white rounded-lg border-2"
              ></textarea>
              {errors.userbio && touched.userbio ? (
                <span className="flex  items-center font-medium tracking-wide text-red-600 text-xs mt-1 ml-1">
                  {errors.userbio}
                </span>
              ) : null}
            </div>
          </div>
          <div className=" mt-4">
            <label
              className="font-semibold leading-none text-black "
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              type="file"
              name="userimage"
              onChange={(e) => {
                setFieldValue("userimage", e.target.files[0]);
              }}
            />
            {values.userimage && <Preview userimage={values.userimage} />}
            {errors.userimage && touched.userimage ? (
              <span className="flex  items-center font-medium tracking-wide text-red-600 text-xs mt-1 ml-1">
                {errors.userimage}
              </span>
            ) : null}
          </div>

          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="mt-6 mb-4 font-semibold leading-none text-center text-white py-2.5 px-10 bg-blue-900 rounded hover:bg-blue-900 w-full"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

{
  /*



*/
}
