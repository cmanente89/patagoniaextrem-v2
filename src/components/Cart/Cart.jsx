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
        <div className="max-w-4xl mx-auto p-8">
            <ul className="space-y-6">
                {
                    cart.map((productCart) => (
                        <li key={productCart.id} className="flex flex-row items-center space-x-6 p-4 border border-gray-300 rounded-md bg-gray-50">
                            <p className="text-base font-bold text-gray-700">{productCart.name}</p>
                            <img src={productCart.image[0]} width={100} alt="" className="rounded-md" />
                            <p className="text-base text-gray-700">Cantidad: {productCart.quantity}</p>
                            <p className="text-base text-gray-700">Precio unitario: {productCart.price}</p>
                            <p className="text-base text-gray-700">Subtotal: ${productCart.price * productCart.quantity}</p>
                            <button onClick={() => deleteProductById(productCart.id)} className="text-base text-gray-700 bg-gray-200 p-2 rounded hover:bg-gray-300">Eliminar</button>
                        </li>
                    ))
                }
            </ul>

            <h3 className="text-xl font-bold text-gray-700 mt-8">Total: {totalPrice()}</h3>
            <Link to="/checkout" className="text-blue-500 underline block mt-4">Continuar con mi compra</Link>
            <button onClick={deleteCart} className="text-base text-gray-700 bg-gray-200 p-2 rounded hover:bg-gray-300 mt-4">Vaciar carrito</button>
        </div>



    )
}

export default Cart