import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ item, isLast }) => {
  const { removeItem } = useCartContext();
  // template de los items del carrito
  return (
    <>
      <li className={`flex py-6 ${isLast ? "" : "border-b border-gray-200"}`}>
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <div className="flex flex-col items-end gap-2">
                <p className="ml-4">{`Unit Price: $${new Intl.NumberFormat(
                  "de-DE"
                ).format(item.price)}`}</p>
                <p className="ml-4">{`Subtotal: $${new Intl.NumberFormat(
                  "de-DE"
                ).format(item.price * item.quantity)}`}</p>
              </div>
            </div>
          </div>
          {console.log(
            new Intl.NumberFormat("de-DE").format(item.price * item.quantity)
          )}
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">{`Quantity: ${item.quantity}`}</p>
            <div className="flex">
              <button
                type="button"
                className="font-large text-red-600 hover:text-red-400 hover:underline focus:outline-none"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ItemCart;
