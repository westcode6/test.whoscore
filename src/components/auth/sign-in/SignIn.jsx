import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import FormInput from "../FormInput";
import Button from "../Button";
import { Link } from "react-router-dom";
import AuthHeader from "../AuthHeader";

const LoginForm = () => {
  const [inputType, setInputType] = useState("password");

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <>
      <AuthHeader />
      <div className="my-9 mx-auto md:w-1/2 xl:w-2/5 md:rounded-xl px-4 md:px-10 lg:px-0 lg:max-w-md md:py-16">
        <h2 className="text-[#3F3F3F] text-2xl md:text-3xl md:text-center font-semibold">
          Welcome back
        </h2>
        <form className="my-6">
          <div className="mb-4">
            <label
              htmlFor=""
              className="text-sm text-[#3F3F3F] inline-block mb-2"
            >
              Username or Email address
            </label>
            <FormInput type="text" placeholder="name@email.com" />
          </div>

          <div>
            <label
              htmlFor=""
              className="text-sm text-[#3F3F3F] inline-block mb-2"
            >
              Password
            </label>
            <div className="relative">
              <FormInput type={inputType} placeholder="Enter your password" />
              <span
                onClick={togglePassword}
                className="absolute top-[35%] right-4 cursor-pointer"
              >
                {inputType === "password" ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            </div>
          </div>

          <div>
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-[#0E3E16] mb-6 block mt-4 text-center"
            >
              Forgot password?
            </Link>
          </div>
          <Button text="Login" />
        </form>

        <div>
          <span
            className=" text-gray-500 flex items-center w-full before:mr-2 before:flex-1 before:w-8 before:h-[1px] before:inline-flex before:bg-gray-500
        after:ml-2 after:flex-1 after:w-8 after:h-[1px] after:inline-flex after:bg-gray-500"
          >
            or
          </span>
        </div>

        <div className="my-6">
          <div className="bg-[#E0E0E0] text-center p-4 rounded-lg text-sm relative mb-4">
            Sign in with Google
            <AiOutlineGoogle className="inline-block ml-4 text-2xl" />
          </div>
        </div>

        <span className="block text-gray-500 cursor-pointer text-center">
          Don&apos;t have an account yet?
          <Link to="/sign-up" className="text-[#0E3E16] ml-1 font-semibold">
            Sign up
          </Link>
        </span>
      </div>
    </>
  );
};

export default LoginForm;
