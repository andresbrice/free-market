import CartWidget from "../CartWidget/CartWidget";
import Sections from "./Sections/Sections";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppRoutesContext } from "../../context/AppRoutesContext.js";

const Navbar = ({ brand }) => {
  const routes = useContext(AppRoutesContext);
  const [showMenu, setShowMenu] = useState(false);
  // console.log(showMenu);
  const toggleHamburgerHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 w-full sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center flex-row w-1/2 px-6">
          <Link to={routes[0].path}>
            <button className="inline-flex justify-center items-center flex-shrink-0 min-w-min focus:outline-none">
              <p className="text-gray-300 font-semibold min-w-min">{brand}</p>
              <img
                className="h-16 w-16"
                src="https://firebasestorage.googleapis.com/v0/b/free-market-929b7.appspot.com/o/free-market-logo.svg?alt=media&token=921356f7-233f-4c46-9311-04c12b395be4"
                alt="logo"
              />
            </button>
          </Link>

          <div className="hidden md:flex  md:space-x-4 w-1/4 ml-4">
            <ul className="list-none flex">
              <Sections />
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <button
            className="md:hidden ml-3 text-gray-300"
            onClick={() => toggleHamburgerHandler()}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <CartWidget quantity="10" />
      </div>

      <div
        className={`${
          showMenu
            ? "block px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-start gap-2 w-full">
          <Sections />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
