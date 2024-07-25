import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Interests from "@/components/Interests";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Interests />
      <Footer />
    </>
  );
}

export default Home;


