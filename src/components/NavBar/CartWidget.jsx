import React from 'react'
import { Link } from 'react-router-dom';
import Carrito from './Carrito.png'
import './NavBar.css'

function CartWidget() {
  return (
    <div>
      <Link to="/cart"> <img className='cart' src={Carrito} alt='' /></Link>
    </div>
  )
}

export default CartWidget;