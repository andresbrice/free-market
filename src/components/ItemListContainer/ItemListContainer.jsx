// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Firebase
import { getProducts, getCategories } from "../../utils/firebase";

// Funcions
import { scrollTop } from "../../utils/functions";

// Components
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);

  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (categoryName) {
      getCategories().then((categories) => {
        const category = categories.filter(
          (cat) => cat.categoryName === categoryName
        );

        const idCategory = category[0].id;

        getProducts().then((products) => {
          const prods = products
            .filter((prod) => prod.stock > 0)
            .filter((prod) => prod.idCategory === parseInt(idCategory));
          const items = <ItemList prods={prods} template="Item" />;
          setProducts(items);
          setIsLoading(false);
          setIsProductsLoaded(true);
        });
      });
    } else {
      getProducts().then((products) => {
        const prods = products.filter((prod) => prod.stock > 0);
        const items = <ItemList prods={prods} template="Item" />;
        setProducts(items);
        setIsLoading(false);
        setIsProductsLoaded(true);
      });
    }
  }, [categoryName]);
  return (
    <>
      <Loader isLoading={isLoading} isProductsLoaded={isProductsLoaded} />{" "}
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap">{products}</div>
      </div>
    </>
  );
};

export default ItemListContainer;
