import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-accent py-3 px-6 inline-block">About Me</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <Image
              className="rounded-lg"
              src="/images/casual.JPG"
              alt="Amara Ouattara"
              width={600}
              height={600}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <p className="text-lg md:text-xl leading-relaxed">
              Hello there! My name is Amara Ouattara and I am currently a Computer
              Science and Economics Student at Northeastern University in Boston,
              MA. I am an aspiring Software Engineer and I hope to gain experience
              in either front end, back end or full-stack development. I am
              proficient in Java and am working on learning the MERN Stack (React.js
              & React-Native), along with C, and SQL. I hope to learn more in the
              future and gain more knowledge on my journey as a Software Engineer! 
              Thank you for visiting my page.
            </p>
            <p className="text-lg md:text-xl mt-4">
              Contact Me at: <a href="mailto:ouattara.a2025@gmail.com" className="text-accent hover:underline">ouattara.a2025@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;