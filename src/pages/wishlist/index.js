import React from "react";
import Wishlist from "./courses-in-wishlist";
import CourseThumbnail from "../../assets/images/pexels-tranmautritam-326501@2x.png";
import ReviewerPic from "../../assets/images/reviewer-pic.png";
import Layout from "../Layout/Layout";

function Index() {
  const dataWishList = [
    {
      thumbnail: CourseThumbnail,
      title:
        "Professional logo designing, design minimalist logo from sketch to final design",
      description:
        "This is basic to advance course for the beginner and mid level Photographers, take photos and edit like a pro with adobe Lightroom. this is advance course.",
      userPic: ReviewerPic,
      user: "Jhon",
      ratings: "4.5(140)",
      views: "25, 299",
      lessons: "21",
      btnText: "Enroll Now",
      btnLInk: "",
    },
    {
      thumbnail: CourseThumbnail,
      title: "Ink Drawing Techniques: Brush, Nib, and Pen Style",
      description:
        "This is basic to advance course for the beginner and mid level Photographers, take photos and edit like a pro with adobe Lightroom. this is advance course.",
      userPic: ReviewerPic,
      user: "Jhon",
      ratings: "4.5(140)",
      views: "25, 299",
      lessons: "21",
      btnText: "Enroll Now",
      btnLInk: "",
    },
  ];
  return (
    <Layout>
      <div>
        <div className="wishList myCourses">
          <h3 className="titleDashboard mb-28px text-xl font-semibold pb-26px">
            Wishlist
          </h3>
          <div className="block w-full">
            <Wishlist data={dataWishList} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
