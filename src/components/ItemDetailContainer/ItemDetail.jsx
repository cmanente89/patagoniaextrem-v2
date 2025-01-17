import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetail = ({ product }) => {

//!   Use optional chaining (?.) to safely access the image property and its elements:

//! JavaScript

// !const [mainImage, setMainImage] = useState(product?.image?.[1] || ''); 
// !This will prevent the error if product or product.image is undefined. The || '' provides a default value for mainImage if product.image[1] is undefined.

  const [mainImage, setMainImage] = useState(product?.image?.[1] || '');

  const secondaryImages = product?.image?.filter((image, index) => index !== 1) || [];

  const { addProduct } =useContext(CartContext)

  const addProductInCart = (count) =>{
    const productCart = { ...product, quantity: count}
     
    addProduct(productCart)

  }
    return (
      <>
      <h1 className="text-7xl p-40 font-bold flex items-center justify-center">Paquete {product.name}</h1>
      <div className="item-detail">
        
        <div className="images-detail-container">
          <div className="secondary-images">
            {
              secondaryImages.map((image)=>(
                //ver de hacerlo con el evento "onMouseEnter" con algun delay
                <img src={image} key={image} onClick={()=>setMainImage(image)} />
              ))
            }
          </div>
          <div className="main-image">
            <img src={mainImage} alt="" />
          </div>
        </div>
  
        <div className="text-detail-container">
          <h2 className="title-detail">{product.name}</h2>
          <p className="text-detail">{product.description}</p>
          <p className="text-detail">Precio: ${product.price}</p>
          <ItemCount capacity={product.capacity} addProductInCart={addProductInCart} />
        </div>
      </div>
      </>
      
    )
  }
  export default ItemDetail