import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    //early return o retorno temprano


    if (cart.length === 0) {
        return (
            <div className="max-w-lg mx-auto p-12 border border-gray-300 rounded-md bg-gray-50 mt-12 text-center">
                <div className="flex flex-col justify-around items-center space-x-6">
                    <h2 className="text-2xl font-bold text-gray-700">Carrito vacío</h2>
                    <Link to="/" className="text-base font-bold text-gray-700 bg-gray-200 p-3 rounded hover:bg-gray-300">
                        Volver al inicio
                    </Link>
                </div>
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
                            <p className="text-base text-gray-700">Precio unitario:  ${productCart.price}</p>
                            <p className="text-base text-gray-700">Subtotal:  ${productCart.price * productCart.quantity}</p>
                            <button onClick={() => deleteProductById(productCart.id)} className="text-base text-gray-700 bg-gray-200 p-2 rounded hover:bg-gray-300">Eliminar</button>
                        </li>
                    ))
                }
            </ul>

            <div className="max-w-lg mx-auto p-8 border border-gray-300 rounded-md bg-gray-50 mt-12 text-center space-y-4">
                <h3 className="text-xl font-bold text-gray-700 mt-8">Total: ${totalPrice()}</h3>
                <div className="flex justify-around mt-8">
                    <Link to="/checkout" className="text-base font-bold text-gray-700 bg-gray-300 p-3 rounded-md hover:bg-gray-400 inline-block">
                        Finalizar compra
                    </Link>
                    <button onClick={deleteCart} className="text-base font-bold text-gray-700 bg-gray-300 p-3 rounded-md hover:bg-gray-400">
                        Vaciar carrito
                    </button>
                </div>
            </div>




        </div>



    )
}

export default Cart