import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

  //!   Use optional chaining (?.) to safely access the image property and its elements:

  //! JavaScript

  // !const [mainImage, setMainImage] = useState(product?.image?.[1] || ''); 
  // !This will prevent the error if product or product.image is undefined. The || '' provides a default value for mainImage if product.image[1] is undefined.

  const [mainImage, setMainImage] = useState(product?.image?.[1] || '');

  const secondaryImages = product?.image?.filter((image, index) => index !== 1) || [];

  //rendering condicional, con un estado que controla si se muestra o no el componente ItemCount:
  const [showItemCount, setShowItemCount] = useState(true)



  const { addProduct } = useContext(CartContext)

  //producto que se añade al carrito

  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count }

    addProduct(productCart)
    // cambiamos el estado y se deja de mostrar ItemCount
    setShowItemCount(false)

  }
  return (
    <>
      <h1 className="text-7xl p-40 font-bold flex items-center justify-center">Paquete {product.name}</h1>
      <div className="item-detail">

        <div className="images-detail-container">
          <div className="secondary-images">
            {
              secondaryImages.map((image) => (
                //ver de hacerlo con el evento "onMouseEnter" con algun delay
                <img src={image} key={image} onClick={() => setMainImage(image)} />
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

          {
            showItemCount === true ? (
              <ItemCount capacity={product.capacity} addProductInCart={addProductInCart} />

            ) : (
              <Link to="/cart">Terminar mi compra</Link>
            )
          }
        </div>
      </div>
    </>

  )
}
export default ItemDetail