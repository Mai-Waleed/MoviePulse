import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold light-bg">404</h1>

        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>

        <p className="text-gray-400 mt-4 max-w-md mx-auto third-font">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="btn inline-block mt-8 px-6 py-3 rounded-xl second-font"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
