import { createContext } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx";
import About from "../components/About/About.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";
import Checkout from "../components/Checkout/Checkout.jsx";
import Cart from "../components/Cart/Cart.jsx";

export const AppRoutesContext = createContext([]);

export const routes = [
  { path: "/", element: <ItemListContainer /> },
  { path: "/category/:categoryName", element: <ItemListContainer /> },
  { path: "/item/:id", element: <ItemDetailContainer /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "*", element: <NotFound /> },
];

export const AppRoutesProvider = ({ children }) => {
  return (
    <AppRoutesContext.Provider value={routes}>
      {children}
    </AppRoutesContext.Provider>
  );
};
