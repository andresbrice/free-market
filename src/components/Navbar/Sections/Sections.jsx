// COMPONENTES
import Categories from "../Categories/Categories";
// HOOKS
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppRoutesContext } from "../../../context/AppRoutesContext.js";

const Sections = React.memo(() => {
  // componente que renderiza las secciones
  const routes = useContext(AppRoutesContext);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest(".dropdown")) {
      setIsOpen(false);
    }
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li>
        <button
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium dropdown focus:outline-none"
          onClick={handleDropdownToggle}
        >
          <div className="flex justify-center">
            Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {isOpen && <Categories />}
        </button>
      </li>

      <li>
        <Link to={routes[3].path}>
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none">
            About
          </button>
        </Link>
      </li>
    </>
  );
});

export default Sections;
