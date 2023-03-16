import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";

const ItemList = ({ prods, template }) => {
  const { emptyCart } = useCartContext();
  // Este componente muestra segun el templete seleccionado el componente correspondiente
  return (
    <div className="max-w-screen-lg mx-auto">
      {template === "Item" ? (
        <div className="flex flex-wrap justify-center lg: gap-24">
          {prods.map((product) => (
            <Item item={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col justify-center gap-4 p-6
          w-full shadow-md "
        >
          {prods.map((product, index) => (
            <ItemCart
              item={product}
              key={product.id}
              isLast={index === prods.length - 1}
            />
          ))}

          <div className="inline-flex justify-center border-t pt-4">
            <Link>
              <button
                type="button"
                className="font-bold text-base text-red-600 hover:text-red-400 hover:underline focus:outline-none"
                onClick={() => emptyCart()}
              >
                Remove All
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
