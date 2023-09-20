import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/CartProvider';
import Cart from './components/Cart/Cart'
import Checkout from './components/CheckOut/Checkout';

function App() {
  return (
    <CartProvider>
     <NavBar />
     <Routes>
      <Route path='/' element = {<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element = {<ItemListContainer/>}/>
      <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>} />
      <Route path='*' element = {<h1>404 NOT FOUND</h1>}/>
     </Routes>
    </CartProvider>
  );
}

export default App;
