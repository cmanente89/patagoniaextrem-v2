import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import ItemDetail from "./ItemDetail.jsx"; // Asegúrate de importar esto
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); // Establecer el producto inicial a null
  const [loading, setLoading] = useState(true); // Establecer la carga inicial a true
  const [validProduct, setValidProduct] = useState(true); // Estado para validar el producto
  const { idProduct } = useParams();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data); // Actualizar el estado con el producto obtenido
      } else {
        console.log("¡No existe tal producto!");
        setValidProduct(false); // Establecer el producto como no válido
      }
    } catch (error) {
      console.log(error);
      setValidProduct(false); // Establecer el producto como no válido en caso de error
    } finally {
      setLoading(false); // Asegurarse de que la carga se establezca en false, haya o no un error
    }
  };

  useEffect(() => {
    setLoading(true); // Establecer la carga a true cuando cambia el ID
    setValidProduct(true); // Restablecer el estado de producto válido
    getProduct(); // Obtener el producto por ID
  }, [idProduct]); // Ejecutar useEffect cuando cambia idProduct

  if (loading) {
    return <Spinner />; // Mostrar spinner mientras se carga
  }

  if (!validProduct) {
    return <NotFound />; // Mostrar NotFound si el producto no es válido
  }

  return (
    <>
      {product && <ItemDetail product={product} />} {/* Asegúrate de que el producto esté disponible antes de renderizar ItemDetail */}
    </>
  );
};

export default ItemDetailContainer;
