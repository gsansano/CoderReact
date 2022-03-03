import React, { useEffect, useState } from 'react';
import getFetch from '../helpers/getFetch';
import Item from './Item';

function ItemList() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
      .then((respuesta) => {
        return respuesta
      })
      .then((resp) => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    loading ? <h1>Cargando...</h1>
      :
      productos.map((prod) => <Item prod={prod} />

      )
  )
}

export default ItemList