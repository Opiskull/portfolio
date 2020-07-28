import React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";

const Index = () => (
  <Layout>
    <Intro></Intro>
    <Projects projects={[]}></Projects>
  </Layout>
);

export default Index;
