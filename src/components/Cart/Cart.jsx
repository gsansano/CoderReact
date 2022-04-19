import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, where, documentId, getDocs, getFirestore, query, writeBatch } from "firebase/firestore"
import '../../App.css';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout';

const msgCond = (
  <div className="checkout">
    <br />
    <h4>
      Tu carrito está vacío! Y eso no está nada bien...
    </h4>
    <br/>
      <Link to="/" className="btn btn-primary">
        Ir a comprar
      </Link>
  </div>
)

const Cart = () => {
  const { cartList, vaciarCart, quitarProd, precioTotal } = useCartContext()
  const [condicional, setCondicional] = useState(false);
  const [dataForm, setDataForm] = useState({
    email: '',
    name: '',
    phone: ''
  });

  const [idOrden, setIdOrden] = useState('');

  const generarOrden = async (e) => {
    e.preventDefault()

    let orden = {}
    orden.buyer = dataForm
    orden.total = precioTotal();

    orden.items = cartList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.title
      const precio = cartItem.price * cartItem.cantidad
      const cantidad = cartItem.cantidad

      return { id, nombre, precio, cantidad }
    })
    const db = getFirestore()

    const queryCollectionSet = collection(db, 'orders')
    await addDoc(queryCollectionSet, orden)
      .then(resp => setIdOrden(resp.id))
      .catch(err => console.error(err))
  

  const queryCollection = collection(db, 'items')

  const queryActulizarStock = query(
    queryCollection,
    where(documentId(), 'in', cartList.map(item => item.id))
  )

  const batch = writeBatch(db)

    getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    })
    ))
    .catch(err => console.log(err))

  batch.commit()
  setCondicional(true)
  }

function handleChange(e) {
  setDataForm({
    ...dataForm,
    [e.target.name]: e.target.value
  })
}

if (cartList.length === 0) {
  return (msgCond)

} else {

return (
  <div className='contenedor'>
    {
      condicional ? <Checkout idOrden={idOrden} />
        :
        <>
          {cartList.map(item =>
            <div key={item.id} className='cartitem'>
              {<img className='cartimg col-md-6 mt-3 border border-secondary rounded' src={item.image} alt=''></img>}
              <h6 className='mt-2'> Servicio: {item.title}</h6>
              <h6> Cantidad: {item.cantidad} </h6>
              <h6> Precio: {item.price}</h6>
              <button className='btn btn-danger' onClick={() => { quitarProd(item) }}>Eliminar producto</button>
            </div>,
          )}
          <div className='p-5'>
            <h2>Precio total: ${precioTotal()}</h2>
            <button className="btn btn-secondary m-2" onClick={vaciarCart}>Vaciar Carrito</button><Link to="/" className="btn btn-info">Seguir comprando</Link>
            <form className='p-5'
              onSubmit={generarOrden}
              onChange={handleChange}
            >
              <input
                type='text'
                name='name'
                placeholder='Nombre'
                onChange={handleChange}
                value={dataForm.name}
              /><br />
              <input
                type='text'
                name='phone'
                placeholder='Teléfono'
                onChange={handleChange}
                value={dataForm.phone}
              /><br />
              <input
                type='email'
                name='email'
                placeholder='E-mail'
                onChange={handleChange}
                value={dataForm.email}
              /><br />
              <button className='btn btn-success m-3 p-3'>Terminar compra</button>
            </form>
          </div>
        </>
    }
  </div>
)}}


export default Cart