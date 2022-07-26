import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import EyeIcon from "../assets/images/eye.png";
import EyeSlash from "../assets/images/hide.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "react-google-autocomplete";
import { Link } from "react-router-dom";
import api from "../Api";

const SignupWithEmail = () => {

  const history = useHistory();

  const [ showPassword, setshowPassword ] = useState(false);
  const [ confirmPassword, setConfirmPassword ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ submitDisable, setSubmitDisable ] = useState(true);
  const [ msg, setMsg ] = useState('');

  const [ startDate, setStartDate ] = useState();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ passConfirm, setPassConfirm ] = useState('');
  const [ gender, setGender ] = useState(null);
  const [ city, setCity ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ errors, setErrors ] = useState([]);

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

  const getCityCountry = place => {
    let city = place.address_components.filter(address => address.types.includes('locality'))[0].long_name;
    let country = place.address_components.filter(address => address.types.includes('country'))[0].long_name;
    setCity(city);
    setCountry(country);
  }

  const geRegister = async e => {
    e.preventDefault();
    try {
        setLoading(true);
        const { data } = await api.post('registration', {
            name: name,
            email: email,
            password: pass,
            password_confirmation: passConfirm,
            gender: gender,
            date_of_birth: startDate,
            city: city,
            country: country,
            usertype: 'student'
        })
        setLoading(false);
        setMsg(data.msg);
        history.push('/account-verification', {_zu: data.token});

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
                      <form onSubmit={geRegister}>
                        <div className="form-group">
                          <input
                            type="text"
                            value={name}
                            onChange={ e => setName(e.target.value) }
                            className="name block w-full transition-all duration-300"
                            placeholder="Name"
                          />
                          {
                            errors?.name ?
                            <label className="text-red-400">* { errors.name }</label>
                            :
                            null
                          }
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }
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
                          {
                            errors?.password ?
                            <label className="text-red-400">* { errors.password }</label>
                            :
                            null
                          }
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
                        <div className="form-group">
                          <select
                            value={gender}
                            onChange={ e => setGender(e.target.value ) }
                            className={`gender block w-full ${gender === null ? ("grey"):("text-black")}`}
                          >
                            <option className="placeHolder hidden" selected disabled>
                              Gender
                            </option>
                            <option value="male" className="others">
                              Male
                            </option>
                            <option value="female" className="others">
                              Female
                            </option>
                          </select>
                          {
                            errors?.gender ?
                            <label className="text-red-400">* { errors.gender }</label>
                            :
                            null
                          }
                        </div>
                        <div className="form-group">
                          <DatePicker
                            placeholderText="Date of birth"
                            className="dob block w-full transition-all duration-300"
                            selected={startDate}
                            dateFormat="yyyy-MM-dd"
                            onChange={ date => setStartDate(date) }
                          />
                          {
                            errors?.date_of_birth ?
                            <label className="text-red-400">* { errors.date_of_birth }</label>
                            :
                            null
                          }
                        </div>
                        <div className="form-group locationPicker">
                          <Autocomplete
                            apiKey={"AIzaSyA16v2Y-D_uSN4eAOp_NhtNdSeT4eOIleI"}
                            style={{ width: "100%" }}
                            onPlaceSelected={ place => getCityCountry(place) }
                          />
                          {
                            errors?.city ?
                            <label className="text-red-400">* { errors.submit }</label>
                            :
                            null
                          }
                        </div>
                        <div className="form-group text-center sm:text-left terms">
                          <label className="saveforLater" htmlFor="save">
                            <input
                              type="checkbox"
                              className="css-radio"
                              id="save"
                              onChange={ e => setSubmitDisable(!submitDisable)}
                            />
                            <i></i>
                            <span className="cardNumber inline-block">
                              I agree to the&nbsp;
                            </span>
                          </label>
                          <Link
                            to=""
                            className="underline transition-all duration-300"
                          >
                            Terms of Service
                          </Link>{" "}
                          and&nbsp;
                          <Link
                            to=""
                            className="underline transition-all duration-300"
                          >
                            Privacy Policy
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
                            className={ submitDisable ? 'c-btn addCartBtn transition-all duration-300 opacity-50 cursor-not-allowed' : 'c-btn addCartBtn transition-all duration-300'}
                            disabled={submitDisable}
                          >
                            Signup
                          </button>
                        </div>
                      </form>
                      <div className="text-center block loginText">
                        Already have an account?{" "}
                        <Link
                          to="/"
                          className="loginLInk underline transition-all duration-300 cursor-pointer"
                        >
                          LOGIN
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

export default SignupWithEmail;
