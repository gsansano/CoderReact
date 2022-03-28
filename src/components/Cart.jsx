import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import '../App.css';
import { Link } from 'react-router-dom';

const msgCond = (
  <div>
    <br/>
    <h4>
      Tu carrito está vacío! Y eso no está nada bien...
    </h4>
    <p>
      <Link to="/" className="btn btn-primary">
        Ir a comprar
      </Link>
    </p>
  </div>
)

const Cart = () => {
  const { cartList, vaciarCart, quitarProd, precioTotal } = useCartContext()
  const [dataForm, setDataForm] = useState({
    email: '',
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  const [idOrden, setIdOrden] = useState('');

  const generarOrden = async (e) => {
    e.preventDefault();

    let orden = {}
    orden.buyer = dataForm
    orden.total = precioTotal();

    orden.items = cartList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.title
      const precio = cartItem.price * cartItem.cantidad
      const cantidad = cartItem.cantidad
      console.log(orden)

      return { id, nombre, precio, cantidad }
    })

    const db = getFirestore()
    const queryCollectionSet = collection(db, 'orders')
    addDoc(queryCollectionSet, orden)
      .then(resp => setIdOrden(resp.id))
      .catch(err => console.error(err))
      .finally(() => console.log('Operación finalizada'))
  }

  if (cartList.length === 0) {
    return (msgCond)

  } else {

    return (
      <div>
        {idOrden.length !== '' && `El identificador de su compra es: ${idOrden}`}
        {
          cartList.map(item => <div key={item.id} className='cartitem'> Servicio: {item.title} Cantidad: {item.cantidad} Precio: {item.precio} {<img className='cartimg' src={item.image} alt=''></img>}<button className='btn btn-danger' onClick={() => { quitarProd(item) }}>Eliminar producto</button>
          </div>,
          )}
        <h2>Precio total: ${precioTotal()}</h2>
        <button className="btn btn-secondary" onClick={vaciarCart}>Vaciar Carrito</button><Link to="/" className="btn btn-info">Seguir comprando</Link>
        <form
          onSubmit={generarOrden}
          onChange={handleChange}
        >
          <input
            type='text'
            name='name'
            placeholder='name'
            onChange={handleChange}
            value={dataForm.name}
          /><br />
          <input
            type='text'
            name='phone'
            placeholder='tel'
            onChange={handleChange}
            value={dataForm.phone}
          /><br />
          <input
            type='email'
            name='email'
            placeholder='email'
            onChange={handleChange}
            value={dataForm.email}
          /><br />
          <button className='btn btn-success'>Terminar compra</button>
        </form>
      </div>
    )
  }
}


export default Cart