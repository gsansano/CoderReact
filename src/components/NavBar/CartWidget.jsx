import React from 'react'
import { Link } from 'react-router-dom';
import Carrito from './cart.svg'
import { useCartContext } from '../../context/CartContext';


function CartWidget() {
  const { cantidadItem } = useCartContext()

  return (
    <>
      <Link to="/cart"> <img width={"40px"} src={Carrito} alt='' />
      {cantidadItem() !== 0 ? <span className="badge bg-danger">{cantidadItem()}</span> : ""}
      </Link>
    </>
  )
}

export default CartWidget;