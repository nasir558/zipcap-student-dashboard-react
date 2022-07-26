import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../Api";

const ForgotPassword = () => {

  const [ loading, setLoading ] = useState(false);
  const [ errors, setErrors ] = useState([]);
  const [ email ] = useState('');

  const getPasswordRecovery = async e => {
    e.prevenntDefault();
    try {
        setLoading(true);
        const { data } = api.post('', {
          email: email
        });
        console.log(data)
        setLoading(false);
        
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
  }

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
                      <form onSubmit={getPasswordRecovery}>
                        <div className="form-group">
                          <input
                            type="email"
                            value={email}
                            onChange={ e => e.target.value }
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
                            send
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

export default ForgotPassword;
