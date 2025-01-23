import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    //early return o retorno temprano

    //! armar en un componenten distinto esto de abajo

    if (cart.length === 0) {
        return (
            <div>
                <h2>Carrito vacio</h2>
                <Link to="/">Volver al inicio</Link>
            </div>

        )
    }
    return (
        <div>
            <ul>
                {
                    cart.map((productCart) => (
                        <li key={productCart.id}>
                            <p>{productCart.name}</p>
                            <img src={productCart.image[0]} width={100} alt="" />
                            <p>cantidad: {productCart.quantity}</p>
                            <p>precio unitario: {productCart.price}</p>
                            <p>subtotal: ${productCart.price * productCart.quantity}</p>
                            <button onClick={() => deleteProductById(productCart.id)}>eliminar</button>

                            {/* implementar un subtotal!!!! */}
                        </li>
                    ))
                }
            </ul>
            {/* se muestra el precio total si no hay nada en 0, ver  de sacarlo!!!! */}

            <h3>Total: {totalPrice()}</h3>
            <Link to="/checkout">continuar con mi compra</Link>
            <button onClick={deleteCart}>vaciar carrito</button>
        </div>

    )
}

export default Cart