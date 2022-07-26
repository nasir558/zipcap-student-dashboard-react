import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ReviewerPic from "../../assets/images/reviewer-pic.png";
import LessonIcon from "../../assets/images/001-play@2x.png";
import ClipboardIcon from "../../assets/images/dashboard/clipboards.png";
import StarIcon from "../../assets/images/dashboard/star.png";
import { Link } from "react-router-dom";

const CertificateList = () => {
  return (
    <div>
      <Accordion allowZeroExpanded allowMultipleExpanded preExpanded={["0"]}>
        <AccordionItem uuid="0">
          <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 space-y-6 lg:space-y-0 lg:space-x-4">
            <div>
              <h2 className="font-semibold text-base">
                Adobe Lightroom, Photo editing masterclass, Edit your photos
                like a pro with Adobe Lightroom
              </h2>
            </div>
            <div className="self-center lg:self-end">
              <Link
                to=""
                className="viewAllBtn w-full flex md:w-max rounded-md py-3 px-6 text-white text-base"
              >
                Download Certificate
              </Link>
            </div>
          </div>
          <AccordionItemPanel>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 space-x-0 lg:space-x-4">
              <div>
                <p>
                  This is basic to advance course for the beginner and mid level
                  Photographers, take photos and edit like a pro with adobe
                  Lightroom. this is advance course.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex lg:flex-row lg:space-x-12 mt-20px items-center">
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-39px h-39px overflow-hidden rounded-md  flex-shrink-0">
                        <img src={ReviewerPic} alt="" />
                      </span>
                      <span className="text-sm">Jhon</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-30px h-30px flex-shrink-0">
                        <img src={LessonIcon} alt="" />
                      </span>
                      <span className="text-sm">21 Lessons</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-24px h-31px flex-shrink-0">
                        <img src={ClipboardIcon} alt="" />
                      </span>
                      <span className="text-sm">07/07 Tasks completed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <p className="text-sm text-center">Your overall performance</p>
                <div className="flex justify-center mt-14px space-x-2">
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                </div>
              </div>
            </div>
          </AccordionItemPanel>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <p className="order-1 hideDetails">Hide Details</p>
                <p className="order-1 showDetails">View Details</p>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
        <AccordionItem>
          <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 space-y-6 lg:space-y-0 lg:space-x-4">
            <div>
              <h2 className="font-semibold text-base">
                UI/UX master class, wireframes and user interface designing
              </h2>
            </div>
            <div className="self-center lg:self-end">
              <Link
                to=""
                className="viewAllBtn w-full flex md:w-max rounded-md py-3 px-6 text-white text-base"
              >
                Download Certificate
              </Link>
            </div>
          </div>
          <AccordionItemPanel>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 space-x-0 lg:space-x-4">
              <div>
                <p>
                  This is basic to advance course for the beginner and mid level
                  Photographers, take photos and edit like a pro with adobe
                  Lightroom. this is advance course.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex lg:flex-row lg:space-x-12 mt-20px items-center">
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-39px h-39px overflow-hidden rounded-md  flex-shrink-0">
                        <img src={ReviewerPic} alt="" />
                      </span>
                      <span className="text-sm">Jhon</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-30px h-30px flex-shrink-0">
                        <img src={LessonIcon} alt="" />
                      </span>
                      <span className="text-sm">21 Lessons</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-24px h-31px flex-shrink-0">
                        <img src={ClipboardIcon} alt="" />
                      </span>
                      <span className="text-sm">07/07 Tasks completed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <p className="text-sm text-center">Your overall performance</p>
                <div className="flex justify-center mt-14px space-x-2">
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                </div>
              </div>
            </div>
          </AccordionItemPanel>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <p className="order-1 hideDetails">Hide Details</p>
                <p className="order-1 showDetails">View Details</p>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
        <AccordionItem>
          <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 space-y-6 lg:space-y-0 lg:space-x-4">
            <div>
              <h2 className="font-semibold text-base">
                Ink Drawing Techniques: Brush, Nib, and Pen Style
              </h2>
            </div>
            <div className="self-center lg:self-end">
              <Link
                to=""
                className="viewAllBtn w-full flex md:w-max rounded-md py-3 px-6 text-white text-base"
              >
                Download Certificate
              </Link>
            </div>
          </div>
          <AccordionItemPanel>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 space-x-0 lg:space-x-4">
              <div>
                <p>
                  This is basic to advance course for the beginner and mid level
                  Photographers, take photos and edit like a pro with adobe
                  Lightroom. this is advance course.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex lg:flex-row lg:space-x-12 mt-20px items-center">
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-39px h-39px overflow-hidden rounded-md  flex-shrink-0">
                        <img src={ReviewerPic} alt="" />
                      </span>
                      <span className="text-sm">Jhon</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-30px h-30px flex-shrink-0">
                        <img src={LessonIcon} alt="" />
                      </span>
                      <span className="text-sm">21 Lessons</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center space-x-4">
                      <span className="w-24px h-31px flex-shrink-0">
                        <img src={ClipboardIcon} alt="" />
                      </span>
                      <span className="text-sm">07/07 Tasks completed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <p className="text-sm text-center">Your overall performance</p>
                <div className="flex justify-center mt-14px space-x-2">
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                  <img src={StarIcon} className="w-21px h-21px" alt="" />
                </div>
              </div>
            </div>
          </AccordionItemPanel>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div>
                <p className="order-1 hideDetails">Hide Details</p>
                <p className="order-1 showDetails">View Details</p>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CertificateList;
