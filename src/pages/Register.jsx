import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const Register = () => {
  return (
    <div className="relative w-[100vw] h-[100vh]">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-base-200 border-base-300 rounded-box border p-8 w-sm ">
        <h1 className="text-3xl mb-4 font-bold text-center">
          Create an Account
        </h1>

        <form className="fieldset">
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
            name="identifier"
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
        </form>
      </div>
    </div>
  );
};

export default Register;
