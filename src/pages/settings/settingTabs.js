import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EmailUpdated from "./EmailUpdated";
import PassowrdUpdate from "./passwordUpdate";
import Notification from "./notifications";
import DeleteAccount from "./deleteAccount";

const SettingTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="settingsTabs lg:px-20px">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16">
          <div>
            <TabList>
              <Tab>Email Address</Tab>
              <Tab>Password</Tab>
              <Tab>Notifications</Tab>
              <Tab>Delete Account</Tab>
            </TabList>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <TabPanel>
              <div className="block w-full">
                <EmailUpdated />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="block w-full">
                <PassowrdUpdate />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="block w-full">
                <Notification />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="block w-full">
                <DeleteAccount />
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default SettingTabs;
