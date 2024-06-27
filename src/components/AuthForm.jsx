import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import toast from "react-hot-toast";

const AuthForm = ({ formid }) => {
  const [isLoader, setIsLoader] = useState(false);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {formid == "login" ? (
        <>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.email) errors.email = "Required";
              if (!values.password) errors.password = "Required";

              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const data = JSON.stringify(values);
              try {
                setIsLoader(true);
                const response = await fetch(
                  "https://osteoai-backend.onrender.com/auth/login",
                  {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: data,
                  }
                );
                const result = await response.json();
                if (result.token) {
                  setIsLoader(false);
                  navigate("/home");
                  const user = JSON.stringify(result.user);
                  localStorage.setItem("user", user);
                  localStorage.setItem("token", result.token);
                } else {
                  setIsLoader(false);
                  toast.error(result.message);
                }
              } catch (error) {
                setIsLoader(false);
                toast.error("Error submitting form");
                console.log("Submit error:", error);
                setSubmitting(false);
              }
            }}
          >
            <Form className="flex flex-col items-center justify-center gap-16 mt-4">
              <div
                id="inputSection"
                className="h-12 w-[90%] flex flex-col gap-2 justify-start"
              >
                <label
                  htmlFor="email"
                  className="text-base text-[#3B2B3F] font-semibold ml-1 flex gap-4 "
                >
                  Username
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 font-mono"
                  />
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="h-12 w-full p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"
                />
                <p className=" font-mono text-sm text-[#3B2B3F] pl-3">
                  Use: test@test.com
                </p>
              </div>
              <div
                id="inputSection"
                className="h-12 w-[90%] flex flex-col gap-2 justify-start"
              >
                <label
                  htmlFor="password"
                  className="text-base text-[#3B2B3F] font-semibold ml-1 flex gap-4"
                >
                  Password
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 font-mono"
                  />
                </label>
                <Field
                  type={status ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="relative h-12 w-full p-4 rounded-lg border-b-2 border-b-black outline-none focus:border-b-[#3B2B3F]"
                />
                <span
                  className="relative h-auto w-14 flex items-center justify-center bottom-full left-[80%] text-base font-semibold text-[#3B2B3F] cursor-pointer"
                  onClick={() => {
                    setStatus(!status);
                  }}
                >
                  {status ? "Hide" : "Show"}
                </span>
                <p className="relative bottom-[50%] font-mono text-sm text-[#3B2B3F] pl-3">
                  Use: test@123
                </p>
              </div>
              {isLoader ? (
                <div id="Authloader"></div>
              ) : (
                <>
                  <div id="submitBtn" className="mt-5">
                    <button
                      type="submit"
                      className="p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]"
                    >
                      Login
                    </button>
                  </div>
                </>
              )}
              <p className="mt-[-30px] text-base text-[#3B2B3F]">
                Do not have an account?{" "}
                <strong className=" cursor-pointer">
                  <Link to="/signup">Register</Link>
                </strong>
              </p>
            </Form>
          </Formik>
        </>
      ) : (
        <>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              role: "",
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.firstName) errors.firstName = "Required";
              if (!values.lastName) errors.lastName = "Required";
              if (!values.role) errors.role = "Required";
              if (!values.email) errors.email = "Required";
              if (!values.password) errors.password = "Required";

              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const data = JSON.stringify(values);
              try {
                const response = await fetch(
                  "https://osteoai-backend.onrender.com/user/signup",
                  {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: data,
                  }
                );
                const result = await response.json();
                console.log(result.message);
                if (result.message == "user created successfully") {
                  navigate("/login");
                } else {
                  toast.error("Email already resigtered!");
                }
              } catch (error) {
                toast.error("Error submitting form");
                console.log("Submit error:", error);
                setSubmitting(false);
              }
            }}
          >
            <Form className="flex flex-col justify-start items-center gap-16 mt-4">
              <div
                id="personalInfoSection"
                className="h-12 w-full flex flex-col gap-3 justify-start mb-16"
              >
                <div
                  id="firstName"
                  className="w-full flex items-center justify-start gap-2"
                >
                  <label
                    htmlFor="firstName"
                    className="text-base text-[#3B2B3F] font-semibold max-[400px]:ml-0 ml-1 basis-[25%] flex flex-col max-[400px]:text-sm"
                  >
                    First Name
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className="text-red-500 font-mono"
                    />
                  </label>

                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"
                  />
                </div>

                <div
                  id="lastName"
                  className="flex items-center justify-center gap-2"
                >
                  <label
                    htmlFor="lastName"
                    className="text-base text-[#3B2B3F] font-semibold max-[400px]:ml-0 ml-1 basis-[25%] flex flex-col max-[400px]:text-sm"
                  >
                    Last Name
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 font-mono"
                    />
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"
                  />
                </div>

                <div
                  id="role"
                  className="flex items-center justify-center gap-2"
                >
                  <label
                    htmlFor="role"
                    className="text-base text-[#3B2B3F] font-semibold max-[400px]:ml-0 ml-1 basis-[25%] text-center flex flex-col max-[400px]:text-sm"
                  >
                    Role
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="text-red-500 font-mono"
                    />
                  </label>
                  <Field
                    type="text"
                    id="role"
                    name="role"
                    placeholder="Role"
                    className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"
                  />
                </div>
              </div>
              <div
                id="credentialInputSection"
                className="h-12 w-full flex flex-col gap-3 justify-start"
              >
                <div
                  id="username"
                  className="flex items-center justify-center gap-2"
                >
                  <label
                    htmlFor="email"
                    className="text-base text-[#3B2B3F] font-semibold max-[400px]:ml-0 ml-1 basis-[25%] flex flex-col max-[400px]:text-sm"
                  >
                    Username
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 font-mono"
                    />
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"
                  />
                </div>

                <div
                  id="password"
                  className="flex items-center justify-center gap-2"
                >
                  <label
                    htmlFor="password"
                    className="text-base text-[#3B2B3F] font-semibold max-[400px]:ml-0 ml-1 basis-[25%] flex flex-col max-[400px]:text-sm"
                  >
                    Password
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 font-mono"
                    />
                  </label>
                  <Field
                    type={status ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="realtive h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black outline-none focus:border-b-[#3B2B3F]"
                  />
                </div>
                <span
                  className="relative h-auto w-14 flex items-center justify-center bottom-full left-[85%] text-base font-semibold text-[#3B2B3F] cursor-pointer"
                  onClick={() => {
                    setStatus(!status);
                  }}
                >
                  {status ? "Hide" : "Show"}
                </span>
              </div>
              {isLoader ? (
                <div id="Authloader"></div>
              ) : (
                <>
                  <div id="submitBtn" className="mt-5">
                    <button
                      type="submit"
                      className="p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]"
                    >
                      Register
                    </button>
                  </div>
                </>
              )}
              <p className="mt-[-30px] text-base text-[#3B2B3F]">
                Already have an account?{" "}
                <strong className=" cursor-pointer">
                  <Link to="/login">Login</Link>
                </strong>
              </p>
            </Form>
          </Formik>
        </>
      )}
    </>
  );
};

export default AuthForm;
