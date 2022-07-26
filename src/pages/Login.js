import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import FacebookIcon from '../assets/images/facebook-blue.png';
import GoogleIcon from '../assets/images/google.png';
import EyeIcon from '../assets/images/eye.png';
import EyeSlash from '../assets/images/hide.png';
import { Link } from 'react-router-dom';
import api from '../Api';

const Login = () => {

  const [ cookies, setCookie ] = useCookies(['cred']);
  const history = useHistory();

  const [ show, setshow ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ msg, setMsg ] = useState('');
  const [ errors, setErrors ] = useState(null);


  const password = useRef();

  const changetype = () => {

    setshow(!show);

    password.current.type = show ? "password" : "text";

  };

  useEffect( () => {
    if ( history?.location?.state?.msg ) {
      setMsg(history?.location?.state?.msg)
    }

  }, []);

  const getLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.post('login', {
        email: email,
        password: pass
      });
      setCookie('cred', data);
      setLoading(false);
      history.push('/dashboard');
    } catch ( err ) {
        setLoading(false);
        let merge;
        if ( err.response.status === 422 ) {
            let keys = Object.keys(err.response.data.errors)
            let values = Object.values(err.response.data.errors)
            merge = values.reduce((result, field, index) => {
                result[keys[index]] = field[0];
                return result;
            }, {});
            setErrors(merge);
        } else {
            setErrors(merge);
        }
    }
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
                  <div className="form-login emailSignUpForm">
                    <div className="max-w-350px mx-auto">
                      <h4 className="text-green-600 text-center">{ msg }</h4>
                      <form onSubmit={getLogin}>
                        <div className="form-group">
                          <input
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                            className="email block w-full transition-all duration-300"
                            placeholder="Email"
                          />
                          {
                            errors?.email ?
                            <label className="text-red-400">* { errors.email }</label>
                            :
                            null
                          }
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            value={pass}
                            onChange={ e => setPass(e.target.value)}
                            className="passowrd block w-full transition-all duration-300"
                            placeholder="Password"
                            ref={password}
                          />
                          {
                            errors?.password ?
                            <label className="text-red-400">* { errors.password }</label>
                            :
                            null
                          }
                          <button
                            type="button"
                            onClick={changetype}
                            className="passShowHideBtn absolute showPass"
                          >
                            <img
                              src={show ? EyeSlash:EyeIcon}
                              alt=""
                            />
                          </button>
                        </div>
                        <div className="form-group text-right f-pass">
                          <Link
                            to="/forgot-password"
                            className="formLink text-base no-underline transition-all duration-300"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <div className="form-group text-center">
                            {
                              loading ?
                              <div className="sk-chase">
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                              </div>
                              :
                              null
                            }
                          <button
                            type="submit"
                            className="c-btn addCartBtn transition-all duration-300"
                          >
                            sign in
                          </button>
                        </div>
                      </form>
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
                          <img src={GoogleIcon} className="float-left" alt="" />
                          Continue with Google
                        </button>
                      </div>
                      <div className="text-center block loginText">
                        Don't have an account?{" "}
                        <Link
                          to="/signup"
                          className="loginLInk underline transition-all duration-300 cursor-pointer"
                        >
                          SIGNUP
                        </Link>
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

export default Login;
