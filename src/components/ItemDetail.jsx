import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import ItemCount from './ItemCount';


const ItemDetail = ({ producto }) => {
    const [count, setCount] = useState(null)
    const onAdd = (cant) => {
        console.log(cant)
        setCount (cant)
    }   
    return (
        <>
            <h3>Detalle del servicio</h3>
            <img src={producto.foto} alt=''></img>
            <div className='detalle'>El servicio de {producto.name} consiste en la elaboración de una comunicación formal mediante correo postal que puede usarse para intimar y/o notificar fehacientemente a una persona de interés del cliente.</div>
            <div>Precio: {producto.price}</div>
            {count ?  
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