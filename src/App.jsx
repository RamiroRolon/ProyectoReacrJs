import './App.css'
import { NavBar } from './assets/NavBar/NavBar'
import { ItemListContainer as Home } from './assets/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <div>
      <NavBar/>
      <Home greeting="Saludo"/>
    </div>
    </>
  )
}
export default App;