import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 pr-0 sm:pr-3">
            <Image
              className="rounded-lg"
              src="/casual.JPG"
              alt="Another of my photo should be here"
              width={600}
              height={600}
            />
          </div>
          <div className="w-full md:w-2/3 mt-8 md:mt-0">
            <h2 className="text-6xl font-bold mb-4 bg-accent py-1 px-2">About Me</h2>
            <p className="text-xl leading-relaxed">
              Hello there! My name is Amara Ouattara and I am currently a Computer
              Science and Economics Student at Northeastern University in Boston,
              MA. I am an aspiring Software Engineer and I hope to gain experience
              in either front end, back end or full-stack development. I am
              proficient in Java and am working on learning the MERN Stack (React.js
              & React-Native), along with C, and SQL. I hope to learn more in the
              future and gain more knowledge on my journey as a Software Engineer! 
              Thank you for visiting my page. <br /><br />Contact Me at: ouattara.a2025@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
