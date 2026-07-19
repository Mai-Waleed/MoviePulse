import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-700 mt-20">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold">
              Movie<span className="text-sky-500">Pulse</span>
            </h2>

            <p className="text-gray-400 mt-2 second-font">
              Discover Movies, TV Shows & Celebrities.
            </p>
          </div>

          <div className="flex gap-6">
            <Link to="/" className="hover:text-sky-400 duration-300">
              Home
            </Link>

            <Link to="/movies" className="hover:text-sky-400 duration-300">
              Movies
            </Link>

            <Link to="/tv" className="hover:text-sky-400 duration-300">
              TV
            </Link>

            <Link to="/people" className="hover:text-sky-400 duration-300">
              People
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm third-font">
          © {new Date().getFullYear()} MoviePulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
