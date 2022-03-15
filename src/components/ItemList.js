import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getFetch from '../helpers/getFetch';
import Item from './Item';

function ItemList() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  useEffect(() => {
    if (categoriaId) {
      getFetch
        .then((respuesta) => {
          return respuesta
        })
        .then((resp) => setProductos(resp.filter(pro => pro.categoria === categoriaId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    } else {
      getFetch
        .then((respuesta) => {
          return respuesta
        })
        .then((resp) => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

  }, [categoriaId])

  return (
    loading ? <h1>Cargando...</h1>
      :
      productos.map((prod) => <Item prod={prod} />

      )
  )
}

export default ItemList