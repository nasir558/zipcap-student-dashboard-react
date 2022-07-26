import React, { useState } from "react";
import LeftNavigation from "./leftNavigation";
import Header from "./header";
import Footer from "./footer";
import Subscribe from "./subscribe";
import BackArrowIcon from "../../assets/images/backButton.png"

function Layout(props) {
  const [drawer, setDrawer] = useState("");
  return (
    <>
      <Header />
      <div className="w-full courseList max-w-1920px mx-auto studentDashboard">
        <div className=" flex flex-col xl:flex-row xl:space-x-10">
          <LeftNavigation drawerStatus={drawer} />
          <div className="xl:w-4/5 pt-50px mt-32 xl:mt-0">
            <div className="pr-20px xl:pr-70px pl-20px xl:pl-0">
              <div className="xl:hidden z-10 flex flex-row justify-between mobileHeader fixed top-76px left-0 w-full">
                <button
                  className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
                  type="button"
                >
                  <span className="backIcon transition-all duration-300">
                    <img
                      src={BackArrowIcon}
                      alt=""
                      className="mx-auto"
                    />
                  </span>
                </button>
                {drawer === "openDrawer" ? (
                  <button
                    className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
                    type="button"
                    onClick={() => setDrawer("")}
                    onKeyDown={() => setDrawer("")}
                  >
                    <span className="backIcon transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto mt-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffffff"
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
                ) : (
                  <button
                    className="backButton flex flex-row space-x-4 items-center transition-all duration-300"
                    type="button"
                    onClick={() => setDrawer("openDrawer")}
                    onKeyDown={() => setDrawer("openDrawer")}
                  >
                    <span className="backIcon transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto mt-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffffff"
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
                )}
              </div>
              {props.children}
            </div>
            <div className="mt-48">
              <Subscribe section="studentDashboardSection" />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
