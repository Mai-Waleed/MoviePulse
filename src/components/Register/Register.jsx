import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

function Register() {
    const [error, setError] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    // country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.id] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  async function sendRegisterData() {
    //   const response = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);
    if (response.message === "success") {
      console.log(response.data);
    } else {
        setError(response.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRegisterData();
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Register Now</h2>

        <div className="flex items-center gap-3 mb-8">
          <span className="w-20 h-[2px] bg-sky-500"></span>
          <span className="text-gray-400">Create your account</span>
        </div>

        <div className="text-red-500 mb-4">{error}</div>
        <form className="flex flex-wrap -mx-3" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label htmlFor="first_name" className="block mb-2 text-gray-300">
              First Name
            </label>

            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              onChange={getUserData}
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Last Name */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label htmlFor="last_name" className="block mb-2 text-gray-300">
              Last Name
            </label>

            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              onChange={getUserData}
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Age */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label htmlFor="age" className="block mb-2 text-gray-300">
              Age
            </label>

            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              onChange={getUserData}
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Country */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label htmlFor="country" className="block mb-2 text-gray-300">
              Country
            </label>

            <input
              type="text"
              id="country"
              placeholder="Enter your country"
              onChange={getUserData}
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Email */}
          <div className="w-full px-3 mb-6">
            <label htmlFor="email" className="block mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={getUserData}
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Password */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label htmlFor="password" className="block mb-2 text-gray-300">
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={getUserData}
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-gray-300"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirm_password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 outline-none transition-all focus:border-sky-500"
            />
          </div>

          {/* Button */}
          <div className="w-full px-3 flex justify-center lg:justify-start">
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-lg bg-sky-500 px-8 py-3 font-semibold transition-all hover:bg-sky-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>

        <Helmet>
          <title>Noxe | Create your account</title>
        </Helmet>
    </div>
  );
}

export default Register;
