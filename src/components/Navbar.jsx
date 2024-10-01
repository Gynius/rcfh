import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbar_links } from "../assets/constants/site_identity";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  // Function to toggle the menu visibility
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="sticky top-0 bg-white border-gray-200 shadow-md :bg-gray-900 :border-gray-700 border-b z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 2xl:w-3/5 w-4/5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/rcfh_logo.svg" className="h-8" alt="logo" />
          <span className="font-playfair self-center text-2xl font-semibold whitespace-nowrap :text-white">
            RCFH
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={toggle}
          onClick={handleToggle} // Handle toggle click
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block lg:w-auto ${
            toggle ? "block" : "hidden"
          } md:flex md:justify-center`} // Conditionally show/hide the menu
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white :bg-gray-800 md::bg-gray-900 border">
            {navbar_links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-center flex items-center group hover:text-green"
                >
                  <Link
                    to={link.url}
                    className={`border-b-2 ${
                      location.pathname === link.url
                        ? "border-green"
                        : "border-transparent"
                    } hover:border-green`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="text-center flex items-center hover:text-green hidden md:flex">
              <a href="https://calendly.com/kathy-rcfhagency/60min">
                <button className="border rounded-full px-5 py-3 bg-red text-white shadow">
                  Book A Call
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
