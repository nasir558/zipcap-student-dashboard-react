import React from "react";
import { Link } from "react-router-dom";

function NotificationsList({  data }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Link
            to={`${item.notificationLink}`}
            className={`flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 mb-27px notification transition-all duration-300 ${
              item.status === "unread" ? "bg-pink unread" : "bg-lightGreen"
            }`}
          >
            <div
              className={`userThumbnail w-153px h-153px md:w-83px md:h-83px overflow-hidden flex-shrink-0 rounded-full`}
            >
              <img src={item.userThumbnail} className="w-full h-auto" alt="" />
            </div>
            <div>
              <h4
                className={`text-sm leading-5`}
              >
                <strong>{item.user}</strong> {item.titleText} "
                <strong>{item.courseCommented}</strong>"
              </h4>
              <p className="text-sm font-normal mt-10px mb-11px leading-5">
                  {item.message}
                </p>

              <p
                className={`text-sm leading-5 font-normal`}
              >
                {item.time}
              </p>
            </div>
            <div
              className={`courseThumbnail w-153px h-153px md:w-83px md:h-83px overflow-hidden flex-shrink-0 justify-end`}
            >
              <img
                src={item.courseThumbnail}
                className="w-full h-auto"
                alt=""
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NotificationsList;
