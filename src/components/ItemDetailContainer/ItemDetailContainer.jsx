
import ItemDetail from "./ItemDetail.jsx"
import Spinner from "../Spinner/Spinner.jsx"
import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const { idProduct } = useParams()

  const [loading, setLoading] = useState(false)


  useEffect(()=> {

    setLoading(true)

    getProducts()
      .then( (data) => {
        const productFind = data.find( (dataProduct) => dataProduct.id === idProduct )
        setProduct(productFind)
      })

      .finally( ()=>{
        setLoading(false)
      }

      ) 
        
    

  }, [])

  return (
    <>
    {
      loading === true ? (<Spinner />) : (<ItemDetail product={product} />)
    }
     
    </>
   
  )
}
export default ItemDetailContainer