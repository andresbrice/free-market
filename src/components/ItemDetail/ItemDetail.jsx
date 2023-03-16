import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { scrollTop } from "../../utils/functions";

import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";

const ItemDetail = ({ prod }) => {
  // El componente retorna el componente loader en caso que se este cargando el producto y sino muestra la card con el producto seleccionado
  const { addItem } = useCartContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const onAdd = (quantity) => {
    addItem(prod, quantity);
  };

  useEffect(() => {
    scrollTop();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={prod.img}
              alt={prod.name}
              className="h-full w-full object-cover rounded-t-xl rounded-b-xl md:rounded-r-none"
            />
          </div>
          <div className="px-6 py-4 md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {prod.name}
            </h2>
            <p className="text-gray-700 text-base mb-4">{prod.description}</p>
            <p className="text-gray-700 text-base mb-4">Stock: {prod.stock}</p>
            <p className="text-gray-700 text-base font-bold mb-2">
              Price: ${new Intl.NumberFormat("de-DE").format(prod.price)}
            </p>
            <ItemCount initialValue={1} stock={prod.stock} onAdd={onAdd} />
            <div className="flex w-full gap-3 justify-center items-center">
              <Link to={"/cart"} className="w-full">
                <button
                  type="button"
                  className=" w-full rounded-md bg-cyan-600 px-3 py-2 text-md font-semibold text-white shadow-sm  hover:bg-cyan-500 hover:text-white focus:outline-none mt-3 "
                >
                  Purchase
                </button>
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <button
                type="button"
                className="font-medium text-gray-600 hover:text-gray-500 focus:outline-none"
                onClick={() => navigate(-1)}
              >
                Or continue Shopping
                <span aria-hidden="true"> →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
