import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {

    const {cart, totalPrice} = useContext(CartContext)
  return (
    <div>
        <ul>
            {
                cart.map( (productCart)=>(
                    <li key={productCart.id}>
                        <p>{productCart.name}</p>
                        <img src={productCart.image[0]} width={100} alt="" />
                        <p>cantidad: {productCart.quantity}</p>
                        <p>precio unitario: {productCart.price}</p>
                        {/* implementar un subtotal!!!! */}
                    </li> 
                ))
            }
        </ul>
        {/* se muestra el precio total si no hay nada en 0, ver  de sacarlo!!!! */}
        
        <h3>Total: {totalPrice()}</h3>
    </div>
    
  )
}

export default Cart