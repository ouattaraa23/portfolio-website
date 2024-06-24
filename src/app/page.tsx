import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
    </>
  );
}

export default Home;


