import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import TargetIcon from "../../assets/images/dashboard/target.png";
import PlayButtonIcon from "../../assets/images/dashboard/play-button.png";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Courses({ data, onClick, onKeyDown }) {
  return (
    <div className="coursesList">
      {!!data ? (
        data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start xl:items-center space-y-4 md:space-y-0 md:space-x-4 mb-32px"
          >
            <div className="thumbnail relative order-2 md:order-1">
              <img src={item.thumbnail} className="w-full" alt="" />
              <div className="relative progressBarBase h-5px w-full">
                <div
                  className="progress absolute left-0 top-0 h-5px block bg-red"
                  style={{
                    width:
                      parseInt((item.completed / item.totalLessons) * 100, 10) +
                      "%",
                  }}
                ></div>
              </div>
              <Link className="absolute playBtn" to={`${item.videoLIink}`}>
                <img
                  src={PlayButtonIcon}
                  className="w-26px h-26px"
                  alt=""
                />
              </Link>
            </div>
            <div className="order-3 md:order-2">
              <p className="font-semibold text-base">{item.title}</p>
              <div className="flex flex-row items-center space-x-4 mt-18px mb-18px">
                <span className="w-32px h-32px overflow-hidden rounded-xl">
                  <img src={item.userPic} alt="" />
                </span>
                <span className="text-sm">{item.user}</span>
              </div>
              <div>
                <ul className="list-disc flex flex-col items-start ml-20px md:ml-0 md:flex-row md:items-center text-sm space-y-3 md:space-y-0 md:space-x-6">
                  <li className="md:list-none pl-15px md:pl-0 pr-15px xl:pr-50px">
                    Lesson {item.completed}/{item.totalLessons}
                  </li>
                  <li className="pl-15px pr-15px xl:pl-50px xl:pr-50px">
                    {parseInt((item.completed / item.totalLessons) * 100, 10)}%
                    Completed
                  </li>
                  <li className="pl-15px pr-15px xl:pl-50px xl:pr-50px">
                    Pending tasks: {item.pendingTasks}
                  </li>
                </ul>
              </div>
            </div>
            <div className="optionsMenu self-start order-1 md:order-3">
              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex justify-center text-sm focus:outline-none border-none xl:mt-10px">
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
          <img
            src={TargetIcon}
            alt=""
            className="w-36 h-auto mx-auto"
          />
          <p className="mt-56px">Concentrate on doing the right things</p>
          <p className="mt-11px">
            <Link to="" onClick={onClick} onKeyDown={onKeyDown} className="">
              Go to the All Courses
            </Link>
            &nbsp;tab
          </p>
        </div>
      )}
      {!!data && (
        <div className="pagination space-x-3.5 flex items-center justify-center">
          <button type="button" className="previous">{`<`}</button>
          <button type="button" className="active">
            1
          </button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="more">
            .
          </button>
          <button type="button" className="more">
            .
          </button>
          <button type="button" className="more">
            .
          </button>
          <button type="button" className="next">{`>`}</button>
        </div>
      )}
    </div>
  );
}

export default Courses;
