import React from "react";
import FacebookIcon from "../assets/images/facebook-blue.png";
import GoogleIcon from "../assets/images/google.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="loginMainCon">
      <div className="backgroundOverlay h-full">
        <div className="flex items-center justify-center h-full">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="relative max-w-1122px align-middle mx-auto shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="bg-pink">
                <div className="modal-description flex flex-col">
                  <h3 className="font-medium">Get started with ZIPCAP</h3>
                  <p className="mt-16 lg:mt-28">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p className="mt-auto">
                    <small>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </small>
                  </p>
                </div>
              </div>
              <div className="bg-white">
                <div className="signup">
                  <div className="signupBox">
                    <div className="borderBottom">
                      <div className="max-w-350px mx-auto">
                        <p>
                          <Link
                            to="/signup-with-email"
                            className="formLink transition-all duration-300"
                          >
                            Signup with email
                          </Link>
                        </p>
                        <p>
                          Already have an account?&nbsp;
                          <Link
                            to="/"
                            className="formLink transition-all duration-300"
                          >
                            Login
                          </Link>
                        </p>
                        <div className="seperator">
                          <div>or</div>
                        </div>
                        <div className="signUpBtns">
                          <button
                            className="block w-full facebookBtn"
                            type="button"
                          >
                            <img
                              src={FacebookIcon}
                              className="float-left"
                              alt=""
                            />
                            Continue with Facebook
                          </button>
                          <button
                            className="block w-full googleBtn"
                            type="button"
                          >
                            <img
                              src={GoogleIcon}
                              className="float-left"
                              alt=""
                            />
                            Continue with Google
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="termsCond">
                    By signing up you agree to Zipcap's&nbsp;
                    <Link to="" className="transition-all duration-300">
                      Terms of Service
                    </Link>
                    &nbsp;and&nbsp;
                    <Link to="" className="transition-all duration-300">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
