import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../home/Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state?.form?.pathname || "/";  // Ensure 'form' is extracted properly

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      Fullname: data.fullname,
      Email: data.email,
      Password: data.password,
      ReenterPassword: data.reenterPassword,
    };

    try {
      const res = await axios.post("http://localhost:4001/users/signup", userInfo);

      console.log(res.data);

      if (res.data) {
        toast.success('Signup Successful');  // Fixed the quote typo
        localStorage.setItem("Users", JSON.stringify(res.data));
        
        // Redirect to the specified form or homepage
        navigate(form, { replace: true });
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  // Watch the password field to compare with confirmPassword
  const password = watch("password");

  const openLoginModal = () => document.getElementById("login_id").showModal();
  const closeModal = () => document.getElementById("login_id").close();

  return (
    <>
      <div className="dark:bg-slate-900 items-center flex justify-center min-h-screen">
        <div className="w-[600px]">
          <div className="dark:bg-slate-800 dark:text-slate-100 modal-box bg-white text-slate-900 shadow-2xl border-[1px]">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </Link>
            <h3 className="font-bold text-2xl">Signup</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="m-2 p-6 space-y-5">
              {/* Username Input */}
              <div>
                <span className="text-lg">Username</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-80 px-2 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200 dark:hover:bg-transparent dark:bg-slate-700"
                  {...register("fullname", {
                    required: "Username is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_]+$/,
                      message:
                        "Username can only contain letters, numbers, and underscores",
                    },
                  })}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm">{errors.fullname.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <span className="text-lg">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="dark:hover:bg-transparent dark:bg-slate-700 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <span className="text-lg">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="dark:hover:bg-transparent dark:bg-slate-700 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>

              {/* Re-enter Password Input */}
              <div>
                <span className="text-lg">Re-enter Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="dark:hover:bg-transparent dark:bg-slate-700 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
                  {...register("reenterPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.reenterPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.reenterPassword.message}
                  </p>
                )}
              </div>

              {/* Signup Button */}
              <div className="flex justify-around">
                <button type="submit">
                  <div className="btn btn-outline m-2 border-1 bg-slate-200 border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white duration-300 text-sm rounded hover:scale-105 duration-300 shadow-lg cursor-pointer text-center text-lg font-bold">
                    Signup
                  </div>
                </button>

                {/* Login Trigger */}
                <p className="text-center p-4">
                  Have an account?{" "}
                  <button
                    className="text-blue-500 underline cursor-pointer"
                    onClick={openLoginModal}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Component for the modal */}
      <Login />
    </>
  );
}

export default Signup;
