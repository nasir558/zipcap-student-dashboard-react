import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="bg-lightGreen">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg pb-8">
            <div className="text-center pt-8">
              <h1 className="text-9xl font-bold text-black">404</h1>
              <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
              <p className="text-2xl pb-8 px-12 font-medium">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <Link to="/" className="bg-red viewAllBtn text-white font-semibold px-6 py-3 rounded-md mr-6 mt-4">
                HOME
              </Link>
              <Link to="" className="bg-red viewAllBtn text-white font-semibold px-6 py-3 rounded-md mt-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
