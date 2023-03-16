import React from "react";
const Footer = React.memo(() => {
  // Se utiliz memo para guardar el componente en memoria
  return (
    <div className="bottom-4 flex justify-center items-center py-10 bg-gray-100 border border-t-50">
      <p className="text-md md:text-lg  text-center text-gray-400">
        &copy; 2023 Free Market. All rights reserved. Designed and developed by
        Andrés Briceño.
      </p>
    </div>
  );
});

export default Footer;
