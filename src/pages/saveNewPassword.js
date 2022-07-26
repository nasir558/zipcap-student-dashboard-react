import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import EyeIcon from '../assets/images/eye.png';
import EyeSlash from '../assets/images/hide.png';

const SaveNewPassword = () => {
  const [ showPassword, setshowPassword ] = useState(false);
  const [ confirmPassword, setConfirmPassword ] = useState(false);
  const [ pass, setPass ] = useState('');
  const [ passConfirm, setPassConfirm ] = useState('');

  const password = useRef();
  const confirmPasswordShow = useRef();

  const changetypePassword = () => {

    setshowPassword(!showPassword);
    password.current.type = showPassword ? "password" : "text";

  };

  const changetypeConfirmPassword = () => {

    setConfirmPassword(!confirmPassword);
    confirmPasswordShow.current.type = confirmPassword ? "password" : "text";

  };

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
                  <h3 className="font-medium">
                    No worry! let's recover your account.
                  </h3>
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
                <div className="signup forgotPassword">
                  <div className="form-login emailSignUpForm">
                    <div className="max-w-350px mx-auto">
                      <form>
                      <div className="form-group">
                          <input
                            type="password"
                            value={pass}
                            onChange={ e => setPass(e.target.value)}
                            className="passowrd block w-full transition-all duration-300"
                            placeholder="Password"
                            ref={password}
                          />
                          <button
                            type="button"
                            onClick={changetypePassword}
                            className="passShowHideBtn absolute showPass"
                          >
                            <img
                              src={showPassword ? EyeSlash : EyeIcon}
                              alt=""
                            />
                          </button>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            value={passConfirm}
                            onChange={ e => setPassConfirm(e.target.value)}
                            className="passowrd block w-full transition-all duration-300"
                            placeholder="Confirm password"
                            ref={confirmPasswordShow}
                          />
                          <button
                            type="button"
                            onClick={changetypeConfirmPassword}
                            className="passShowHideBtn absolute showPass"
                          >
                            <img
                              src={confirmPassword ? EyeSlash : EyeIcon}
                              alt=""
                            />
                          </button>
                          
                        </div>
                        <div className="form-group text-center">
                          <button
                            type="submit"
                            className="c-btn addCartBtn transition-all duration-300"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                      <div className="text-center block loginText">
                        <Link
                          to="/signup"
                          className="loginLInk underline transition-all duration-300 cursor-pointer"
                        >
                          SIGNUP
                        </Link>{" "}
                        instead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveNewPassword;
