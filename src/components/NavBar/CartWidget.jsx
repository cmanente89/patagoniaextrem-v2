
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <div className="flex flex-row space-x-3">
      <IoCartOutline className="text-3xl" />
      <p className="text-3xl">0</p>
    </div>
  )
}

export default CartWidget