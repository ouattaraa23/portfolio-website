import React from "react";
import Card from "./Card";

interface Project {
    title: string;
    tech: string;
    description: string;
    image: string;
    github: string;
}

const projectData: { [key: string]: Project} = {
    proxiProject: {
        title: "Proxi - Mobile Application",
        tech: "MongoDB, Express.js, React-Native, Expo, Node.js",
        description: "A mobile application developed using the MERN stack and Expo.",
        image: "/proxi-login.png",
        github: ""
    },
    footballProject: {
        title: "Premier League - API/React App",
        tech: "MongoDB, Express.js, React.js, Node.js",
        description: "A React application that connects to an API of Premier League soccer players from the 2019/2020 season.",
        image: "/Mongodb-logo.png",
        github: ""
    },
    websiteProject: {
        title: "Personal Website",
        tech: "HTML, CSS, JavaScript, React.js",
        description: "A personal portfolio website showcasing my projects and skills.",
        image: "/personal-website.png",
        github: ""
    },
    photoEditorProject: {
        title: "Photo Editor - Desktop Application",
        tech: "Electron, React.js, Node.js",
        description: "A desktop application for photo editing with features such as filters, cropping, and adjustments.",
        image: "/image-processer.png",
        github: ""
    }
}

const Projects: React.FC = () => {
    return (
        <section id="projects" className="pt-40 mb-40">
            <h2 className="text-6xl font-bold mb-4 bg-accent mx-6 py-3 px-2 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4 place-items-center">
                {Object.keys(projectData).map((key) => (
                    <Card 
                    key={key}
                    imageUrl={projectData[key].image} 
                    title={projectData[key].title}
                    modalContent={projectData[key].description}
                    tech={projectData[key].tech}
                    github={projectData[key].github}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects