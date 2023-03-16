import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppRoutesContext } from "../../context/AppRoutesContext.js";

const Item = ({ item }) => {
  const routes = useContext(AppRoutesContext);
  return (
    <div className="group relative">
      <div className="h-80 aspect-w-1 aspect-h-1 w-64 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 ">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-cover lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md text-gray-900">{item.name}</h3>
          <p className="mt-1 text-md text-gray-700">{item.description}</p>
        </div>
        <p className="text-md font-medium text-gray-800">
          ${new Intl.NumberFormat("de-DE").format(item.price)}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Link to={routes[2].path.replace(":id", item.id)}>
          <button
            type="button"
            className="w-full rounded-md bg-gray-800 px-3 py-2 text-md font-semibold text-white shadow-sm  hover:bg-gray-700 hover:text-white focus:outline-none"
          >
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
