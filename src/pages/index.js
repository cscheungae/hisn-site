import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AboutUs from "../components/aboutUs";
import MemberPanel from "../components/memberPanel";
import Activity from "../components/activity";
import Contacts from "../components/contacts";
// import Triangle from "../images/svg/triangle.svg";

// import "../styles/index.scss";

const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <MemberPanel />
    <Activity />
    <Contacts />
  </Layout>
);

export default IndexPage;
