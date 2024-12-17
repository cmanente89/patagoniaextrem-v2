
import ItemList from "./ItemList.jsx"
import Spinner from "../Spinner/Spinner.jsx"


import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(false)

  const { idCategory } = useParams()

  useEffect(() => {

    setLoading(true)

    getProducts()
      .then((data) => {
        if (idCategory) {
          //filtrar la data por ese valor y guarda en la variable de estado solo los prod filtrados
          const filterProducts = data.filter((product) => product.category === idCategory)
          setProducts(filterProducts)
        } else {
          //guarda en la variable de estado todos los productos
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        // console.log("termino la promesa")
        setLoading(false)
      })
  }, [idCategory])
  // si idCategory cambia el array lo detecta y ejecuta el código nuevamente


  return (
    <div className="itemlistcontainer">
      <h1 className="text-7xl p-40 font-bold flex items-center justify-center"> {greeting} </h1>
      {
      loading === true ? (<Spinner />) : (<ItemList products={products} />)
      }


    </div>
  )
}

export default ItemListContainer