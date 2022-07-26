import React from "react";
import UserPic from "../../assets/images/pexels-max-fischer-5212339@2x.png";
import { Link } from "react-router-dom";

const Subscribe = ({ section }) => {
  return (
    <>
      <div
        className={`block subscribe bg-pink pt-28 pb-28 ${section}`}
      >
        <div className="max-w-1044px mx-auto pl-5 pr-5 xl:pl-0 xl:pr-0">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-14 gap-y-14 xl:gap-y-0">
            <div className="subscribeBox bg-white pl-11 pr-11 pt-16 pb-16">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-initial">
                  <div className="thumbnail">
                    <img
                      src={UserPic}
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-initial text-xl mt-1">
                  <div className="message">
                    <p className="title">Become an instructor</p>
                    <p className="description mt-3.5 mb-8">
                      Join the fast growing platform as instructor and teach
                      world what you are good in
                    </p>
                    <Link
                      to=""
                      className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white"
                    >
                      Apply as instructor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="subscribeBox bg-white pl-11 pr-11 pt-16 pb-16">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-initial">
                  <div className="thumbnail">
                    <img
                      src={UserPic}
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-initial text-xl mt-1">
                  <div className="message">
                    <p className="title">Zipcap for Business</p>
                    <p className="description mt-3.5 mb-8">
                      Join the fast growing platform as instructor and teach
                      world what you are good in
                    </p>
                    <Link
                      to=""
                      className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white"
                    >
                      Get Zipcap for business
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
