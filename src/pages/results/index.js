import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Layout from "../Layout/Layout";
import ComulativeResults from "./comulativeResults";
import QuizResults from "./quizResults";

function Index() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Layout>
      <div>
        <div className="myCourses resultsMain">
          <h3 className="titleDashboard mb-28px text-xl font-semibold">
            Results
          </h3>
          <div className="block w-full">
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList>
                <Tab>Cumulative results</Tab>
                <Tab>Quiz results</Tab>
                <Tab>Assignment reults</Tab>
                <Tab>Exam results</Tab>
              </TabList>
              <TabPanel>
                <ComulativeResults />
              </TabPanel>
              <TabPanel>
                <QuizResults />
              </TabPanel>
              <TabPanel>
                <h1>Assignment reults</h1>
              </TabPanel>
              <TabPanel>
                <h1>Exam results</h1>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
