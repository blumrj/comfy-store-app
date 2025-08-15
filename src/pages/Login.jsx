import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import customFetch from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => () => {
  const { user } = store.getState();

  if (user.user) {
    return redirect("/");
  }
  return {}; //allow loading the route if no user
};

//in react router, we have a Form component. We can use this component with method='post' and define the action function which will be called when the user submits the form. this function can be registered in the route object.

//the action function accepts the request object that is passed from the Form component when the user submits the data. The request object has a formData() function which we can use to get the form data

// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const dataObj = Object.fromEntries(formData);
    try {
      const { data } = await customFetch.post("/auth/local", dataObj);
      const user = {
        username: data.user.username,
        token: data.jwt,
      };
      localStorage.setItem("user", JSON.stringify(user));
      store.dispatch(loginUser(user));
      toast.success("Welcome back!");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Something went wrong. Please try again later.";
      toast.error(errorMessage);
    }
  };

const Login = () => {
  return (
    <div className="relative w-[100vw] h-[100vh]">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-base-200 border-base-300 rounded-box border p-8 w-sm ">
        <h1 className="text-3xl mb-4 font-bold text-center">Login</h1>
        <Form className="fieldset" method="post">
          <FormInput
            type="email"
            label="email"
            placeholder="Email"
            name="identifier"
          />

          <FormInput
            type="password"
            label="password"
            placeholder="Password"
            name="password"
          />

          <SubmitButton text="login" />
          <p className="text-center mt-4">
            Not a member yet?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
