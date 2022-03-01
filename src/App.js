import './App.css';
import ItemCount from './components/ItemCount';
import CartWidget from './components/NavBar/CartWidget';
import NavBar from './components/NavBar/NavBar';

function App() {
  const greeting = () => NavBar.appendChild(ItemListContainer)
  const onAdd = (cant) => {
    console.log(cant) 
 }

  function ItemListContainer() {
    
    return (
      <div id="saludo">Bienvenido a la tienda online del Estudio</div>
    )
    
  }

  return (
    <div className="App"> 
      <NavBar>
      <CartWidget /> 
      </NavBar>
    <ItemListContainer greeting={greeting} />
    <ItemCount initial={1} stock= {10} onAdd= {onAdd} />
    </div>
  );
}

export default App;
