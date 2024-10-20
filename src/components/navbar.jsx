import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/account-selection' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-10" ref={navbarRef}>
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          MyLogo
        </div>
        <button onClick={toggleMenu} className="text-gray-800 md:hidden focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <ul
          className={`md:flex absolute md:static bg-gray-100 md:bg-transparent transition-all duration-300 ${
            isOpen ? 'top-12 left-0 w-full' : 'hidden'
          } flex flex-col items-center md:flex-row md:space-x-4 space-y-5 md:space-y-0`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block py-2 px-4 transition duration-300 relative font-bold ${
                  location.pathname === item.path ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'
                }`}
                onClick={closeMenu}
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
