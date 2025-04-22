import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Choice from '../Home/Choice'; // Correct path
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const search = () => {
    if (input.trim() === '') {
      alert('Please enter a search term.');
    } else {
      console.log(`Searching for: ${input}`);
    }
  };

  const navLinks = [
    { title: 'Budget 2025', to: '/budget-2025' },
    { title: 'Crime', to: '/crime' },
    { title: 'Accidents', to: '/accidents' },
    { title: 'Sports', to: '/sports' },
    { title: 'Politics', to: '/politics' },
    { title: 'Elections', to: '/elections' },
    { title: 'Culture', to: '/culture' },
    { title: 'Entertainment', to: '/entertainment' },
    { title: 'International', to: '/international' },
    { title: 'Weather', to: '/weather' },
  ];

  return (
    <div className="relative bg-white shadow-md w-full z-50">
      {/* Top Row: Menu + Search + User Icon */}
      <div className="flex items-center justify-between px-4 py-2 space-x-4">
        {/* Hamburger Icon */}
        <div className="flex-shrink-0" onClick={toggleMenu}>
        <button
        onClick={toggleMenu}
        className="text-xl p-2 text- black bg-blue-100 rounded-md fixed top-4 left-4 z-[100]"
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </button>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-2">
          <div className="relative w-full">
            <button
              className="absolute left-2 top-2.5"
              onClick={search}
              aria-label="Search"
            >
              <IoIosSearch className="text-xl text-gray-500" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search Latest News Updates, Weather, Entertainment & More..."
              className="w-full pl-10 pr-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
        </div>

        {/* User Icon */}
        <div className="flex-shrink-0">
          <FaRegUserCircle className="text-2xl" />
        </div>
      </div>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex justify-center items-center overflow-x-auto space-x-4 text-sm font-semibold text-black px-4 py-2">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="cursor-pointer hover:text-blue-600 whitespace-nowrap"
          >
            {link.title}
          </Link>
        ))}
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-0 left-0 w-full h-screen flex flex-col items-center space-y-4 p-4 shadow-lg z-40">
          <div className="flex flex-col items-center space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="cursor-pointer hover:text-blue-600 text-sm font-medium"
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Choice Filters in Mobile */}
          <div className="mt-4 w-full">
            <Choice />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
