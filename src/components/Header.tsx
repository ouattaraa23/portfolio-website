'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-secondary bg-opacity-100 z-50 flex justify-between items-center px-4 py-2">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Image 
          src="/images/AOLogo.png" 
          alt="logo" 
          width={70} 
          height={70} 
        />
        <button
          className="block md:hidden text-purple-200 focus:outline-none ml-auto"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      <ul className={`list-none flex-col md:flex-row md:flex gap-5 navLinks bg-secondary transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto md:items-center md:pl-12`}>
        <li className="text-center md:text-left p-4 md:p-0">
          <a href="#about" className="text-2xl text-purple-200 font-bold relative hover:text-purple-400 transition-colors">
            About
            <span className="block w-0 h-1 bg-purple-500 absolute left-0 bottom-0 transition-all duration-500"></span>
          </a>
        </li>
        <li className="text-center md:text-left p-4 md:p-0">
          <a href="#projects" className="text-2xl text-purple-200 font-bold relative hover:text-purple-400 transition-colors">
            Projects
            <span className="block w-0 h-1 bg-purple-500 absolute left-0 bottom-0 transition-all duration-500"></span>
          </a>
        </li>
        <li className="text-center md:text-left p-4 md:p-0">
          <a href="#interests" className="text-2xl text-purple-200 font-bold relative hover:text-purple-400 transition-colors">
            Interests
            <span className="block w-0 h-1 bg-purple-500 absolute left-0 bottom-0 transition-all duration-500"></span>
          </a>
        </li>
        <li className="text-center md:text-left sm:hidden p-4 md:p-0">
          <a href="https://www.linkedin.com/in/amara-ouattara/" className="text-2xl text-purple-200 font-bold relative hover:text-purple-400 transition-colors">
            LinkedIn
            <span className="block w-0 h-1 bg-purple-500 absolute left-0 bottom-0 transition-all duration-500"></span>
          </a>
        </li>
        <li className="text-center md:text-left sm:hidden p-4 md:p-0">
          <a href="https://github.com/ouattaraa23" className="text-2xl text-purple-200 font-bold relative hover:text-purple-400 transition-colors">
            GitHub
            <span className="block w-0 h-1 bg-purple-500 absolute left-0 bottom-0 transition-all duration-500"></span>
          </a>
        </li>
      </ul>
      <div className="hidden md:flex gap-5 items-center ml-auto">
        <a href="https://www.linkedin.com/in/amara-ouattara/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#efd9ff" width="35" height="35" viewBox="0 0 24 24" className='hover:fill-purple-400 transition-colors'>
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 
              4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
        </a>
        <a href="https://github.com/ouattaraa23">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#efd9ff" width="35" height="35" viewBox="0 0 24 24"
          className='hover:fill-purple-400 transition-colors'>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333
              -1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305
              -5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 
              3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 
              .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Header;
