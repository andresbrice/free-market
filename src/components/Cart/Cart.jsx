import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemList from "../ItemList/ItemList";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  console.log("Cart:", cart);
  return (
    <>
      {cart.length === 0 ? (
        <div className="mt-6 flex flex-col justify-center text-center text-sm text-gray-800">
          <h2 className="text-3xl mb-4">Empty Cart</h2>
          <Link to={"/"}>
            <button
              type="button"
              className="font-medium text-gray-600 hover:text-gray-500"
            >
              Continue Shopping
              <span aria-hidden="true"> →</span>
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-col  items-center justify-center text-center text-sm text-gray-800">
            <ItemList prods={cart} template="ItemCart" />

            <div className="flex flex-col items-center justify-center border-t border-gray-200 py-4 px-3 sm:px-6">
              <div className="flex justify-center text-xl font-semibold text-gray-900 w-48">
                <p>
                  Resume: ${new Intl.NumberFormat("de-DE").format(totalPrice())}
                </p>
              </div>

              <div className="mt-6">
                <Link to={"/checkout"}>
                  <button className="flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-500">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>

              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <Link to={"/"}>
                  <button
                    type="button"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Or continue Shopping
                    <span aria-hidden="true"> →</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
