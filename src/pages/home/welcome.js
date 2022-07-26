import React from "react";
import CancelIcon from "../../assets/images/cancel.png";
import { Link } from "react-router-dom";

const Welcome = ({ data }) => {
  return (
    <div className="welcome">
      {data.map((item, index) => (
        <div
          className={`flex flex-col anouncement ${item.backgroundClass} ${
            item.backgroundClass === "bg-red" ? "whiteText" : "blackText"
          } mb-50px`}
          key={index}
        >
          <div className="self-end">
            <button type="button" className="focus:outline-none">
              <img src={CancelIcon} className="closeIcon" alt="" />
            </button>
          </div>
          {!!item.smallTitle && (
            <p className="text-center text-sm">{item.smallTitle}</p>
          )}
          <h3 className="text-center text-2xl font-semibold leading-10">
            {item.heading}
          </h3>
          <p className="text-center text-base leading-6 mt-2">
            {item.description}
          </p>
          {!!item.btnText && (
            <div className="self-center mt-34px">
              <Link className="viewAllBtn w-full md:w-max rounded-md pt-3 pb-3 pl-6 pr-6 text-white text-base" to={`${item.btnLink}`}>
                  {item.btnText}
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Welcome;
