import React from "react";
import { Link } from "react-router-dom";

const Main = ({ title, data, section }) => {
  return (
    <div className="dashBoardMain">
      <h3 className="titleDashboard mb-28px text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Link key={index} to={`${item.courseLink}`} className={`${
            section === "pendingQuizes" ? "bg-lightGreen" : "bg-pink"
          } pt-16px pb-16px pl-16px pr-16px transition-all duration-300 hover:shadow-lg courseCards`}>
            <div className="flex flex-row space-x-2 items-center justify-between">
                <span className="w-64px h-64px rounded-full overflow-hidden">
                  <img src={item.image} className="w-full h-auto" alt="" />
                </span>
                <span className="text-sm">{item.lessonCount}</span>
              </div>
              <p className="text-sm font-semibold leading-5 mt-15px">
                {item.courseTitle}
              </p>
              <div className="flex flex-row items-center text-sm justify-between mt-17px">
                <span>{item.progessText}</span>
                <span>{item.progressPercent}</span>
              </div>
              {!!section && section === "enrolledCourses" && item.progessText && (
                <div className="relative progressBarBase h-11px w-full mt-8px">
                  <div
                    className="progress absolute left-0 top-0 h-11px block bg-red"
                    style={{ width: item.progressPercent }}
                  ></div>
                </div>
              )}
              {!!section && section === "pendingQuizes" && item.deadlineText && (
                <div className="flex flex-row space-x-2 items-center justify-between mt-20px">
                  <span className="text-sm">{item.deadlineText}</span>
                  <span className="text-sm deadLineDate">
                    {item.deadLineDate}
                  </span>
                </div>
              )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
