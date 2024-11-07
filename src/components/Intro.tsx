import React from 'react';
import { Button } from '@/components/ui/Button';

const Intro: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">Welcome! My name is</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-accent py-2 px-4 mb-4">Amara Ouattara</h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">I am a student at Northeastern University.</p>
      <Button asChild size="lg">
        <a
          href="https://docs.google.com/document/d/1Inr80aMMy_oGIVsrWLbuVUYXd8GU7Z5wmUKKno9WWic/edit?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </Button>
    </section>
  );
};

export default Intro;