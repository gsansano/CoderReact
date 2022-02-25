import './App.css';
import CartWidget from './components/NavBar/CartWidget';
import NavBar from './components/NavBar/NavBar';

function App() {
  const greeting = () => NavBar.appendChild(ItemListContainer)

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
    </div>
  );
}

export default App;
