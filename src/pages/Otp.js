import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import api from "../Api";

function Otp() {

  const history = useHistory();

  const [ loading, setLoading ] = useState(false);
  const [ errors, setErrors ] = useState(null);
  const [ OTP, setOTP ] = useState('');
  const [ token ] = useState(history.location.state);
  const [ msg, setMsg ] = useState('');


  const getActivated = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.post('registration/activcation', {
        code: OTP,
        token: token._zu
      });
      setLoading(false);
      setMsg(data.msg);
      history.push('/', {msg: data.token});
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

  const resendCode = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.get(`registration/resendcode/${token._zu}`);
      setMsg(data.msg);
      setLoading(false);
    } catch ( err ) {
      setLoading(false);
      alert(err);
    }
  }

  const checkHistoryState = () => {
    if ( !history.location.state ) {
      history.push('/registration');
    }
  }

  useEffect( () => {
    checkHistoryState();
  }, []);


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
                    Please check your email for 4 digits code.
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
                <div className="signup otp">
                  <div className="form-login emailSignUpForm">
                    <div className="max-w-350px mx-auto">
                      <h4 className="text-green-600 text-center">{ msg }</h4>
                      <form onSubmit={getActivated}>
                       <div className="form-group">
                          <input
                            type="text"
                            value={OTP}
                            onChange={e => setOTP(e.target.value)}
                            className="block w-full transition-all duration-300"
                            placeholder=""
                          />
                          {
                            errors?.code ?
                            <label className="text-red-400">* { errors.code }</label>
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
                            Done
                          </button>
                        </div>
                      </form>
                      <div className="text-center block loginText">
                        Did't get the code?{" "}
                        <a
                          onClick={resendCode}
                          href="#"
                          className="loginLInk underline transition-all duration-300 cursor-pointer"
                        >
                          Resend
                        </a>
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

export default Otp;
