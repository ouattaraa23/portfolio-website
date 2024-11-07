'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { Menu, Github, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-xl text-purple-200 font-semibold hover:text-purple-400 transition-colors">
      {children}
    </a>
  );

  const NavLinks = () => (
    <>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#interests">Interests</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 w-full bg-secondary bg-opacity-95 z-50 py-4 px-6">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Image 
          src="/images/AOLogo.png" 
          alt="Amara Ouattara Logo" 
          width={70} 
          height={70} 
        />
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>
        <div className="hidden md:flex space-x-4">
          <Button asChild variant="ghost" size="icon">
            <a href="https://www.linkedin.com/in/amara-ouattara/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/ouattaraa23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <NavLinks />
              <NavLink href="https://www.linkedin.com/in/amara-ouattara/">
                <Linkedin className="inline-block mr-2 h-5 w-5" /> LinkedIn
              </NavLink>
              <NavLink href="https://github.com/ouattaraa23">
                <Github className="inline-block mr-2 h-5 w-5" /> GitHub
              </NavLink>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;