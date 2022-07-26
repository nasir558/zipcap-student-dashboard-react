import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import RatingsIcon from "../../assets/images/003-star@2x.png";
import ViewsIcon from "../../assets/images/002-view@2x.png";
import LessonIcon from "../../assets/images/001-play@2x.png";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Wishlist({ data }) {
  return (
    <div className="coursesList">
      {!!data ? (
        data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 mb-50px"
          >
            <div className="thumbnail relative flex-shrink-0 order-2 md:order-1">
              <img src={item.thumbnail} className="w-full" alt="" />
            </div>
            <div className="order-3 md:order-2">
              <p className="font-semibold text-base">{item.title}</p>
              <p className="text-sm font-normal mt-13px mb-32px">
                {item.description}
              </p>
              <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-row lg:space-x-4 items-center justify-between">
                <div>
                  <div className="flex flex-row items-center space-x-4">
                    <span className="w-39px h-39px overflow-hidden rounded-md">
                      <img src={item.userPic} alt="" />
                    </span>
                    <span className="text-sm">{item.user}</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row items-center space-x-4">
                    <span className="w-25px h-25px">
                      <img src={RatingsIcon} alt="" />
                    </span>
                    <span className="text-sm">{item.ratings}</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row items-center space-x-4">
                    <span className="w-40px h-26px">
                      <img src={ViewsIcon} alt="" />
                    </span>
                    <span className="text-sm">{item.views}</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row items-center space-x-4">
                    <span className="w-30px h-30px">
                      <img src={LessonIcon} alt="" />
                    </span>
                    <span className="text-sm">{item.lessons} Lessons</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center order-4 md:order-3">
              <Link
                to={`${item.btnLInk}`}
                className="viewAllBtn w-full flex md:w-max rounded-md py-3 px-6 text-white text-base"
              >
                {item.btnText}
              </Link>
            </div>
            <div className="optionsMenu self-start order-1 md:order-4">
              <Menu
                as="div"
                className="relative inline-block text-left md:ml-10px"
              >
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex justify-center text-sm focus:outline-none border-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
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
                        className="origin-top-right overflow-hidden absolute right-0 w-56 rounded-md shadow-sm bg-lightGreen focus:outline-none"
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
                                Account settings
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
                                Support
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
            </div>
          </div>
        ))
      ) : (
        <div className="block w-full pt-24 pb-24 text-center noData">
          <p className="mt-56px">You haven't added any course</p>
          <p className="mt-11px">
            <Link to="/list" className="">
              Browse Courses Now
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
