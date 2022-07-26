import React from "react";
import CertificateList from "./certificateList";
import Layout from "../Layout/Layout";

function Index() {
  return (
    <Layout>
      <div>
        <div className="wishList certificates">
          <h3 className="titleDashboard mb-28px text-2xl font-semibold pb-26px">
            Certificates
          </h3>
          <div>
            <CertificateList />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
