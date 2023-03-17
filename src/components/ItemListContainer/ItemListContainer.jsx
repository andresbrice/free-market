// Hooks
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Firebase
import { getProducts, getCategories } from "../../utils/firebase";

// Funcions

// Components
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  // Este componente es donde se renderiza la pagina principal. Tiene la logica suficiente para saber si se debe mostrar toda la coleccion de productos o solo los de la categoria indicada
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (categoryName) {
      getCategories().then((categories) => {
        const category = categories.filter(
          (cat) => cat.categoryName === categoryName
        );

        if (category.length === 0) {
          navigate("/not-found");
        }

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
