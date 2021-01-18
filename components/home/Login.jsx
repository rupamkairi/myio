import React from "react";

export default function Login() {
  const orange_base = "yellow-600";
  const black_base = "black";
  return (
    <div className="w-full flex flex-col">
      <div className="mx-auto flex flex-col">
        <button
          className={`py-2 px-8 bg-${orange_base} text-white font-semibold rounded border-2 border-${orange_base} hover:bg-white hover:text-${orange_base}`}
        >
          Login with Google
        </button>
        <hr className="py-2" />
        <button
          className={`py-2 px-8 bg-${black_base} text-white font-semibold rounded border-2 border-${black_base} hover:bg-white hover:text-${black_base}`}
        >
          Login with Apple
        </button>
        <hr className="my-2" />
      </div>
      <div className="mx-auto flex flex-col">
        <span className="font-semibold my-2">Or, Log In with Email</span>
        <input
          type="text"
          className="my-2 py-2 px-2 outline-none border-2 rounded border-grey focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="password"
          className="my-2 py-2 px-2 outline-none border-2 rounded border-grey focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />
        <button
          className={`py-2 px-8 my-2 bg-blue-500 text-white border-blue-500 font-semibold rounded border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300`}
        >
          Log In
        </button>
        <hr className="my-2" />
        <a href="#" className="font-semibold">
          Forgot Password?
        </a>
        <a href="#" className="font-semibold">
          Not a member? Sign Up
        </a>
      </div>
    </div>
  );
}
