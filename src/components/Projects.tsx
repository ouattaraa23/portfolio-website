import React from "react";
import Card from "./Card";
import { Project } from "@/types";

const projectData: { [key: string]: Project } = {
  proxiProject: {
    title: "Proxi - Mobile Application",
    tech: "MongoDB, Express.js, React-Native, Expo, Node.js",
    description: "A mobile application developed using the MERN stack and Expo. Built in collaboration with an entrepreneurship class. Developed a medium fidelity prototype with my own backend of an application that would make networking at events easier.",
    image: "/images/proxi-login.png",
    github: "https://github.com/ouattaraa23/Proxi"
  },
  footballProject: {
    title: "Premier League - API/React App",
    tech: "MongoDB, Express.js, React.js, Node.js",
    description: "A simple React application that connects to my custom API filled with Premier League soccer players from the 2019/2020 season. Developed 11 routes for the React front end to reference. Built to get familiar with MongoDB and API's",
    image: "/images/Mongodb-logo.png",
    github: "https://github.com/ouattaraa23/Premierleague-API-Project"
  },
  websiteProject: {
    title: "Personal Website",
    tech: "JavaScript, React.js, Next.js, Firebase",
    description: "This website! This is a personal portfolio website showcasing some of my projects and skills. Built using JavaScript libraries and hosted using Firebase",
    image: "/images/personal-website.png",
    github: "https://github.com/ouattaraa23/portfolio-website"
  },
  photoEditorProject: {
    title: "Photo Editor - Desktop Application",
    tech: "Electron, React.js, Node.js",
    description: "A desktop application for photo editing with features 8 different filters, cropping, and adjustments that can be used to alter photos. School project done in collaboration with lab partner.",
    image: "/images/image-processer.png",
    github: "School Project - Link Not Available"
  }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-accent mx-auto max-w-max py-3 px-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 place-items-center max-w-7xl mx-auto">
        {Object.entries(projectData).map(([key, project]) => (
          <Card 
            key={key}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;