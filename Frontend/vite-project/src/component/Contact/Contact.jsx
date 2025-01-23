import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace this with your logic to send the form data (e.g., API call)
  };

  const closeModal = () => document.getElementById("login_id").close();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className=" modal-box w-full max-w-lg bg-white p-6 rounded-md shadow-lg">

       <Link to ="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={closeModal}
                  >
                    ✕
                  </Link> 
        <h2 className="text-2xl font-bold text-gray-700 text-start">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
          {/* Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "Name can only contain letters and spaces",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 hover:scale-105 duration-200 hover:shadow-lg hover:border-gray-200"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Enter your message"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 hover:shadow-lg hover:border-gray-200"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
              })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
