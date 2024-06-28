import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-start pt-20 mt-20">
      <div className="text-center px-4">
        <div className="text-left py-2">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2">Welcome! My name is</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl m-0 bg-accent py-1 px-2">Amara Ouattara</h1>
        <div className="text-left py-2">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2">and I am a student at Northeastern University.</p>
        </div>
        <a
          className="block w-56 text-center bg-primary-dark text-white rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light py-4 mt-4 no-underline hover:bg-primary transition-colors"
          href="https://docs.google.com/document/d/1Inr80aMMy_oGIVsrWLbuVUYXd8GU7Z5wmUKKno9WWic/edit?usp=share_link"
          download="Amara_Ouattara_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="absolute bottom-1/4 sm:bottom-1 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="animate-bounce text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Scroll</span>
          <svg
            className="animate-bounce w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Intro;
