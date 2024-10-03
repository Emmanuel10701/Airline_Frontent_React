// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define your nav items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-gray-100 shadow-md z-10">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="text-purple-600 text-2xl font-bold">MyLogo</div>
        <button onClick={toggleMenu} className="text-gray-800 md:hidden">
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`md:flex space-x-4 absolute md:static bg-gray-100 md:bg-transparent transition-transform duration-300 ${isOpen ? 'top-12 left-0 w-full' : '-top-40'}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block py-2 px-4 transition duration-300 relative ${location.pathname === item.path ? 'text-blue-500 font-bold' : 'text-gray-800 hover:text-blue-500'}`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <hr className="absolute bottom-0 left-0 right-0 border-blue-500 transition duration-300" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
