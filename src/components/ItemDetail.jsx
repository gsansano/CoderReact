import React from 'react'
import '../App.css'

const ItemDetail = ({ producto }) => {
    return (
        <>
            <h3>Detalle del servicio</h3>
            <img src={producto.foto} alt=''></img>
            <div className='detalle'>El servicio de {producto.name} consiste en la elaboración de una comunicación formal mediante correo postal que puede usarse para intimar y/o notificar fehacientemente a una persona de interés del cliente.</div>
            <div>Precio: {producto.price}</div>
        </>
    )
}

export default ItemDetail