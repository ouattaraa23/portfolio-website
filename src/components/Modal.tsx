'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  content: string;
  tech: string;
  image: string;
  github: string;
};

// ReactModal.setAppElement('#__next'); // For accessibility

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, title, content, tech, image, github }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-4 top-2 "
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="bg-secondary rounded-lg p-6 relative max-w-lg w-full max-h-screen overflow-auto">
        <button
          onClick={onRequestClose}
          className="absolute top-1 right-1 text-primary text-2xl font-bold z-50"
        >
          &times;
        </button>
        <h2 className="text-4xl font-bold mb-4 bg-accent py-1 px-2 text-center">{title}</h2>
        <div className="flex justify-center mb-4">
          <Image
            className="rounded-lg"
            src={image}
            alt="Same as Preview Image"
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
        <div className="text-lg mb-4">{tech}</div>
        <div className="text-lg mb-4">{content}</div>
        <a
          href={github}
          className="block text-2xl text-purple-200 font-bold relative hover:text-purple-400 transition-colors text-center"
        >
          Check out the github!
        </a>
      </div>
    </ReactModal>
  );
};

export default Modal;
