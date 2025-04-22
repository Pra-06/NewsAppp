import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you have this import
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  console.log("Menu is", open ? "OPEN" : "CLOSED");

  return (
    <div className="relative z-50">
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl p-2 text-white bg-blue-800 rounded-md fixed top-4 left-4 z-50"
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide Menu Panel */}
      {open && (
        <div className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg p-4 overflow-y-auto z-50">
          {/* Header */}
          <div className="text-center text-xl font-bold text-blue-900 border-b pb-2 mb-4">
            The News
            <p className="text-sm text-blue-500 font-normal">Monday, January 25, 2025</p>
          </div>

          {/* Scrollable Categories */}
          <div className="flex flex-wrap gap-2 text-sm text-black mb-4">
            {[
              "Home", "Astrology", "Entertainment", "Trending", "Education",
              "Sports", "Daily Digest", "Opinion", "For you", "Web Stories",
              "TN Games", "LiveTheNews", "Weather", "Latest News", "TNLS 2024",
              "Lifestyle", "Elections", "Videos", "Photos", "Cities", "Quickreads",
              "Analysis", "Following", "Science", "Product Hub", "Podcasts", "Technology"
            ].map((item, index) => (
              <span key={index} className="cursor-pointer hover:underline">
                {item}
              </span>
            ))}
          </div>

          {/* Section Links */}
          <div className="flex flex-wrap gap-2 text-sm text-black font-medium mb-4">
            {[
              { title: "Budget 2025", to: "/budget-2025" },
              { title: "Crime", to: "/crime" },
              { title: "Accidents", to: "/accidents" },
              { title: "Sports", to: "/sports" },
              { title: "Politics", to: "/politics" },
              { title: "Elections", to: "/elections" },
              { title: "Culture", to: "/culture" },
              { title: "Entertainment", to: "/entertainment" },
              { title: "International", to: "/international" },
              { title: "Weather", to: "/weather" },
            ].map((link, index) => (
              <Link key={index} to={link.to} className="hover:underline">
                {link.title}
              </Link>
            ))}
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-col gap-2">
            <Dropdown title="India News" options={["Delhi", "Mumbai", "Bengaluru", "Hyderabad"]} />
            <Dropdown title="Cricket" options={["IPL", "T20 World Cup", "ODI", "Test Matches"]} />
            <Dropdown title="World News" options={["Asia", "Europe", "America", "Middle East"]} />
          </div>
        </div>
      )}
    </div>
  );
}

// Dropdown component for filter options
function Dropdown({ title, options }) {
  const [selected, setSelected] = useState(title);
  return (
    <select
      className="border border-gray-300 p-2 rounded-md text-sm w-full"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option disabled>{title}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
}
