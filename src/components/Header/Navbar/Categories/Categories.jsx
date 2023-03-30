import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { consultarJSON } from "../../../utils/functions";
import { routes } from "../../../../context/AppRoutesContext.js";
import { getCategories } from "../../../../utils/firebase.js";

const Categories = () => {
  // componente que renderiza las categorias de los productos
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories().then((cat) => {
      setCategories(cat);
    });
  }, []);

  if (!categories) return null;

  return (
    <div
      className="absolute  z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
    >
      {/* {console.log(categories)} */}
      {categories.map((category) => (
        <Link
          to={routes[1].path.replace(":categoryName", category.categoryName)}
          key={category.id}
        >
          <li
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-800 hover:rounded-md  hover:text-white focus:outline-none"
            role="menuitem"
            tabIndex="-1"
            key={category.id}
          >
            {category.categoryName.charAt(0).toUpperCase() +
              category.categoryName.slice(1)}
          </li>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
