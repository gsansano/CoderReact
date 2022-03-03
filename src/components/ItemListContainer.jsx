import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import '../App.css';

function ItemListContainer() {
  const onAdd = (cant) => {
    console.log(cant)
  }


  return (
    <>
      <section className='contenedor'>
        <ItemList />
      </section>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer
