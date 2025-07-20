import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import customFetch from "../utils";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const formObj = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/local/register", formObj);
    toast.success("Success. Please log into your account");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Something went wrong. Please try again later.";
    toast.error(errorMessage);
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => () => {
  const { user } = store.getState();

  if (user.user) {
    return redirect("/");
  }
  return {};
};

const Register = () => {
  return (
    <div className="relative w-[100vw] h-[100vh]">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-base-200 border-base-300 rounded-box border p-8 w-sm ">
        <h1 className="text-3xl mb-4 font-bold text-center">
          Create an Account
        </h1>

        <Form className="fieldset" method="post">
          <FormInput
            type="text"
            label="username"
            placeholder="Username"
            name="username"
          />

          <FormInput
            type="email"
            label="email"
            placeholder="Email"
            name="email"
          />

          <FormInput
            type="password"
            label="password"
            placeholder="Password"
            name="password"
          />

          <SubmitButton text="register" />

          <p className="text-center mt-4">
            Already a member?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
