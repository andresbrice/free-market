import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Form from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <>
      {cart.length === 0 ? (
        <>
          {/* Si el tamaño del carrito es 0 impide ver el formuilario de checkout */}
          <div className="mt-6 flex flex-col justify-center text-center text-sm text-gray-800">
            <h2 className="text-3xl mb-4">
              To complete the purchase you must have products in the cart
            </h2>
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
        </>
      ) : (
        // Sino muestra el formulario para generar la orden de compra
        <Form />
      )}
    </>
  );
};

export default Checkout;
