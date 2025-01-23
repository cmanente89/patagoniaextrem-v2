import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {



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
      <h1 className="text-4xl p-10 font-bold flex items-center justify-center">Paquete {product.name}</h1>
      <div className="item-detail flex flex-row items-start justify-center space-x-8 max-w-6xl mx-auto m-8">

        <div className="images-detail-container flex flex-row items-start space-x-8 m-8">
          <div className="secondary-images flex flex-col space-y-8 m-8">
            {
              secondaryImages.map((image) => (
                <img src={image} key={image} onClick={() => setMainImage(image)} className="w-24 h-24 object-cover cursor-pointer m-4" />
              ))
            }
          </div>
          <div className="main-image flex justify-center items-center m-8">
            <img src={mainImage} alt="" className="w-72 h-72 object-cover" />
          </div>
        </div>

        <div className="text-detail-container flex flex-col space-y-8 m-8">
          <h2 className="title-detail text-2xl font-bold">{product.name}</h2>
          <p className="text-detail text-base">{product.description}</p>
          <p className="text-detail text-lg font-semibold">Precio: ${product.price}</p>

          <div className="flex flex-row space-x-4">
            {
              showItemCount === true ? (
                <ItemCount capacity={product.capacity} addProductInCart={addProductInCart} />
              ) : (
                <Link to="/cart" className="text-blue-500 underline">Terminar mi compra</Link>
              )
            }
          </div>
        </div>
      </div>
    </>







  )
}
export default ItemDetail