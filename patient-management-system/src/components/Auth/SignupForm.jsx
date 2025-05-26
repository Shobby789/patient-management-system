import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="w-full min-h-screen relative">
      <section className="w-full grid grid-cols-2">
        <section className="w-full h-screen flex items-center justify-center px-6 py-20">
          <form className="py-7 flex flex-col items-center justify-center gap-6 w-[80%]">
            <div className="w-full text-center space-y-5">
              <h1 className="font-semibold text-2xl xl:text-3xl 2xl:text-4xl">
                Welcome To Clinic
              </h1>
              <p className="text-gray-100 lg:w-[390px] 2xl:w-[380px] mx-auto text-[15px]">
                Please enter your details to access the healthcare analytics
                dashboard
              </p>
            </div>
            <div class="w-full lg:w-[390px] 2xl:w-[440px]">
              <label
                htmlFor="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="w-full lg:w-[390px] 2xl:w-[440px]">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="w-full lg:w-[390px] 2xl:w-[440px]">
              <label
                htmlFor="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your phone"
                required
              />
            </div>
            <div class="w-full lg:w-[390px] 2xl:w-[440px]">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Create password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="w-full lg:w-[390px] 2xl:w-[440px] mb-5">
              <label
                htmlFor="confirmPassword"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full lg:w-[390px] 2xl:w-[440px]">
              <button
                type="submit"
                class="text-white bg-[#24AE7C] hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full lg:w-[390px] 2xl:w-[440px] sm:w-auto px-5 py-2.5 text-center"
              >
                Register
              </button>
            </div>
            <div className="w-full lg:w-[390px] 2xl:w-[440px]">
              <p className="mx-auto text-center text-sm text-gray-100">
                Already have an account?{" "}
                <Link to="/" className="font-semibold text-[#24AE7C]">
                  Log in
                </Link>{" "}
                to gain access to our powerful healthcare analytics platform.
              </p>
            </div>
          </form>
        </section>
        <section className="w-full h-screen">
          <img
            src="https://images.unsplash.com/photo-1551601651-05a4836d25c2?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-screen object-cover brightness-50"
          />
        </section>
      </section>
    </div>
  );
};

export default SignupForm;
