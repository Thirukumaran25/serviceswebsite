import React, { useState } from "react";
import logo from "../images/Logo.png";
import { NavLink, Link, useNavigate} from "react-router-dom";
import "../App.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-[#4B69A9] p-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2">
          <img src={logo} alt="Zahrix Logo" className="h-18" />
          <span className="font-bold text-xl text-white">ZAHRIX</span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`
            md:flex md:items-center md:space-x-8 lg:space-x-12
            ${isMenuOpen ? "block" : "hidden"}
            absolute top-16 left-0 w-full bg-[#4B69A9] p-4 flex flex-col md:static md:w-auto md:flex-row md:p-0
          `}
        >
          <div className="font-bold text-white flex flex-col md:flex-row lg:space-x-2 lg:mr-36">
            <NavLink to="/home" className="p-3 block hover:text-gray-200">
              Home
            </NavLink>
            <div className="relative group">
              <select
                onChange={handleChange}
                defaultValue=""
                className="p-3 bg-transparent border-none focus:outline-none cursor-pointer text-white font-bold"
              >
                <option
                  value=""
                  disabled
                  hidden
                  className="text-[#4B69A9] font-bold"
                >
                  Services
                </option>
                <option
                  className="text-[#4B69A9] font-semibold"
                  value="/electric"
                >
                  Electrical
                </option>
                <option className="text-[#4B69A9] font-semibold" value="/cctv">
                  CCTV
                </option>
                <option className="text-[#4B69A9] font-semibold" value="/bms">
                  BMS
                </option>
              </select>
            </div>
            <NavLink to="/project" className="p-3 block hover:text-gray-200">
              Projects
            </NavLink>
            <NavLink to="/about" className="p-3 block hover:text-gray-200">
              About Us
            </NavLink>
          </div>

          <div className="mt-4 md:mt-0">
            <NavLink to="/quote">
              <button className="font-bold text-sm text-[#4B69A9] px-8 py-2 bg-white rounded-md hover:bg-gray-100 w-full md:w-auto">
                Get a Quote
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
