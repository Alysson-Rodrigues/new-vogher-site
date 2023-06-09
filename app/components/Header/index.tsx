import Image from 'next/image';
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed top-0 left-0 w-full  backdrop-blur-sm z-50 transition duration-500 ease-in-out">
      <div className="p-16 lg:p-0 lg:px-8 mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">{title}</span>
              <Image className="h-8 w-auto sm:h-10 hover:scale-125 transition duration-500 ease-in-out" src="/logo.png" width={70} height={70} alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="text-2xl font-base-neue-bold uppercase text-black transition duration-500 ease-in-out">
              About
            </a>
            <a href="#" className="ml-8 text-2xl font-base-neue-bold uppercase text-black transition duration-500 ease-in-out">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
