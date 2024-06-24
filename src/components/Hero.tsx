import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-center pt-12 h-full text-primary-light">
      <div className="flex-1 ml-3 mb-10">
        <h1 className="text-6xl m-0">Amara Ouattara</h1>
        <p className="text-2xl mt-2">Student at Northeastern University</p>
        <a
          className="block w-56 text-center bg-primary-dark text-white rounded-full text-3xl font-light py-4 mt-4 no-underline hover:bg-primary transition-colors"
          href="https://docs.google.com/document/d/1Inr80aMMy_oGIVsrWLbuVUYXd8GU7Z5wmUKKno9WWic/edit?usp=share_link"
          download="Amara_Ouattara_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="flex-1 max-w-xl">
        <Image
          className="w-full max-w-lg p-6 rounded-lg object-cover"
          src="/headshot.JPG"
          alt="My photo should be here"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Hero;
