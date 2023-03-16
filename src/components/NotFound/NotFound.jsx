import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  // en caso de no encontrarse la ruta se muestra este componente como error
  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-cyan-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-6 flex flex-col justify-center text-center text-sm text-gray-800">
        <Link to={"/"}>
          <button
            type="button"
            className="font-medium text-gray-600 hover:text-gray-500 focus:outline-none"
          >
            Continue Shopping
            <span aria-hidden="true"> →</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
