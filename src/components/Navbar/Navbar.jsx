import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/MoviePulse.svg"

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="border-b border-gray-700">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-4 lg:flex-row">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <div
            className="text-4xl font-bold hover:text-white cursor-pointer me-5 flex items-center"
            onClick={() => navigate("/")}
          >
            <img src={Logo} className="w-17.5 h-17.5 -mx-1" />
            Movie<span className="light-bg">Pulse</span>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-6 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/movies">Movies</Link>
            </li>

            <li>
              <Link to="/tv">TV</Link>
            </li>

            <li>
              <Link to="/people">People</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl">
            <a href="#" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>

            <a href="#" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="#" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>

            <a href="#" target="_blank">
              <i className="fab fa-spotify"></i>
            </a>
          </div>

          {/* Auth Links */}
          {/* <ul className="flex flex-wrap items-center justify-center gap-5 text-lg">
            <li>
              <Link to="/login" className="hover:text-sky-500 transition">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register" className="hover:text-sky-500 transition">
                Register
              </Link>
            </li>

            <li>
              <button className="cursor-pointer hover:text-red-500 transition">
                Logout
              </button>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
