import React from "react";
import DashboardIcon from "../../assets/images/dashboard/dashboard.png";
import BookIcon from "../../assets/images/dashboard/book.png";
import HeartIcon from "../../assets/images/dashboard/heart.png";
import CartIcon from "../../assets/images/dashboard/trolley.png";
import CertificateIcon from "../../assets/images/dashboard/document.png";
import NotificationIcon from "../../assets/images/dashboard/bell.png";
import UserIcon from "../../assets/images/dashboard/user.png";
import PaymentIcon from "../../assets/images/dashboard/credit-card.png";
import SettingIcon from "../../assets/images/dashboard/settings.png";
import ResultsIcon from "../../assets/images/dashboard/results-icon.png";
import CalendarIcon from "../../assets/images/dashboard/calendar-icon.png";
import { Link } from "react-router-dom";

const Navigation = ({ drawerStatus }) => {
  const pathName = window.location.pathname;
  console.log(pathName)
  return (
    <div
      className={`xl:w-1/5 pl-20px xl:pl-70px pr-20px xl:pr-27px leftNavigationContainer slimScroll h-screen xl:sticky xl:top-0 z-20 moduleDrawer transition-all duration-300 ${drawerStatus}`}
    >
      <div className="navigationItems">
        <h2 className="navTitle font-semibold">My Learning Space</h2>
        <ul className="block w-full">
          <li>
            <Link
              to="/dashboard"
              className={`${
                pathName === "/dashboard" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={DashboardIcon} alt="" />
              </span>
              <span className="text-left">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/my-courses"
              className={`${
                pathName === "/my-courses" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={BookIcon} alt="" />
              </span>
              <span className="text-left">My Courses</span>
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className={`${
                pathName === "/wishlist" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={HeartIcon} alt="" />
              </span>
              <span className="text-left">Wishlist</span>
            </Link>
          </li>
          <li>
            <Link
              to="/my-cart"
              className={`${
                pathName === "/my-cart" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={CartIcon} alt="" />
              </span>
              <span className="text-left">My Cart</span>
            </Link>
          </li>
          <li>
            <Link
              to="/results"
              className={`${
                pathName === "/results" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={ResultsIcon} alt="" />
              </span>
              <span className="text-left">Results</span>
            </Link>
          </li>
          <li>
            <Link
              to="/attendance"
              className={`${
                pathName === "/attendance" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={CalendarIcon} alt="" />
              </span>
              <span className="text-left">Attendance</span>
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              className={`${
                pathName === "/certificates" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={CertificateIcon} alt="" />
              </span>
              <span className="text-left">Certificates</span>
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={`${
                pathName === "/notifications" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={NotificationIcon} alt="" />
              </span>
              <span className="text-left">Notifications</span>
            </Link>
          </li>
        </ul>
        <h2 className="navTitle font-semibold">My Account</h2>
        <ul className="block w-full">
          <li>
            <Link
              to="/profile"
              className={`${
                pathName === "/profile"
                  ? "active"
                  : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={UserIcon} alt="" />
              </span>
              <span className="text-left">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/payment-method"
              className={`${
                pathName === "/payment-method"
                  ? "active"
                  : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={PaymentIcon} alt="" />
              </span>
              <span className="text-left">Payment Method</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`${
                pathName === "/settings"
                  ? "active"
                  : null
              }  flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="icon">
                <img src={SettingIcon} alt="" />
              </span>
              <span className="text-left">Setting</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
