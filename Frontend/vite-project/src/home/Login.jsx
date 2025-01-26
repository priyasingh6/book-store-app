

import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      Email: data.email,
      Password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/users/login", userInfo);
      console.log(res.data);

      if (res.data) {
        toast.success("Login Successfully");
        document.getElementById("login_id").close();
        setTimeout(() => {
          
          localStorage.setItem("users", JSON.stringify(res.data));
          window.location.reload();
        }, 1000);
        navigate("/", { replace: true });
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong!";
      toast.error("Error: " + errorMessage);
      setTimeout(() => {}, 3000);
    }
  };

  const openModal = () => document.getElementById("login_id").showModal();
  const closeModal = () => document.getElementById("login_id").close();

  return (
    <>
      <Toaster />
      <div>
        <dialog id="login_id" className="modal sm:modal-middle">
          <div className="modal-box bg-gray-100 text-slate-900 dark:bg-slate-900 dark:text-white">
            {/* Close button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 space-y-5">
              {/* Email Input */}
              <div>
                <span className="text-lg">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
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
                  className="dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="btn btn-outline m-2 border-1 bg-slate-200 border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white duration-300 text-sm rounded hover:scale-105 duration-300 shadow-lg cursor-pointer text-center text-lg font-bold"
                >
                  Login
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <p className="text-center p-2 flex">
              Not a member?{" "}
              <Link to="/signup" className="text-blue-500 underline cursor-pointer">
                Signup
              </Link>
            </p>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;



