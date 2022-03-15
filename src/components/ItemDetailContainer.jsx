import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import getFetch from '../helpers/getFetch'

const ItemDetailContainer = () => {
  const [producto, SetProducto] = useState({})
  const { detalleId } = useParams()
  console.log(detalleId)
  useEffect(() => {
    getFetch
      .then(resp => SetProducto(resp.find(prod => prod.id === detalleId)))
  }, [])
  return (
    <>
      <ItemDetail producto={producto} />
    </>
  )
}

export default ItemDetailContainer