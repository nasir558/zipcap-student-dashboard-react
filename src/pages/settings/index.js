import React from "react";
import SettingTabs from "./settingTabs";
import Layout from "../Layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="wishList settings">
        <h3 className="titleDashboard mb-28px text-xl font-semibold pb-26px">
          Settings
        </h3>
        <div className="block w-full">
          <SettingTabs />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
