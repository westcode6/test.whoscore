import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import AuthHeader from "../AuthHeader";

const SignUpForm = () => {
  // I made use of react-hook-form for the Validation
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();


//eslint-disable-next-line
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


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
      <div className="mx-auto md:w-1/2 xl:w-2/5 md:rounded-xl px-4 md:px-10 lg:px-0 lg:max-w-md py-6">
        <h2 className="text-[#3F3F3F] text-2xl text-center font-bold">
          Join the Biggest Network of Sport Lovers
        </h2>

        <form
          onSubmit={handleSubmit((data) => {
            alert("Success");
            console.log(data);
            reset()
          })}
          className="my-6"
        >
          <div className=" mb-4">
            <label
              htmlFor="username"
              className="text-sm text-[#3F3F3F] inline-block mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              className="input"
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <span className="text-xs text-red-500 ml-2 mt-2 inline-block">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className=" mb-4">
            <label
              htmlFor="email"
              className="text-sm text-[#3F3F3F] inline-block mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              className="input"

              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: regex,

                  message: 'Please enter a valid email',
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <span className="text-xs text-red-500 ml-2 mt-2 inline-block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className=" mb-4">
            <label
              htmlFor="fullname"
              className="text-sm text-[#3F3F3F] inline-block mb-2"
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input"
              {...register("fullname", {
                required: "Fullname is required",
              })}
            />
            {errors.fullname && (
              <span className="text-xs text-red-500 ml-2 mt-2 inline-block">
                {errors.fullname.message}
              </span>
            )}
          </div>

          <div className=" mb-4">
            <label
              htmlFor="clubName"
              className="text-sm text-[#3F3F3F] inline-block mb-2"
            >
              Club name
            </label>
            <input
              type="text"
              placeholder="Enter your football club name"
              className="input"
              {...register("clubName", {
                required: "Club name is required",
              })}
            />
            {errors.clubName && (
              <span className="text-xs text-red-500 ml-2 mt-2 inline-block">
                {errors.clubName.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm text-[#3F3F3F] inline-block mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={inputType}
                placeholder="Your Password"
                className="input"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password is too short",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password cannot exceed 10 characters",
                  },
                })}
              />

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
            {errors.password && (
              <span className="text-xs text-red-500 ml-2 mt-2 inline-block">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex items-start justify-around text-[#0E3E16] my-6">
            <input
              type="checkbox"
              className="mt-1"
              {...register("checkbox", {
                required: "Accept terms and conditions",
              })}
            />
            <span className="text-sm w-11/12 inline-block">
              Creating an account means you&apos;re good with our Terms and
              Condition, Privacy Policy, and our default Notification Settings
              {errors.checkbox && (
                <span className="text-red-500 text-xs mt-2 inline-block">
                  {errors.checkbox.message}
                </span>
              )}
            </span>
          </div>

          <Button type="submit" text="Sign up" />
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
            Sign up with Google
            <AiOutlineGoogle className="inline-block ml-4 text-2xl" />
          </div>
        </div>

        <span className="block text-gray-500 text-center">
          Already have an account?
          <Link to="/login" className="text-[#0E3E16] ml-1 font-semibold">
            Login
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignUpForm;
