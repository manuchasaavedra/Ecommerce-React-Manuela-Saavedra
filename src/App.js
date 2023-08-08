import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer saludo = {"Bienvenidos a Indolfo Almacen"} />
    </div>
  );
}

export default App;
