import React from 'react'
import { useCartContext } from '../context/CartContext'
import '../App.css';

const Cart = () => {
  const { cartList, vaciarCart } = useCartContext()
  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartList.map(
        item => <div className='cartitem'>{item.name} Cantidad: {item.cantidad} Precio: {item.price} {<img className='cartimg' src={item.foto} alt=''></img>}</div>,
      )}
      <button onClick={vaciarCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart