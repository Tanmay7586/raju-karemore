import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa"; // Importing the caret down icon

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="bg-[#FFFA12]"
      style={{
        paddingLeft: "110px",
        paddingRight: "110px",
        paddingTop: "22px",
      }}
    >
      <div className="container mx-auto font-bold flex justify-between items-center">
        <div className="text-gray-800 font-bold text-3xl pb-5">
          <span className="text-gray-800">LOGO</span>
        </div>
        <div className="flex space-x-10 text-gray-800 items-center pb-5 ml-10">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-800 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>

          {/* Dropdown for Public Services */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-800 hover:text-yellow-400 transition duration-300 flex items-center"
            >
              Public Service
              <FaCaretDown className="ml-2" /> {/* Dropdown icon */}
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 z-50 bg-white shadow-lg rounded-lg">
                <Link
                  to="/public-service/education"
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-200"
                >
                  Education
                </Link>
                <Link
                  to="/public-service/healthcare"
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-200"
                >
                  Healthcare
                </Link>
                <Link
                  to="/public-service/agriculture"
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-200"
                >
                  Agriculture
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/service"
            className="text-gray-800 hover:text-yellow-400 transition duration-300"
          >
            Campaign & Program
          </Link>

          <Link
            to="/contact"
            className="text-gray-800 hover:text-yellow-400 transition duration-300"
          >
            News
          </Link>
          <Link
            to="/"
            className="text-gray-800 hover:text-yellow-400 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/cart"
            className="text-gray-800 hover:text-yellow-400 transition duration-300"
          >
            <button className="bg-[#C6318B] text-white font-semibold rounded-full pt-3 pl-10 pr-10 pb-3 hover:bg-[#C6314B] transition">
              Join Member
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
