import React from 'react'
import { useCartContext } from '../context/CartContext'
import '../App.css';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cartList, vaciarCart, quitarProd, precioTotal } = useCartContext()


  const msgCond = (
    <div>
      <p>
        Tu carrito está vacío! Y eso no está nada bien...
      </p>
      <p>
        <Link to="/" className="btn btn-primary">
          Ir a comprar
        </Link>
      </p>
    </div>
  )



  return (
    
    <div>
      <h2>Carrito de compras</h2>
      {cartList.length === 0 ? (msgCond) : (
        cartList.map(
          prod => <div className='cartitem'>{prod.name} Cantidad: {prod.cantidad} {<img className='cartimg' src={prod.foto} alt=''></img>} <button onClick={() => { quitarProd(prod) }}>Eliminar producto</button> </div>,
        ))}
      <h2>Precio total: ${precioTotal()}</h2>
      <button className="btn btn-secondary" onClick={vaciarCart}>Vaciar Carrito</button><Link to="/" className="btn btn-primary">Seguir comprando</Link>
    </div>
  )
}

export default Cart