import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import { useCartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({ producto }) => {
    const [count, setCount] = useState(0)

    const { cartList, agregarCarrito } = useCartContext()

    const onAdd = (cant) => {
        setCount(cant)
        agregarCarrito({ ...producto, cantidad: cant })
    }
    console.log(cartList)
    console.log(producto)

    return (
        <>
            <h3 className='m-4'>Detalle del servicio</h3>
            <div className='row m-5 justify-content-center'>
                <img className='col-md-6 p-2 border border-secondary rounded' src={producto.image} alt=''></img>
                <div className='col-md-6 p-5 align-self-center'><h3>{producto.title} {producto.categoryId}</h3>
                <p className='lead'> El servicio de {producto.title} consiste en {producto.description}.
                <div className='h5'>Precio: ${producto.price}</div>
                </p>
                </div>
                

                {count
                    ?
                    <Link to="/Cart">
                        <button className='btn btn-primary m-5'>Ir al carrito</button>
                    </Link>
                    :
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                }
            </div>
        </>
    )
}

export default ItemDetail