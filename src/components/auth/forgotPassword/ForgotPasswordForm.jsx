import React from "react";
import FormInput from "../FormInput";
import Button from "../Button";
import { Link } from "react-router-dom";
import AuthHeader from "../AuthHeader";

const ForgotPasswordForm = () => {
  return (
    <>
      <AuthHeader />
      <div className="my-9 mx-auto md:w-1/2 px-4 lg:w-2/5 md:rounded-xl md:px-10 md:py-16 lg:px-0 lg:max-w-md">
        <h2 className="text-[#3F3F3F] text-2xl md:text-3xl md:text-center font-semibold">
          Forgot Password
        </h2>
        <form className="my-6">
          <div className="mb-6">
            <label htmlFor="" className="text-sm text-[#3F3F3F] mb-2 block">
              Email address
            </label>
            <FormInput type="text" placeholder="name@email.com" />
          </div>

          <Button text="Reset Password" />
        </form>

        <span className="block text-gray-500 cursor-pointer text-center mt-10">
          Back to
          <Link to="/login" className="text-[#0E3E16] ml-1 font-semibold">
            login
          </Link>
        </span>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
