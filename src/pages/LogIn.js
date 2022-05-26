import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-full h-screen>">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/b316950d-5137-42d2-a5be-0bffd88bb2ff/DE-de-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold ">Log In</h1>
            <form className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-700 rounded-sm"
                type="email"
                placeholder="Your Email..."
                autoComplete="email"
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded-sm"
                type="password"
                placeholder="Your Password..."
              />
              <button className="bg-red-600 py-3 my-6 rounded-lg font-bold">
                Log In
              </button>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <p>
                  <input className="mr-2" type="checkbox" /> Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8 text-gray-500">
                <span>Dont have a account for Netflix?</span>{" "}
                <Link className="hover:text-white" to="/signup">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
