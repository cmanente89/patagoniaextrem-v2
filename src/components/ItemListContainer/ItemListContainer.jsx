import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [validCategory, setValidCategory] = useState(true);
  const { idCategory } = useParams();
  const navigate = useNavigate();
  const collectionName = collection(db, "products");

  // Obtener todos los productos
  const getProducts = async () => {
    try {
      const dataDb = await getDocs(collectionName);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      console.log(data);
      setProducts(data); // Actualizar el estado con todos los productos
      setLoading(false); // Ocultar el spinner de carga después de obtener los datos
    } catch (error) {
      console.log(error);
      setLoading(false); // Ocultar el spinner de carga si ocurre un error
    }
  };

  // Obtener productos filtrados por categoría
  const getProductsByCategory = async () => {
    try {
      const q = query(collectionName, where("category", "==", idCategory));
      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      console.log(data);
      if (data.length === 0) {
        setValidCategory(false);
      } else {
        setProducts(data); // Actualizar el estado con productos filtrados
        setLoading(false); // Ocultar el spinner de carga después de obtener los datos
      }
    } catch (error) {
      console.log(error);
      setLoading(false); // Ocultar el spinner de carga si ocurre un error
    }
  };

  useEffect(() => {
    setLoading(true); // Mostrar el spinner de carga antes de obtener los datos
    setValidCategory(true); // Resetear el estado de categoría válida

    if (idCategory) {
      getProductsByCategory(); // Obtener productos filtrados por categoría si existe idCategory
    } else {
      getProducts(); // Obtener todos los productos si no se proporciona idCategory
    }
  }, [idCategory]); // Volver a ejecutar el efecto cuando cambia idCategory

  if (!validCategory) {
    return <NotFound />;
  }

  return (
    <div className="itemlistcontainer">
      <h1 className="text-7xl p-40 font-bold flex items-center justify-center">
        {greeting}
      </h1>
      {loading ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
