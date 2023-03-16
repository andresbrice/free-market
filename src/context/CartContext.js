import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    // console.log(id);
    return cart.find((prod) => prod.id === id);
  };

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      const index = cart.findIndex((prod) => prod.id === product.id);
      const aux = [...cart];
      const totalQuantity = aux[index].quantity + quantity;
      if (totalQuantity <= product.stock) {
        aux[index].quantity = totalQuantity;
        setCart(aux);
      } else {
        console.log("No hay suficiente stock");
      }
    } else {
      const productCart = {
        ...product,
        quantity: quantity,
      };
      setCart([...cart, productCart]);
    }
  };

  const removeItem = (id) => {
    console.log(id);
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const getItemQuantity = () => {
    // console.log(cart.length);
    return cart.reduce((acum, prod) => (acum += prod.quantity), 0);
  };

  const totalPrice = () => {
    return cart.reduce((acum, prod) => (acum += prod.quantity * prod.price), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        emptyCart,
        getItemQuantity,
        totalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
