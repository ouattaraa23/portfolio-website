'use client'
import React, { useState } from "react";
import Modal from "./Modal";

type CardProps = {
    imageUrl: string;
    title: string;
    tech: string;
    modalContent: string;
    github: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, tech ,modalContent, github }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
          <div className="relative w-1/4 h-64 mx-4 my-2 rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={handleCardClick}>
            <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
            <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 p-4">
              <h2 className="text-white text-xl">{title}</h2>
            </div>
          </div>
          <Modal 
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            title={title}
            content={modalContent}
            tech={tech}
            image={imageUrl}
            github={github}
          />
        </>
    );
};

export default Card;