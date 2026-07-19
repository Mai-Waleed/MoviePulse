import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Login Now</h2>

        <div className="flex items-center gap-3 mb-8">
          <span className="w-20 h-[2px] bg-sky-500"></span>
          <span className="text-gray-400">Sign in to your account</span>
        </div>

        <form className="flex flex-wrap -mx-3">
          {/* Email */}
          <div className="w-full px-3 mb-6">
            <label htmlFor="email" className="block mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Password */}
          <div className="w-full px-3 mb-6">
            <label htmlFor="password" className="block mb-2 text-gray-300">
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Button */}
          <div className="w-full px-3 mt-2 flex justify-center lg:justify-start">
            <button
              type="submit"
              className="rounded-lg bg-sky-500 px-8 py-3 font-semibold transition-all hover:bg-sky-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>

        <Helmet>
          <title>Noxe | Sign in to your account</title>
        </Helmet>
    </div>
  );
}

export default Login;
