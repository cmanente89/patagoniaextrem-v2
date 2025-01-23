import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"))
    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : [])

    useEffect(() => {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart))
    }, [cart])

    const addProduct = (newProduct) => {
        const index = cart.findIndex((productCart) => productCart.id === newProduct.id)
        if (index === -1) {
            setCart([...cart, newProduct]) // Agrego el producto como nuevo
        } else {
            setCart(cart.map((productCart, i) =>
                i === index ? { ...productCart, quantity: productCart.quantity + newProduct.quantity } : productCart
            )) // Modifico solamente la cantidad del producto usando sugar syntax
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
