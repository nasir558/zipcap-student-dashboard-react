import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import MasterCardIcon from "../../assets/images/mastercard.png";
import VisaCardIcon from "../../assets/images/visa.png";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Cards = () => {
  return (
    <div>
      <div className="bg-lightGreen paymentMethodForm pt-20px px-15px lg:px-37px">
        <h4 className="text-lg font-medium">Saved Methods</h4>
        <div className="px-15px lg:px-100px py-50px">
          <form>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="py-17px px-15px lg:px-71px bg-white rounded-lg">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <label htmlFor="masterCard" className="customRadio">
                    <input type="radio" name="paymentType" id="masterCard" />
                    <i></i>

                    <img
                      src={MasterCardIcon}
                      className="w-39px h-27px flex-shrink-0"
                      alt=""
                    />
                  </label>
                  <input
                    type="text"
                    name="masterCard"
                    disabled
                    className="text-sm leading-6 outline-none bg-transparent"
                    placeholder="XXXX-XXXX-XXXX-1234"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-row space-x-4 items-center">
                  <div>
                    <div className="optionsMenu self-start">
                      <Menu
                        as="div"
                        className="relative inline-block text-left md:ml-10px"
                      >
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="inline-flex justify-center editBtn text-sm focus:outline-none border-transparent">
                                Edit
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 ml-10px"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
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
                                className="origin-top-right z-10 overflow-hidden absolute right-0 w-56 rounded-md shadow-lg bg-lightGreen focus:outline-none"
                              >
                                <div>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="#"
                                        className={classNames(
                                          active ? "dropDownActive" : "",
                                          "block px-4 py-2 text-sm font-medium"
                                        )}
                                      >
                                        Edit
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="#"
                                        className={classNames(
                                          active ? "dropDownActive" : "",
                                          "block px-4 py-2 text-sm font-medium"
                                        )}
                                      >
                                        Cancel
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

                  <Link to="" className="deleteBtn transition-all duration-300">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-47px">
              <div className="py-17px px-15px lg:px-71px bg-white rounded-lg">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <label htmlFor="VisaCard" className="customRadio">
                    <input type="radio" name="paymentType" id="VisaCard" />
                    <i></i>

                    <img
                      src={VisaCardIcon}
                      className="w-32px mt-9px flex-shrink-0"
                      alt=""
                    />
                  </label>
                  <input
                    type="text"
                    name="VisaCard"
                    disabled
                    className="text-sm leading-6 outline-none bg-transparent"
                    placeholder="XXXX-XXXX-XXXX-1234"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-row space-x-4 items-center">
                  <div>
                    <div className="optionsMenu self-start">
                      <Menu
                        as="div"
                        className="relative inline-block text-left md:ml-10px"
                      >
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="inline-flex justify-center editBtn text-sm focus:outline-none border-transparent">
                                Edit
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 ml-10px"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
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
                                className="origin-top-right  z-10 overflow-hidden absolute right-0 w-56 rounded-md shadow-lg bg-lightGreen focus:outline-none"
                              >
                                <div>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="#"
                                        className={classNames(
                                          active ? "dropDownActive" : "",
                                          "block px-4 py-2 text-sm font-medium"
                                        )}
                                      >
                                        Edit
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        to="#"
                                        className={classNames(
                                          active ? "dropDownActive" : "",
                                          "block px-4 py-2 text-sm font-medium"
                                        )}
                                      >
                                        Cancel
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

                  <Link to="" className="deleteBtn transition-all duration-300">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="block w-full mt-64px">
        <Link
          to=""
          className="viewAllBtn w-max rounded-md py-3 px-6 mx-auto md:mx-0 text-white text-base"
        >
          Add new Payment Method
        </Link>
      </div>
    </div>
  );
};

export default Cards;
