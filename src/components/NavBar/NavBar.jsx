import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';


function NavBar() {
    return (

        <div className='navbar col-md-12'>
            <Link to="/" className='logo'><Logo /></Link>
            <ul className="lista">
                <li className="item">
                    <NavLink className="link" to="/">Home</NavLink>
                </li>
                <li className="item">
                    <NavLink to="categoria/Extrajudicial" className="link">Extrajudicial</NavLink>
                </li>
                <NavLink to="categoria/Judicial" className="link">Judicial</NavLink>
                <li className="item">
                    <NavLink to="/" className="link">Contacto</NavLink>
                </li>
            </ul>
            <div className='carticon'><CartWidget /></div>
        </div>
    )
}

export default NavBar