import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <section className="w-full flex items-center justify-between h-screen">
        <section className="w-full lg:w-[60%] h-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="p-10 flex flex-col items-center gap-6 w-[60%]"
          >
            <div className="w-full text-center space-y-5">
              <h1 className="font-semibold text-2xl xl:text-3xl 2xl:text-4xl">
                Welcome Back
              </h1>
              <p className="text-gray-100 lg:w-[340px] 2xl:w-[440px] mx-auto text-[15px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aliquid modi maxime fugiat.
              </p>
            </div>
            <div class="w-full lg:w-[340px] 2xl:w-[440px]">
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="w-full lg:w-[340px] 2xl:w-[440px]">
              <label
                htmlFor="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full lg:w-[340px] 2xl:w-[440px] flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-gray-900 dark:text-gray-300 underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="w-full lg:w-[340px] 2xl:w-[440px]">
              <button
                type="submit"
                class="text-white bg-[#24AE7C] hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full lg:w-[340px] 2xl:w-[440px] sm:w-auto px-5 py-2.5 text-center"
              >
                Login
              </button>
            </div>
            <div className="w-full lg:w-[340px] 2xl:w-[440px]">
              <p className="mx-auto text-center text-sm text-gray-100">
                New user?{" "}
                <Link to="/sign-up" className="font-semibold text-[#24AE7C]">
                  Create an account
                </Link>{" "}
                to gain access to our powerful healthcare analytics platform.
              </p>
            </div>
          </form>
        </section>
        <section className="w-full lg:w-[40%] h-full">
          <img
            src="https://images.unsplash.com/photo-1551601651-05a4836d25c2?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
        </section>
      </section>
    </div>
  );
};

export default LoginForm;
