import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import Checkout from './components/Checkout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';


function App() {
  const greeting = () => NavBar.appendChild(ItemListContainer)

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">

          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting} />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/*' element={<Navigate to='/' replace />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
