import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

//   const { idProduct } = useParams()

  useEffect(()=> {

    getProducts()
      .then( (data) => {
        const productFind = data.find( (dataProduct) => dataProduct.id === "paq001" )
        setProduct(productFind)
      })

  }, [])

  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer