
import ItemList from "./ItemList.jsx"
import { getProducts } from "../../data/data.js"
import "./ItemListContainer.css"

import { useState, useEffect } from "react"


import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (idCategory) {
          //filtrar la data por ese valor
          const filterProducts = data.filter((product) => product.category === idCategory)
          setProducts(filterProducts)
        } else {
          //guardar toda la lista de los productos
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("termino la promesa")
      })
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <h1 className="text-7xl p-40 font-bold flex items-center justify-center"> {greeting} </h1>
      <ItemList products={products} />


    </div>
  )
}

export default ItemListContainer