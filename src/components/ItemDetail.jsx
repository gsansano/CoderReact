import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({ producto }) => {
    const [count, setCount] = useState(null)
    
    const { agregarCart, cartList, isInCart} = useCartContext()
    
    const onAdd = (cant) => {
        setCount (cant)
        agregarCart({...producto, cantidad:cant})
    }   
    console.log(cartList)

    return (
        <>
            <h3>Detalle del servicio</h3>
            <img src={producto.foto} alt=''></img>
            <div className='detalle'>El servicio de {producto.name} consiste en la elaboración de una comunicación formal mediante correo postal que puede usarse para intimar y/o notificar fehacientemente a una persona de interés del cliente.</div>
            <div>Precio: {producto.price}</div>
            
            {
            (count || isInCart(producto.id))
            ?  
            <Link to="/Cart">
            <button className='btn btn-primary'>Terminar compra</button>
            </Link>
            :
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
    }
            </>
    )
}

export default ItemDetail