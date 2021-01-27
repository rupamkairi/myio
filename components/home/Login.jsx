import React from "react";

export default function Login() {
  return (
    <div className="w-full flex flex-col">
      <div className="mx-auto flex flex-col">
        <button className="py-2 px-8 font-semibold rounded-md border-2 bg-white text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white">
          Login with Google
        </button>
        <br className="py-2" />
        <button className="py-2 px-8 font-semibold rounded-md border-2 bg-white text-black border-black hover:bg-black hover:text-white">
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
