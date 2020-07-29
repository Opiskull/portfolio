import React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import { Seo } from "../components/Seo";

const Index = () => (
  <Layout>
    <Intro></Intro>
    <Seo></Seo>
    <Projects
      projects={[
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
        {
          description: "Test Joolm lal fja# jfjs kskdjf fnhfjdjdjh",
          title: "Test Project 5",
          url: "https://test",
        },
      ]}
    ></Projects>
  </Layout>
);

export default Index;
