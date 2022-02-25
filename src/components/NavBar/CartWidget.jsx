import React from 'react'
import Carrito from './Carrito.png'
import './NavBar.css'

function CartWidget() {
  return (
     <div>
        <img className='cart' src={Carrito} alt='' />
    </div>
  )
}

export default CartWidget;