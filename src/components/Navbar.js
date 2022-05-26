import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        {"netflix".toUpperCase()}
      </h1>
      <div>
        <button className="text-white pr-4">Sign in</button>
        <button className="bg-red-600 px-6 py-2 rounded-lg text-white cursor-pointer">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
