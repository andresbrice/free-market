import React from "react";

const Loader = ({ isLoading, isProductsLoaded }) => {
  // Componente loader que se muestra si se estan cargando los productos
  return (
    <>
      {isLoading || !isProductsLoaded ? (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-gray-300 bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
