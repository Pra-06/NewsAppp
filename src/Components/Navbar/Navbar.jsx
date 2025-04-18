import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

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
      // Implement your search logic here
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
    <div className="relative bg-white shadow-md">
      {/* Top Bar with Hamburger, Search Bar, and User Icon */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* Hamburger Icon */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose size="30px" color="black" />
          ) : (
            <MdOutlineMenu size="30px" color="black" />
          )}
        </div>

        {/* User Icon with margin-right for gap */}
        <div className="ml-4">
          <FaRegUserCircle className="text-2xl" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <button
              className="absolute left-2 top-2.5"
              onClick={search}
              aria-label="Search"
            >
              <IoIosSearch className="text-2xl text-gray-500" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search Latest News Updates, Weather, Entertainment & More..."
              className="w-full pl-10 pr-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center items-center overflow-x-auto space-x-4 text-sm font-semibold text-black px-4 py-2">
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
        <div className="md:hidden bg-white flex flex-col items-center p-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="cursor-pointer hover:text-blue-600 py-2"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
