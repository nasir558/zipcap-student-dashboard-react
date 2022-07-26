import React from "react";
import Welcome from "./welcome";
import EnrolledCourses from "./enrolledCourses";
import UserPic from "../../assets/images/user-pic.png";
import Layout from "../Layout/Layout";

function Index() {
  const dataWelcome = [
    {
      smallTitle: "Welcome to your Zipcap",
      heading: "Learning Space",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      backgroundClass: "bg-red",
    },
    {
      heading: "Complete your account",
      description:
        "Payment method is not added yet, simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      btnText: "Add Payment Method",
      btnLink: "",
      backgroundClass: "bg-pink",
    },
    {
      heading: "A Gift from Zipcap",
      description:
        "Some free courses from Zipcap as a gift, simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      btnText: "Access Free Courses",
      btnLink: "",
      backgroundClass: "bg-lightGreen",
    },
  ];
  const dataCoursesEnrolled = [
    {
      image: UserPic,
      lessonCount: "Lesson 12/36",
      courseTitle: "Professional and minimalistic logo designing",
      progessText: "Progress",
      progressPercent: "33%",
      courseLink: "",
    },
    {
      image: UserPic,
      lessonCount: "Lesson 18/36",
      courseTitle: "Beginners guide to basic lighting and light diffusers",
      progessText: "Progress",
      progressPercent: "50%",
      courseLink: "",
    },
    {
      image: UserPic,
      lessonCount: "Lesson 24/36",
      courseTitle: "Professional and minimalistic logo designing",
      progessText: "Progress",
      progressPercent: "66%",
      courseLink: "",
    },
  ];
  const dataPendingQuiz = [
    {
      image: UserPic,
      lessonCount: "Assignment No 3 in Unit 07",
      courseTitle: "Professional and minimalistic logo designing",
      deadlineText: "Deadline",
      deadLineDate: "Monday 23 Aug, 2021",
      courseLink: "",
    },
    {
      image: UserPic,
      lessonCount: "Assignment No 1 in Unit 05",
      courseTitle: "Beginners guide to basic lighting and light diffusers",
      deadlineText: "Deadline",
      deadLineDate: "Monday 23 Aug, 2021",
      courseLink: "",
    },
  ];
  return (
    <Layout>
      <div>
        <Welcome data={dataWelcome} />
        <EnrolledCourses
          title="Recently accessed courses"
          data={dataCoursesEnrolled}
          section="enrolledCourses"
        />
        <div className="mt-75px">
          <EnrolledCourses
            title="Pending quizzes and assignments "
            data={dataPendingQuiz}
            section="pendingQuizes"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
