import React from "react";
import "react-tabs/style/react-tabs.css";
import Layout from "../Layout/Layout";
import AttendanceTable from "./attendanceTable";

function Index() {

    return (
        <Layout>
            <div>
                <div className="myCourses resultsMain">
                    <h3 className="titleDashboard mb-28px text-xl font-semibold">
                        Attendance logs
                    </h3>
                    <div className="block w-full">
                        <AttendanceTable />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Index;
