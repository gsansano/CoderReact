import React from 'react';
import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const agregar = () => {
        onAdd(count)
        setCount(1)
    }

    return (
        <>
        <div className='col m-5'>
            <button className="btn btn-dark" onClick={restar}> - </button>
            <label className="text-dark px-5 p-1 border border-dark"> {count} </label>
            <button className="btn btn-secondary" onClick={sumar}> + </button><br />
            <button className="btn btn-primary btn-block m-2" onClick={agregar}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount
