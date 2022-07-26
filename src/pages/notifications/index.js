import React from "react";
import NotificationsList from "./notificationsList";
import UserThumbnail from "../../assets/images/instructor.png";
import CourseThumbnail from "../../assets/images/pexels-tranmautritam-32658768701@2x.png";
import Layout from "../Layout/Layout";

function Index() {
  const dataNotifications = [
    {
      userThumbnail: UserThumbnail,
      user: "Jhon",
      courseCommented: "Adobe Lightroom basic training",
      titleText: "replied to your question on",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      time: "10 min ago",
      courseThumbnail: CourseThumbnail,
      notificationLink: "",
      status: "unread",
    },
    {
      userThumbnail: UserThumbnail,
      user: "Aamir",
      courseCommented: "Professional logo designing",
      titleText: "liked your reply on his question on",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      time: "12 hours ago",
      courseThumbnail: CourseThumbnail,
      notificationLink: "",
      status: "unread",
    },
    {
      userThumbnail: UserThumbnail,
      user: "Aamir",
      courseCommented: "Professional logo designing",
      titleText: "liked your reply on his question on",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      time: "12 hours ago",
      courseThumbnail: CourseThumbnail,
      notificationLink: "",
      status: "",
    },
  ];
  return (
    <Layout>
      <div>
        <div className="wishList notifications">
          <h3 className="titleDashboard mb-28px text-xl font-semibold pb-26px">
            Notifications
          </h3>
          <div className="block w-full">
            <NotificationsList data={dataNotifications} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
