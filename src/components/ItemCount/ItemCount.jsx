import { useState } from "react";

const ItemCount = ({ initialValue, stock, onAdd }) => {
  // Componente que renderiza un contador para asignar la cantidad de items que se adheriran al carrito. Pudiendo incrementar o decrementar el valor
  const [counter, setCounter] = useState(initialValue);

  const add = () => counter < stock && setCounter(counter + 1);
  const substract = () => counter > initialValue && setCounter(counter - 1);

  return (
    <div className="flex gap-4 font-bold">
      <div className=" flex items-center justify-between rounded-md bg-gray-200 py-2 px-5 pb-3 space-x-3 w-full">
        <button
          className="text-xl text-gray-800 hover:text-gray-400 outline-none"
          onClick={() => substract()}
        >
          -
        </button>
        <span className="text-xl ">{counter}</span>
        <button
          className="text-xl text-gray-800 hover:text-gray-400 outline-none "
          onClick={() => add()}
        >
          +
        </button>
      </div>
      <button
        type="button"
        className=" w-full rounded-md bg-transparent border border-gray-900 text-gray-900 px-3 py-2 text-md font-semibold  shadow-sm  hover:bg-gray-800 hover:text-white focus:outline-none "
        onClick={() => onAdd(counter)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCount;
