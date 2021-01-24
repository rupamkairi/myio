import React from "react";

export default function Login() {
  const orange_base = "yellow-600";
  const black_base = "black";
  return (
    <div className="w-full flex flex-col">
      <div className="mx-auto flex flex-col">
        <button
          className={`btn btn-outline hover:bg-${orange_base} border-${orange_base} text-${orange_base}`}
        >
          Login with Google
        </button>
        <br className="py-2" />
        <button
          className={`btn btn-outline hover:bg-${black_base} border-${black_base} text-${black_base}`}
        >
          Login with Apple
        </button>
        <hr className="my-4" />
      </div>
      <div className="mx-auto flex flex-col">
        <span className="font-semibold mb-2">Or, Log In with Email</span>
        <input type="text" className="form-text my-2" />
        <input type="password" className="form-text my-2" />
        <button
          className={`my-2 btn btn-outline focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300`}
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
