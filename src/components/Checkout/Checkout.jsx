import React, { useEffect, useRef, useState } from "react";
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
import Input from "../Input/Input";

const Checkout = () => {
  const MySwal = withReactContent(Swal);
  const { cart, emptyCart, totalPrice } = useCartContext();
  let nav = useNavigate();
  const formData = useRef();
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [dni, setDni] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(true);

  // Funciones para manejar los cambios de los input
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleConfirmEmailChange(e) {
    setConfirmEmail(e.target.value);
  }

  function handleFullNameChange(e) {
    setFullName(e.target.value);
  }

  function handleDniChange(e) {
    setDni(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  // En caso que los input esten llenos habilito el boton de checkout
  useEffect(() => {
    setDisabled(
      !(fullName && email && confirmEmail && dni && phoneNumber && address)
    );
  }, [fullName, email, confirmEmail, dni, phoneNumber, address]);

  const consultarForm = (e) => {
    // Funcion para consultar el form y manipular su información
    e.preventDefault();

    const data = new FormData(formData.current);

    const client = Object.fromEntries(data);
    console.log(client.fullName);

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
          confirmButtonColor: "#0891b2",
          confirmButtonText: "Go to Homepage",
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
        <div className="container mx-auto">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
              <form
                className="mb-0 space-y-6"
                onSubmit={consultarForm}
                ref={formData}
              >
                <Input
                  label="Full Name"
                  htmlFor="fullName"
                  id="fullName"
                  name="fullName"
                  type="text"
                  pattern="[A-Za-z\u00F1 ]+"
                  onChange={handleFullNameChange}
                />
                <Input
                  label="Email"
                  htmlFor="email"
                  id="email"
                  name="email"
                  type="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  onChange={handleEmailChange}
                />
                <Input
                  label="Confirm email"
                  htmlFor="confirmEmail"
                  id="email"
                  name="email"
                  type="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  onChange={handleConfirmEmailChange}
                />
                <Input
                  label="DNI"
                  htmlFor="dni"
                  id="dni"
                  name="dni"
                  type="text"
                  pattern="[0-9]+"
                  maxLength="8"
                  onChange={handleDniChange}
                />
                <Input
                  label="Phone Number"
                  htmlFor="phoneNumber"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  pattern="[0-9]+"
                  maxLength="10"
                  onChange={handlePhoneNumberChange}
                />
                <Input
                  label="Address"
                  htmlFor="address"
                  id="address"
                  name="address"
                  type="text"
                  onChange={handleAddressChange}
                />

                <div>
                  <button
                    type="submit"
                    className={`w-full flex justify-center  border border-transparent rounded-md  text-sm  focus:outline-none   px-3 py-2 text-md font-semibold text-white shadow-sm  ${
                      !disabled
                        ? "bg-cyan-600 hover:bg-cyan-500 hover:text-white"
                        : "bg-gray-400 disabled:cursor-not-allowed"
                    }`}
                    disabled={disabled ? "disabled" : ""}
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
