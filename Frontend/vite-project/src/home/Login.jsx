
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace this with your login logic
  };

  const openModal = () => document.getElementById("login_id").showModal();
  const closeModal = () => document.getElementById("login_id").close();

  return (
    <>
      <div>
        {/* Navbar Login Button (used to open modal)
        <button
          className="btn btn-primary"
          onClick={openModal} // Trigger to open the modal
        >
          Login
        </button> */}

        {/* Modal */}
        <dialog id="login_id" className="modal">

          <div className="modal-box bg-gray-100 text-slate-900 dark:bg-slate-900 dark:text-white">
           
            {/* Close button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="m-2 p-6 space-y-5">
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
              <div className="flex justify-around">
                <button
                  type="submit"
                  className="btn btn-outline m-2 border-1 bg-slate-200 border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white duration-300 text-sm rounded hover:scale-105 duration-300 shadow-lg cursor-pointer text-center text-lg font-bold"
                >
                  Login
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <p className="text-center p-4">
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









// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form"

// const Login = () => {
//   // TODO 
  
//   const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();
//       const onSubmit  = (data) => 
//         {console.log(data);}


//   return (
//     <> <div>

// <dialog id="login_id" className="modal">

//   <div className="modal-box bg-gray-100 text-slate-900  dark:bg-slate-900 dark:text-white">
//     <form onSubmit={handleSubmit(onSubmit)} method="dialog" >

//       <Link to ="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//       onClick={() => document.getElementById("login_id").close()}>✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Login</h3>

//   <div className='m-2 p-6 space-y-5 '>

//   <div className=''>
//     <span className=' text-lg '>Email</span>
//     <br />
//     <input type="Email" placeholder='Enter your Email' className='dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200' {...register("email", { required: true })} />
//     </div>
// <div className=''>
//     <span className=' text-lg'>Password</span>
//     <br />
//     <input type="password" placeholder='Enter your password'  className=' dark:bg-slate-800 w-80 px-3 border rounded-md outline-none bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200 ' {...register("password", { required: true })} />

//    </div>
  
//   {/* botton */}
//   <div className='flex justify-around'>
  
//     <div className="btn btn-outline m-2 border-1 bg-slate-200 border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white duration-300  text-sm rounded hover:scale-105  duration-300 shadow-lg cursor-pointer text-center text-lg font-bold">Login</div>    
   
//     <p className='text-center p-4 '>Not a member? <Link to="/signup"
//      className='text-blue-500 underline  cursor-pointer'>
//         Signup
//      </Link></p>
//   </div>
  
  
  
//   </div>

//   </div>
// </dialog>
//     </div>
    
//     </>
//   )
// }

// export default Login


