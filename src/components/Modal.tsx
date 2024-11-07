'use client'

import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types';

type ModalProps = Project & {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, tech, image, github }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 bg-accent py-1 px-2 text-center">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            className="rounded-lg"
            src={image}
            alt={title}
            width={400}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="mt-4 text-lg font-semibold">{tech}</div>
        <div className="mt-2 text-base">{description}</div>
        <div className="mt-4 flex justify-end">
          <Button asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;