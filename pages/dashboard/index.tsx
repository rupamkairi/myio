import {
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Account from "./account";
import DashboardLayout from "./DashboardLayout";
import Links from "./links";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container maxW="container.lg">
        <Heading size={"2xl"} fontWeight="thin" marginBottom={16}>
          Dashboard
        </Heading>
        <Tabs>
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>Links 🔗</Tab>
            <Tab>Account 🔓</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DashboardLayout />
            </TabPanel>
            <TabPanel>
              <Links />
            </TabPanel>
            <TabPanel>
              <Account />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}
