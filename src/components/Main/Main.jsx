import { useContext } from "react";
import { Routes, Route } from "react-router";
import { AppRoutesContext } from "../../context/AppRoutesContext.js";

const Main = () => {
  const routes = useContext(AppRoutesContext);

  return (
    <div className="flex-grow bg-gray-100 min-h-screen py-3 sm:py-6">
      <Routes className="flex flex-col sm:flex-row sm:flex-wrap">
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default Main;
