import React, { useEffect, useRef } from 'react';
import { CloseModalButton } from './CloseModalButton';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fullscreen?: boolean;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  fullscreen = false,
  className,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'visible'; // Restore background scrolling
    };
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={twMerge(
          clsx(
            'bg-white rounded-lg shadow-xl',
            'w-full h-full max-w-full max-h-full',
            'md:w-11/12 md:max-w-[90%] md:max-h-[90%]',
            'relative',
            'overflow-y-auto', // Enable vertical scrolling
            className,
          ),
        )}
        onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to the overlay
      >
        <div className="absolute right-0 z-10 flex justify-end p-4 bg-white">
          <CloseModalButton onClose={onClose} />
        </div>
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
