import ItemDetail from "./ItemDetail.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); // Establecer el producto inicial a null
  const { idProduct } = useParams();
  const [loading, setLoading] = useState(true); // Establecer la carga inicial a true

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data); // Actualizar el estado con el producto obtenido
      } else {
        console.log("¡No existe tal producto!");
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Asegurarse de que la carga se establezca en false, haya o no un error
    }
  };

  useEffect(() => {
    setLoading(true); // Establecer la carga a true cuando cambia el ID
    getProduct(); // Obtener el producto por ID

  }, [idProduct]); // Ejecutar useEffect cuando cambia idProduct

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        product && <ItemDetail product={product} /> // Asegurarse de que el producto esté disponible antes de renderizar ItemDetail
      )}
    </>
  );
};

export default ItemDetailContainer;
