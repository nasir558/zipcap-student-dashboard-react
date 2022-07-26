import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Allcourses from "./allCourses";
import ReviewerPic from "../../assets/images/reviewer-pic.png";
import CourseThumbnail from "../../assets/images/pexels-tranmautritam-326501@2x.png";
import Layout from "../Layout/Layout";

function Index() {
  const [tabIndex, setTabIndex] = useState(0);
  const dataAllCourses = [
    {
      thumbnail: CourseThumbnail,
      title:
        "Everything you need to know about Adobe Photoshop, from beginner to expert",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "12",
      pendingTasks: "2",
      videoLIink: "",
    },
    {
      thumbnail: CourseThumbnail,
      title: "Ink Drawing Techniques: Brush, Nib, and Pen Style",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "30",
      pendingTasks: "2",
      videoLIink: "",
    },
    {
      thumbnail: CourseThumbnail,
      title:
        "Professional logo designing, design minimalist logo from sketch to final design",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "18",
      pendingTasks: "4",
      videoLIink: "",
    },
    {
      thumbnail: CourseThumbnail,
      title:
        "Everything you need to know about Adobe Photoshop, from beginner to expert",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "12",
      pendingTasks: "2",
      videoLIink: "",
    },
    {
      thumbnail: CourseThumbnail,
      title: "Ink Drawing Techniques: Brush, Nib, and Pen Style",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "30",
      pendingTasks: "2",
      videoLIink: "",
    },
  ];
  const dataInProgress = [
    {
      thumbnail: CourseThumbnail,
      title:
        "Everything you need to know about Adobe Photoshop, from beginner to expert",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "12",
      pendingTasks: "2",
      videoLIink: "",
    },
    {
      thumbnail: CourseThumbnail,
      title: "Ink Drawing Techniques: Brush, Nib, and Pen Style",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "30",
      pendingTasks: "2",
      videoLIink: "",
    },
    {
      thumbnail: CourseThumbnail,
      title:
        "Professional logo designing, design minimalist logo from sketch to final design",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "18",
      pendingTasks: "4",
      videoLIink: "",
    },
  ];
  const dataRecentlyAccessed = [
    {
      thumbnail: CourseThumbnail,
      title:
        "Professional logo designing, design minimalist logo from sketch to final design",
      user: "Jhon",
      userPic: ReviewerPic,
      totalLessons: "36",
      completed: "18",
      pendingTasks: "4",
      videoLIink: "",
    },
  ];
  return (
    <Layout>
      <div>
        <div className="myCourses">
          <h3 className="titleDashboard mb-28px text-xl font-semibold">
            My Courses
          </h3>
          <div className="block w-full">
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList>
                <Tab>All Classes</Tab>
                <Tab>Recently Accessed</Tab>
                <Tab>In Progress</Tab>
                <Tab>Not Started Yet</Tab>
                <Tab>Completed</Tab>
              </TabList>
              <TabPanel>
                <Allcourses data={dataAllCourses} />
              </TabPanel>
              <TabPanel>
                <Allcourses data={dataRecentlyAccessed} />
              </TabPanel>
              <TabPanel>
                <Allcourses data={dataInProgress} />
              </TabPanel>
              <TabPanel>
                <Allcourses data={dataRecentlyAccessed} />
              </TabPanel>
              <TabPanel>
                <Allcourses
                  onClick={() => setTabIndex(0)}
                  onKeyDown={() => setTabIndex(0)}
                />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
