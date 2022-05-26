import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          {"netflix".toUpperCase()}
        </h1>
      </Link>
      <div>
        <Link to="login">
          <button className="text-white pr-4">Sign in</button>
        </Link>
        <Link to="signup">
          <button className="bg-red-600 px-6 py-2 rounded-lg text-white cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
