import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [producto, SetProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const { detalleId } = useParams()
  console.log(detalleId)

  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'items', detalleId)
    getDoc(queryDb)
    .then(resp => SetProducto({ id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[])
  return (
    <>
    {loading ? 
    <h1>Cargando...</h1>
          :
      <ItemDetail producto={producto} />
    }
      </>
  )
}

export default ItemDetailContainer