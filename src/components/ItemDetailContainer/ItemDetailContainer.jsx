import ItemDetail from "./ItemDetail.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); // Set initial product to null
  const { idProduct } = useParams();
  const [loading, setLoading] = useState(true); // Set initial loading to true

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data); // Update the state with the fetched product
      } else {
        console.log("No such product!");
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Ensure loading is set to false whether there's an error or not
    }
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when the ID changes
    getProduct(); // Fetch the product by ID

  }, [idProduct]); // Trigger useEffect when idProduct changes

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        product && <ItemDetail product={product} /> // Ensure product is available before rendering ItemDetail
      )}
    </>
  );
};

export default ItemDetailContainer;