import { createContext } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx";
import About from "../components/About/About.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";
import Checkout from "../components/Checkout/Checkout.jsx";
import Cart from "../components/Cart/Cart.jsx";
import { Navigate } from "react-router-dom";

export const AppRoutesContext = createContext([]);
// creo array de rutas
export const routes = [
  { path: "/", element: <ItemListContainer /> },
  { path: "/category/:categoryName", element: <ItemListContainer /> },
  { path: "/item/:id", element: <ItemDetailContainer /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "*", element: <Navigate to="/not-found" replace /> },
  { path: "/not-found", element: <NotFound /> },
];
// se lo paso al proveedor como parametro
export const AppRoutesProvider = ({ children }) => {
  return (
    <AppRoutesContext.Provider value={routes}>
      {children}
    </AppRoutesContext.Provider>
  );
};
