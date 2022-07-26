import { React, Fragment, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Menu, Transition } from "@headlessui/react";
import InstructorPic from "../../assets/images/instructor.png";
import CartIcon from "../../assets/images/shopping-cart@2x.png";
import NotificationIcon from "../../assets/images/dashboard/bell-grey.png";
import CatArrowIcon from "../../assets/images/arrow-down.svg";
import SearchIcon from "../../assets/images/search.png";
import NotificationHeader from "../Layout/notificationHeader";
import { Link } from "react-router-dom";
import api from "../../Api";
import Logo from '../../assets/images/zipcap-logo.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {


  const [active, setActive] = useState('');

  const [cookies, removeCookie] = useCookies(['cred']);
  const history = useHistory();

  const getLogout = async e => {
    e.preventDefault();
    try {
      await api.get(`logout?userid=${cookies.cred.primary}`)
      removeCookie('cred');
      history.push('/');
    } catch (err) {
      alert('There is a minor error within the link ' + err)
    }
  };

 
  return (
    <>
      <div
        className={`bg-lightGreen headerMain fixed top-0 left-0 w-full z-20 xl:static`}
      >
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 max-w-1573px mx-auto pl-5 pr-5">
          <div className="block xl:hidden">
            <button
              className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
              type="button"
              onClick={() => {
                if (active === "ShowMenu") {
                  setActive("");
                } else {
                  setActive("ShowMenu");
                }
              }}
            >
              <span className="transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#000000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className=" items-center flex xl:hidden flex-shrink-0">
            <span className="font-semibold text-xl tracking-tight">
              <Link to="/dashboard" className="brand">
                <img
                  src={Logo}
                  className="h-30px w-auto"
                  alt=""
                />
              </Link>
            </span>
          </div>
          <div
            className={`w-full ${active === "ShowMenu" ? "openDrawer showMenu" : ""
              } moduleDrawer flex-grow xl:flex xl:justify-around xl:w-auto transition-all duration-300`}
          >
            <div className="xl:hidden flex justify-end">
              <button
                className="flex flex-row space-x-4 items-center"
                type="button"
                onClick={() => {
                  if (active === "ShowMenu") {
                    setActive("");
                  } else {
                    setActive("ShowMenu");
                  }
                }}
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000000"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="block mt-4 xl:flex xl:mt-0 items-center text-teal-200">
              <span className="font-semibold text-xl tracking-tight hidden xl:inline-block">
                <Link to="/dashboard" className="brand">
                  <img src={Logo} className="inline-block w-60px h-auto mr-5px" alt="" />
                  <span>Zipcap</span>
                </Link>
              </span>
              <Menu
                as="div"
                className="relative inline-block lg:ml-2 xl:ml-5 2xl:ml-10"
              >
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex text17px justify-center">
                        Categories
                        <img
                          src={CatArrowIcon}
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                          alt=""
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right menuDropDown shadow-lg absolute z-40 left-0 mt-2 w-50"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Account settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Support
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                License
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
              <div className="block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200 mr-4">
                <form action="#" method="POST">
                  <div className="grid grid-cols-2">
                    <div className="col-span-3 sm:col-span-2">
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company_website"
                          id="company_website"
                          className="searchInput"
                          placeholder="Search your course"
                        />
                        <span className="inline-flex items-center">
                          <button
                            type="submit"
                            className="inline-flex justify-center"
                          >
                            <img src={SearchIcon} aria-hidden="true" alt="" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <Link
                to=""
                className="block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200 mr-4"
              >
                Zipcap for Business
              </Link>
              <Link
                to=""
                className="block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200"
              >
                Teach on Zipcap
              </Link>
              <Link
                to=""
                className={`block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200 mr-8`}
              >
                <span className="w-24px relative flex-shrink-0 rounded-full">
                  <img
                    src={CartIcon}
                    alt=""
                    className="cartIcon"
                    width="24"
                    height="24"
                    alt=""
                  />
                  <span className="w-15px h-15px text-center rounded-full bg-red flex items-center justify-center text-white top-13px left-10px absolute notificationCount">
                    2
                  </span>
                </span>
              </Link>
              <Menu
                as="div"
                className="optionsMenu relative block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-2 text-teal-200 xl:mr-8"
              >
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex justify-center text-sm focus:outline-none border-none">
                        <span className="w-20px relative flex-shrink-0 rounded-full">
                          <img
                            src={NotificationIcon}
                            className="w-full h-auto"
                            alt=""
                          />
                          <span className="w-15px h-15px text-center rounded-full bg-red flex items-center justify-center text-white top-13px left-13px absolute notificationCount">
                            2
                          </span>
                        </span>
                      </Menu.Button>
                    </div>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-left notificationDropdown rounded-md xl:overflow-hidden xl:absolute -right-70px z-20 mt-10px xl:mt-40px focus:outline-none"
                      >
                        <div>
                          <Menu.Item>
                            <div className="notifications">
                              <div className="shadow-lg bg-lightGreen">
                                <p className="text-base font-medium text-center px:15px py-10px">
                                  Notifications
                                </p>
                                <NotificationHeader />
                              </div>
                            </div>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <Menu
                as="div"
                className="optionsMenu relative block mt-4 lg:ml-2 xl:ml-5 2xl:ml-10 xl:inline-block xl:mt-0 text-teal-200"
              >
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex justify-center text-sm focus:outline-none border-none">
                        <span className="w-50px h-50px overflow-hidden flex-shrink-0 rounded-full">
                          <img
                            src={InstructorPic}
                            className="w-full h-auto"
                            alt=""
                          />
                        </span>
                      </Menu.Button>
                    </div>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right xl:overflow-hidden xl:absolute z-20 mt-10px xl:mt-40px right-0 w-full xl:w-72 rounded-md shadow-lg bg-lightGreen focus:outline-none"
                      >
                        <div>
                          <Menu.Item>
                            {({ active }) => (
                              <div className="px-20px mb-10px">
                                <div
                                  className={classNames(
                                    active ? "dropDownActive" : "",
                                    "profileDropdown flex flex-row items-center space-x-4 py-20px"
                                  )}
                                >
                                  <span className="h-60px w-60px overflow-hidden rounded-full flex-shrink-0">
                                    <img
                                      src={InstructorPic}
                                      className="w-full h-auto"
                                      alt=""
                                    />
                                  </span>
                                  <span className="text-base font-medium">
                                    John M David
                                  </span>
                                </div>
                              </div>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? "dropDownActive" : "",
                                  "block px-4 py-2 text-base font-medium"
                                )}
                              >
                                My learning space
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? "dropDownActive" : "",
                                  "block px-4 py-2 text-base font-medium"
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? "dropDownActive" : "",
                                  "block px-4 py-2 text-base font-medium"
                                )}
                                onClick={getLogout}
                              >
                                Signout
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
