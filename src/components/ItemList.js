import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
      console.log('ItemList')

  return (
    
    productos.map((prod) => <Item key={prod.id} prod={prod} />

      )
    
  )
}

export default ItemList