import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
import {
  createPurchaseOrder,
  updateProduct,
  getProduct,
} from "../../utils/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Checkout = () => {
  const MySwal = withReactContent(Swal);
  const { cart, emptyCart, totalPrice } = useCartContext();
  let nav = useNavigate();

  const formData = useRef();

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleConfirmEmailChange(e) {
    setConfirmEmail(e.target.value);
  }

  const consultarForm = (e) => {
    e.preventDefault();

    const data = new FormData(formData.current);

    const client = Object.fromEntries(data);

    if (email !== confirmEmail) {
      toast.error("The emails don't match.");
    } else {
      const auxCart = [...cart];

      auxCart.forEach((productCart) => {
        console.log(getProduct(productCart.id));
        getProduct(productCart.id).then(
          (prodDB) => {
            prodDB.stock -= productCart.quantity;
            updateProduct(prodDB.id, prodDB);
          } //para descontar stock
        );
      });

      createPurchaseOrder(
        client,
        auxCart,
        totalPrice(),
        new Date().toISOString()
      ).then((purchaseOrder) => {
        MySwal.fire({
          title: `Thank you for shopping at Free Market`,
          html: `Your purchase order with id: ${
            purchaseOrder.id
          } for a total of $${new Intl.NumberFormat("de-DE").format(
            totalPrice()
          )} was successfully placed.`,
          icon: "success",
        }).then(() => {
          e.target.reset();
          emptyCart();
          nav("/");
        });
      });
    }
  };

  return (
    <>
      {cart.length === 0 ? (
        <>
          <div className="mt-6 flex flex-col justify-center text-center text-sm text-gray-800">
            <h2 className="text-3xl mb-4">
              To complete the purchase you must have products in the cart
            </h2>
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
        </>
      ) : (
        <div className="container mx-auto">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
              <form
                className="mb-0 space-y-6"
                onSubmit={consultarForm}
                ref={formData}
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="off"
                      required
                      className="w-full border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                      pattern="[A-Za-z\u00F1 ]+"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="off"
                      required
                      className="w-full border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Repeat email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                      className="w-full border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      onChange={handleConfirmEmailChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="dni"
                    className="block text-sm font-medium text-gray-700"
                  >
                    DNI
                  </label>
                  <div className="mt-1">
                    <input
                      id="dni"
                      name="dni"
                      type="text"
                      autoComplete="off"
                      required
                      className="w-full border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                      pattern="[0-9]+"
                      maxLength="8"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      autoComplete="off"
                      required
                      className="w-full border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                      pattern="[0-9]+"
                      maxLength="10"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="off"
                      required
                      className="w-full border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center  border border-transparent rounded-md  text-sm  focus:outline-none  bg-cyan-600 px-3 py-2 text-md font-semibold text-white shadow-sm  hover:bg-cyan-500 hover:text-white outline-cyan-600"
                  >
                    Confirm Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
