// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-100 shadow-md z-10">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="text-purple-600 text-2xl font-bold">MyLogo</div>
        <button onClick={toggleMenu} className="text-gray-800 md:hidden">
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`md:flex space-x-4 absolute md:static bg-gray-100 md:bg-transparent transition-transform duration-300 ${isOpen ? 'top-12 left-0 w-full' : '-top-40'}`}>
          <li>
            <a href="#header" className="block py-2 px-4 hover:bg-purple-600 hover:text-white transition duration-300">Home</a>
          </li>
          <li>
            <a href="#steps" className="block py-2 px-4 hover:bg-purple-600 hover:text-white transition duration-300">Steps</a>
          </li>
          <li>
            <a href="#explore" className="block py-2 px-4 hover:bg-purple-600 hover:text-white transition duration-300">Explore</a>
          </li>
          <li>
            <a href="#jobs" className="block py-2 px-4 hover:bg-purple-600 hover:text-white transition duration-300">Jobs</a>
          </li>
          <li>
            <a href="#offers" className="block py-2 px-4 hover:bg-purple-600 hover:text-white transition duration-300">Offers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
