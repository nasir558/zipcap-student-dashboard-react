import React, { useState, useRef } from "react";
import EyeIcon from "../../assets/images/eye.png";
import EyeSlash from "../../assets/images/hide.png";
import { Link } from "react-router-dom";

const Passowrd = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [reConfirmPassword, setReConfirmPassword] = useState(false);

  const password = useRef();
  const confirmPasswordShow = useRef();
  const reConfirmPasswordShow = useRef();

  const changetypePassword = () => {
    setshowPassword(!showPassword);
    password.current.type = showPassword ? "password" : "text";
  };

  const changetypeConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
    confirmPasswordShow.current.type = confirmPassword ? "password" : "text";
  };

  const changetypeReConfirmPassword = () => {
    setReConfirmPassword(!reConfirmPassword);
    reConfirmPasswordShow.current.type = reConfirmPassword ? "password" : "text";
  };
  return (
    <div className="Form">
      <h4 className="mb-28px">Password</h4>
      <form>
        <div className="flex flex-col space-y-8">
          <div className="block max-w-471px">
            <label
              htmlFor="current-password"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Current Password
            </label>
            <div className="relative">
              <input
                type="password"
                name=""
                id="current-password"
                className="block w-full pl-24px pr-40px transition-all duration-300"
                ref={password}
              />
              <button
                type="button"
                onClick={changetypePassword}
                className="absolute top-20px right-20px"
              >
                <img
                  src={showPassword ? EyeSlash : EyeIcon}
                  alt=""
                  className="w-20px h-12px"
                />
              </button>
            </div>
          </div>
          <div className="block max-w-471px">
            <label
              htmlFor="new-password"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                name=""
                id="new-password"
                className="block w-full pl-24px pr-40px transition-all duration-300"
                ref={confirmPasswordShow}
              />
              <button
                type="button"
                onClick={changetypeConfirmPassword}
                className="absolute top-20px right-20px"
              >
                <img
                  src={confirmPassword ? EyeSlash : EyeIcon}
                  alt=""
                  className="w-20px h-12px"
                />
              </button>
            </div>
          </div>
          <div className="block max-w-471px">
            <label
              htmlFor="confirm-password"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type="password"
                name=""
                id="confirm-password"
                className="block w-full pl-24px pr-40px transition-all duration-300"
                ref={reConfirmPasswordShow}
              />
               <button
                type="button"
                onClick={changetypeReConfirmPassword}
                className="absolute top-20px right-20px"
              >
                <img
                  src={reConfirmPassword ? EyeSlash : EyeIcon}
                  alt=""
                  className="w-20px h-12px"
                />
              </button>
            </div>
            <p className="text-sm font-normal mt-21px text-right">
              <Link to="" className="">
                Forgot password?
              </Link>
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns">
              <button
                type="reset"
                className="viewAllBtn w-full sm:w-max text-center rounded-md py-3 px-6 text-white text-base cancelBtn"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="viewAllBtn w-full sm:w-max text-center rounded-md py-3 px-6 text-white text-base"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Passowrd;
