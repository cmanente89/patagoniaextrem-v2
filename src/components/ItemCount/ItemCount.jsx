import { useState } from 'react'
import React from 'react'

const ItemCount = ({ capacity, addProductInCart }) => {
    const [count, setCount] = useState(1);

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1);

        }
    }

    const handleAdd = () => {
        if (count < capacity) {
            setCount(count + 1)

        }
    }

    return (
        <div className="flex flex-row items-center justify-center space-x-4 p-4 bg-gray-100 rounded-md">
            <button className="text-xl p-2 bg-gray-500 text-white font-bold rounded" onClick={handleRemove}>-</button>
            <p className="text-xl font-bold">{count}</p>
            <button className="text-xl p-2 bg-gray-500 text-white font-bold rounded" onClick={handleAdd}>+</button>
            <button className="text-xl p-2 bg-gray-700 text-white font-bold rounded" onClick={() => addProductInCart(count)}>Agregar Paquete</button>
        </div>


    )
}

export default ItemCount
