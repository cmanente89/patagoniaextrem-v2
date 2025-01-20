import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProduct = (newProduct) => {
        const index = cart.findIndex((productCart) => productCart.id === newProduct.id)
        console.log(index)
        if (index === -1) {
            //agrego el producto como nuevo
            setCart([...cart, newProduct])


        } else {
            //modifico solamente la cantidad del producto
            const newCart = [...cart]
            newCart[index].quantity = newCart[index].quantity + newProduct.quantity
            //!reformar con sugar syntax
            setCart(newCart)
        }





    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
        return price
    }


    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
        setCart(filterProducts)

    }

    const deleteCart = () => {
        setCart([])
    }




    return (
        <CartContext.Provider value={{ cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }