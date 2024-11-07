'use client'
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { Project } from "@/types";

const Card: React.FC<Project> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer border-2 border-primary transform transition-transform duration-300 hover:scale-105"
        onClick={handleCardClick}
      >
        <Image
          className="object-cover"
          src={props.image}
          alt={props.title}
          layout="fill"
        />
        <div className="absolute bottom-0 left-0 w-full bg-primary-light bg-opacity-90 p-4">
          <h3 className="text-secondary text-xl font-semibold">{props.title}</h3>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        {...props}
      />
    </>
  );
};

export default Card;