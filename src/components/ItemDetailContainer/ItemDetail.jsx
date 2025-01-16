import { useState } from "react"

const ItemDetail = ({ product }) => {

  const [mainImage, setMainImage] = useState(product.image[0])

  const secondaryImages = product.image.filter((image)=> image !== mainImage)
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
        </div>
      </div>
      </>
      
    )
  }
  export default ItemDetail