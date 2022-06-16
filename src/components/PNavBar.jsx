import React from 'react'
import CartWidget1 from './CardWidget1';
import {a, Link} from 'react-router-dom';
import { ProdBuscador } from './ProdBuscador';

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
              <Link  className="nav-a nav-link text-white-lg" to={"/"}>inicio</Link>
            </li>
            <li className="nav-item">
              
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link nav-a nav-link text-white-lg dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            productos
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link className="dropdown-item" to={"/categoria/tv"}>tv</Link></li>
            <li><Link className="dropdown-item" to={"/categoria/informatica"}>informatica</Link></li>
            <li><Link className="dropdown-item" to={"/categoria/ventilacion"}>ventilacion</Link></li>
            <li><Link className="dropdown-item" to={"/categoria/hogar"}>hogar</Link></li>
            <li><Link className="dropdown-item" to={"/categoria/heladera"}>heladera</Link></li>
          </ul>
        </li>
      </ul>
    </div>
            </li>
            <li className="nav-item ">
              <a  className="nav-a nav-link text-white-lg" >destacados</a>
            </li>
            <li className="nav-item ">
            {/*<ProdBuscador />*/}
            </li>
          </ul>
          <div className="nav-item cardWidget offcanvas-end carrito " >
          <CartWidget1 />
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default PNavBar;