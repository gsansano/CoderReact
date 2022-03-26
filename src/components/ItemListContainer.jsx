import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import '../App.css';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
    const { categoriaId } = useParams()

    useEffect(() => {
      const db = getFirestore()
      if (categoriaId) {
      const queryCollection = collection(db, 'items')
      const queryFilter = query(queryCollection, where('categoryId', '==', categoriaId))
      getDocs(queryFilter)
      .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) )))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
      }else{
        const queryCollection= collection(db, 'items')
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) )))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      }

    }, [categoriaId])

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
