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
        image: "/proxi_logo.png",
        github: ""
    },
    footballProject: {
        title: "Premier League - API/React App",
        tech: "MongoDB, Express.js, React.js, Node.js",
        description: "A React application that connects to an API of Premier League soccer players from the 2019/2020 season.",
        image: "/premlogo.png",
        github: ""
    },
    websiteProject: {
        title: "Personal Website",
        tech: "HTML, CSS, JavaScript, React.js",
        description: "A personal portfolio website showcasing my projects and skills.",
        image: "/website_logo.png",
        github: ""
    },
    photoEditorProject: {
        title: "Photo Editor - Desktop Application",
        tech: "Electron, React.js, Node.js",
        description: "A desktop application for photo editing with features such as filters, cropping, and adjustments.",
        image: "/photo_editor_logo.png",
        github: ""
    }
}

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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