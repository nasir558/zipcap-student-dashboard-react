import React from "react";
import Cards from "./cards";
import Layout from "../Layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="wishList paymentMethod">
        <h3 className="titleDashboard mb-28px text-xl font-semibold pb-26px">
          Payment Methods
        </h3>
        <div className="block w-full">
          <Cards />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
