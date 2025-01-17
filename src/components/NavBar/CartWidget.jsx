
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";


const CartWidget = () => {

  const { totalQuantity} = useContext(CartContext)

  return (
    <Link to="/cart" className="flex flex-row space-x-3">
      <IoCartOutline className="text-3xl" />
      <p className="text-3xl">{ totalQuantity() }</p>

    </Link>
  )
}

export default CartWidget