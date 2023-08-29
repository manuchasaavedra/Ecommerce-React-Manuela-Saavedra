import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
     <NavBar />
    
     <Routes>
      <Route path='/' element = {<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element = {<ItemListContainer/>}/>
      <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
      <Route path='*' element = {<h1>404 NOT FOUND</h1>}/>
     </Routes>
    </div>
  );
}

export default App;