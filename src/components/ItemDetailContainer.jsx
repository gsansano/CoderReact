import React, { useEffect, useState } from 'react'
import getFetch from '../helpers/getFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [producto, SetProducto] = useState ({})
    useEffect(() => {
        getFetch
        .then(resp => SetProducto(resp.find(prod => prod.id === 3)))
    }, [])
  return (
    <div>
        <>
        <ItemDetail producto={producto} />
        </>
    </div>
  )
}

export default ItemDetailContainer