
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <CartProvider>



          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a PatagoniaExtrem."} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a PatagoniaExtrem."} />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />


          </Routes>


        </CartProvider>
      </BrowserRouter>


    </>
  )
}

export default App
