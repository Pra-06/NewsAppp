import { useState } from "react";
import { Link } from "react-router-dom";

export default function Choice() {
  return (
    <div className="p-4 bg-white shadow-md ml-51 mr-6">
      {/* Top Navigation */}
      <div className="relative">
        <nav className="flex overflow-x-auto space-x-4 text-sm text-black">
          {[
            "Home",
            "Astrology",
            "Entertainment",
            "Trending",
            "Education",
            "Sports",
            "Daily Digest",
            "Opinion",
            "For you",
            "Web Stories",
            "TN Games",
            "LiveTheNews",
            "Weather",
            "Latest News",
            "TNLS 2024",
            "Lifestyle",
            "Elections",
            "Videos",
            "Photos",
            "Cities",
            "Quickreads",
            "Analysis",
            "Following",
            "Science",
            "Product Hub",
            "Podcasts",
            "Technology",
          ].map((item, index) => (
            <p key={index} className="cursor-pointer hover:underline whitespace-nowrap">
              {item}
            </p>
          ))}
        </nav>
        {/* Optional: Scroll Indicator */}
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      {/* Additional Navigation Links */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-black">
        {[
          { title: "Budget 2025", to: "/budget-2025" },
          { title: "Crime", to: "/crime" },
          { title: "Accidents", to: "/accidents"},
          { title: "Sports", to: "/sports" },
          { title: "Politics", to: "/politics" },
          { title: "Elections", to: "/elections" },
          { title: "Culture", to: "/culture" },
          { title: "Entertainment", to: "/entertainment" },
          { title: "International", to: "/international" },
          { title: "Weather", to: "/weather" },
        ].map((link, index) => (
          <Link key={index} to={link.to} className="cursor-pointer hover:underline">
            {link.title}
          </Link>
        ))}
      </div>

      {/* Dropdown Section */}
      <div className="mt-4 flex flex-col gap-2 w-52">
        <Dropdown title="India News" options={["Delhi", "Mumbai", "Bengaluru", "Hyderabad"]} />
        <Dropdown title="Cricket" options={["IPL", "T20 World Cup", "ODI", "Test Matches"]} />
        <Dropdown title="World News" options={["Asia", "Europe", "America", "Middle East"]} />
      </div>
    </div>
  );
}

// Dropdown Component
function Dropdown({ title, options }) {
  const [selected, setSelected] = useState(title);

  return (
    <select
      className="border border-gray-400 p-2 rounded-md text-sm"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      <option disabled>{title}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
