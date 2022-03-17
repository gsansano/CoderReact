import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import '../App.css';
import getFetch from '../helpers/getFetch';

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
    const { categoriaId } = useParams()

    useEffect(() => {
      if (categoriaId) {
        getFetch
          .then((respuesta) => {
            return respuesta
          })
          .then((resp) => setProductos(resp.filter(prod => prod.categoria === categoriaId)))
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

  
  console.log(categoriaId)

  return (
    <>
      <title id="saludo">Bienvenido a la tienda online del Estudio</title>
      <section className='contenedor'>
        {loading ? <h1>Cargando...</h1>
          :
          <ItemList productos={productos} />
        }
      </section>
    </>
  )
}

export default ItemListContainer
