import { useState } from 'react'
import React from 'react'

const ItemCount = ( {capacity }) => {
    const [count, setCount] = useState(1);

    const handleRemove = () => {
        if(count > 1){
            setCount(count - 1);
            
        }
    }

    const handleAdd = () => {
        if(count < capacity){
            setCount(count + 1)

        }
    }

  return (
    <div>
        <button onClick={handleRemove}>-</button>
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>

    </div>
  )
}

export default ItemCount