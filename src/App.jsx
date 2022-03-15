import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const greeting = () => NavBar.appendChild(ItemListContainer)

  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={greeting} />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/*' element={<Navigate to='/' replace />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
