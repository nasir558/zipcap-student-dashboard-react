import React from "react";
import About from "./aboutMe";
import Personal from "./personal";
import Layout from "../Layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="wishList profile">
        <h3 className="titleDashboard mb-28px text-xl font-semibold pb-26px">
          Profile
        </h3>
        <div className="block w-full">
          <About />
          <Personal />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
