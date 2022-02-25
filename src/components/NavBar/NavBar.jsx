import React from 'react'
import Logo from '../Logo/Logo';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';


function NavBar() {
  return (
    <div className='navbar'>
        <div className='logo'><Logo /></div>
        <ul className="lista">
                <li className="item">
                    <a className="link" href="Index.html">Home</a>
                </li>
                <li className="item">
                    <a className="link" href="Nosotros.html">Nosotros</a>
                </li>
                <li className="item">
                    <a className="link" href="Servicios.html">Servicios</a>
                </li>
                <li className="item">
                    <a className="link" href="Clientes.html">Clientes</a>
                </li>
                <li className="item">
                    <a className="link" href="Contacto.html">Contacto</a>
                </li>
        </ul>
        <div className='cart'><CartWidget /></div>
    </div>
  )
}

export default NavBar