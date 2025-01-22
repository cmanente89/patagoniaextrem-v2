import ItemList from "./ItemList.jsx";
import Spinner from "../Spinner/Spinner.jsx";

import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();
  const collectionName = collection(db, "products");

  // Fetch all products
  const getProducts = async () => {
    try {
      const dataDb = await getDocs(collectionName);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      console.log(data);
      setProducts(data); // Update state with all products
      setLoading(false); // Hide loading spinner after data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Hide loading spinner if an error occurs
    }
  };

  // Fetch products filtered by category
  const getProductsByCategory = async () => {
    try {
      const q = query(collectionName, where("category", "==", idCategory));
      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      console.log(data);
      setProducts(data); // Update state with filtered products
      setLoading(false); // Hide loading spinner after data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Hide loading spinner if an error occurs
    }
  };

  useEffect(() => {
    setLoading(true); // Show loading spinner before fetching data
    if (idCategory) {
      getProductsByCategory(); // Fetch products filtered by category if idCategory exists
    } else {
      getProducts(); // Fetch all products if no idCategory is provided
    }
  }, [idCategory]); // Re-run effect when idCategory changes

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