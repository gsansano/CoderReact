import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useCartContext } from '../context/CartContext';

const vaciarCart = useCartContext;

function Checkout({idOrden}) {
  return <div className='checkout'>
    Muchas gracias por tu compra! <br/>
    El identificador de tu orden es: <strong>{idOrden}</strong> <br/>
    <Link to="/" className="btn btn-info" onClick={vaciarCart}>Seguir comprando</Link>
  </div>;
}

export default Checkout;
