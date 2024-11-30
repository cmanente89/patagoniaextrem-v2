
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />    
      <ItemListContainer greeting={"Bienvenidos a PatagoniaExtrem."}   />
    </>
  )
}

export default App
