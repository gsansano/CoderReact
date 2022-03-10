import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/NavBar/CartWidget';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const greeting = () => NavBar.appendChild(ItemListContainer)


  return (
    <div className="App">
      <NavBar>
        <CartWidget />
      </NavBar>
      <div id="saludo">Bienvenido a la tienda online del Estudio</div>
      <ItemListContainer greeting={greeting} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
