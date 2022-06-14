import React from 'react'
import CartWidget1 from './CardWidget1';
import {a} from 'react-router-dom';

function PNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <div className="container w-50 p-3">
  <a   className="navbar-brand">
    <img className='logonav' src={require('../imglogo/Logonav.png')} alt="" width="8" height="8"/>
    </a>
  </div>
        <div className="collapse container navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a  className="nav-a nav-link text-white-lg">inicio</a>
            </li>
            <li className="nav-item">
              <a  className="nav-a nav-link text-white-lg">productos</a>
            </li>
            <li className="nav-item ">
              <a  className="nav-a nav-link text-white-lg">destacados</a>
            </li>
            <li className="nav-item ">
             <a className="nav-a nav-link text-white-lg">contacto</a>
            </li>
          </ul>
          <div className="nav-item  offcanvas-end carrito " >
          <CartWidget1 />
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default PNavBar;