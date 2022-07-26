import React, { useState } from "react";
import EditIcon from "../../assets/images/dashboard/pencil-icon.png";
import UserPic from "../../assets/images/instructor.png";
import CoursesIcon from "../../assets/images/dashboard/book-green.png";
import CertificateIcon from "../../assets/images/dashboard/certificate.png";

const About = () => {
  const [formEdit, setFormEdit] = useState(true);
  return (
    <div className="aboutMe xl:px-50px">
      <form>
        <div className="bg-lightGreen px-15px py-15px lg:px-40px lg:py-33px rounded-xl">
          <div className="block w-full text-right">
            <button
              type="button"
              onClick={() => setFormEdit(false)}
              className="focus:outline-none w-17px h-17px overflow-hidden flex-shrink-0"
            >
              <img
                src={EditIcon}
                className="w-full h-auto cursor-pointer"
                alt=""
              />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="flex-shrink-0 w-138px h-138px overflow-hidden rounded-xl self-center lg:self-start">
              <label htmlFor="profile-pic">
                <input
                  type="file"
                  id="profile-pic"
                  className="hidden"
                  name="Choose Image"
                  disabled={formEdit}
                />
                <img src={UserPic} alt="" />
              </label>
            </div>
            <div className="flex-grow">
              <input
                type="text"
                name="user-name"
                value="John M David"
                disabled={formEdit}
                className="block w-full font-semibold transition-all duration-300"
              />
              <textarea
                name="about-me"
                disabled={formEdit}
                className="block w-full transition-all duration-300"
              >
                Hi, I am John M David, UI/UX designer having more that 5 years
                of experience. consectetur adipiscing elit, sed do eiusmod
                temper incident ut labore et dolore magna aliqua.
              </textarea>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-15px">
                <div>
                  <div className="flex flex-row space-x-4 items-center">
                    <span className="w-32px h-26px overflow-hidden">
                      <img src={CoursesIcon} alt="" className="w-full h-auto" />
                    </span>
                    <span className="text-sm">Enrolled in 12 courses</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row space-x-4 items-center">
                    <span className="w-32px h-28px overflow-hidden">
                      <img
                        src={CertificateIcon}
                        alt=""
                        className="w-full h-auto"
                      />
                    </span>
                    <span className="text-sm">Having 07 certificates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!formEdit ? (
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns mt-4">
              <button
                type="submit"
                className="viewAllBtn w-full sm:w-max text-center rounded-md py-3 px-6 text-white text-base"
              >
                Save Changes
              </button>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default About;
