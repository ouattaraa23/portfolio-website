import About from "@/components/About";
import Header from "@/components/Header";
import Interests from "@/components/Interests";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Interests />
    </>
  );
}

export default Home;


