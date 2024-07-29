'use client'
import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

type CardProps = {
    imageUrl: string;
    title: string;
    tech: string;
    modalContent: string;
    github: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, tech, modalContent, github }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
          <div
            className="relative w-3/4 h-3/4 mx-4 my-2 rounded-lg overflow-hidden shadow-lg cursor-pointer border-2 border-primary transform transition-transform duration-300 hover:scale-105"
            onClick={handleCardClick}
          >
            <Image
              className="object-cover w-full h-full"
              src={imageUrl}
              alt={title}
              width={800}
              height={800}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary-light bg-opacity-100 p-4">
              <h2 className="text-secondary text-xl">{title}</h2>
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
