//HOOKS
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";
// FIREBASE
import { getProduct } from "../../utils/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id).then((prod) => {
      if (prod === null) {
        navigate("/not-found");
      } else {
        setProduct(prod);
      }
    });
  }, [id]);
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-4xl lg:px-0 mt-10">
      <ItemDetail prod={product} />
    </div>
  );
};

export default ItemDetailContainer;
