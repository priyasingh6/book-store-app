import React from "react";
import { Link } from "react-router-dom";
import Login from "../home/Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace this with your signup logic
  };

  // Watch the password field to compare with confirmPassword
  const password = watch("password");

  const openLoginModal = () => document.getElementById("login_id").showModal();
  const closeModal = () => document.getElementById("login_id").close();

  return (
    <>
      <div className="items-center flex justify-center min-h-screen">

        <div className="w-[600px]">
          <div className="modal-box bg-white text-slate-900 shadow-2xl border-[1px]">
          <Link to ="/"
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
                  className="dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
                  {...register("username", {
                    required: "Username is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_]+$/,
                      message:
                        "Username can only contain letters, numbers, and underscores",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username.message}</p>
                )}
              </div>

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
                  className="dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
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


// import React, { useDebugValue } from 'react'
// import { Link } from 'react-router-dom'
// import Login from '../home/Login'
// import { useForm } from "react-hook-form";

// function Signup() {
//      const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();
    
//       const onSubmit = (data) => {
//         console.log(data); // Replace this with your login logic
//       };
//     return (
//         <> <div className=' items-center flex justify-center min-h-screen '>

//             <div className="w-[600px]">
//                 <div className="modal-box bg-white text-slate-900 shadow-2xl border-[1px]">
//                     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//                         {/* if there is a button in form, it will close the modal */}
//                         <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//                     </form>
//                     <h3 className="font-bold text-2xl">Signup</h3>

//                     <div className='m-2 p-6 space-y-5 '>

//                         <div className=''>
//                             <span className=' text-lg '>Username
//                             </span>
//                             <br />
//                             <input type="text" placeholder='Enter your username' className='dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200' {...register("username", { required: "username is required" })} />
//                         </div>
//                         <div className=''>
//                             <span className=' text-lg '>Email</span>
//                             <br />
//                             <input type="Email" placeholder='Enter your Email' className='dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200'  {...register("email", { required: "Email is required" })}/>
//                         </div>
//                         <div className=''>
//                             <span className=' text-lg'>Password</span>
//                             <br />
//                             <input type="password" placeholder='Enter your password' className=' dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200 ' {...register("password", { required: "password is required" })} />

//                         </div>
//                         <div className=''>
//                             <span className=' text-lg'>Re-enter Password</span>
//                             <br />
//                             <input type="password" placeholder='Enter your password' className=' dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200 ' {...register("password", { required: "password is required" })} />

//                         </div>

//                         {/* button */}
//                         <div className='flex justify-around'>
//                             <button>
//                                 <div className="btn btn-outline m-2 border-1 bg-slate-200 border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white duration-300  text-sm rounded hover:scale-105  duration-300 shadow-lg cursor-pointer text-center text-lg font-bold">Signup</div>
//                             </button>
//                             <p className='text-center p-4 '>Have an account? <button
//                                 className='text-blue-500 underline  cursor-pointer'
//                                 onClick={() => document.getElementById('login_id').showModal()}>
//                                 Login
//                             </button>{""}
//                              <Login />

//                             </p>
//                         </div>



//                     </div>

//                 </div>
//             </div>
//         </div>

//         </>
//     )
// }

// export default Signup

