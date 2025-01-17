
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <CartContext>



      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a PatagoniaExtrem."} /> }/>
        <Route path="/category/:idCategory" element={ <ItemListContainer greeting={"Bienvenidos a PatagoniaExtrem."} /> } />
         <Route path="/detail/:idProduct" element= {<ItemDetailContainer />} />

      </Routes>    
 

    </CartContext>
    </BrowserRouter>

      
    </>
  )
}

export default App
