import React, { useContext } from 'react'
import CartWidget1 from './CardWidget1';
import {a, Link} from 'react-router-dom';
import { ProdBuscador } from './ProdBuscador';
import { CartContex } from './cartcontex/CartContex';

function PNavBar() {

  const {getItemQty} = useContext (CartContex)

  return (
  <> 
  <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='logonav' src={require('../imglogo/Logonav.png')} alt="" width="8" height="8"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navPrincipal  navbar-collapse" id="navbarNav">
      <ul className="navbar-nav   ">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={"/"}>INICIO</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><Link className="dropdown-item" to='categoria/tv'>tv</Link></li>
          <li><Link className="dropdown-item" to={"/categoria/informatica"}>informatica</Link></li>
          <li><Link className="dropdown-item" to={"/categoria/ventilacion"}>ventilacion</Link></li>
          <li><Link className="dropdown-item" to={"/categoria/hogar"}>hogar</Link></li>
          <li><Link className="dropdown-item" to={"/categoria/heladera"}>heladera</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">CONTACTO</a>
        </li>
      </ul>
    </div>
  </div>

  <div className=" cardWidget offcanvas-end carrito " >
         <Link to={'/Cart'}> {getItemQty() > 0 && <span className="cantidadCompras  ">{getItemQty()}</span>}
        <CartWidget1 /> </Link>
        </div>
</nav>
</>
  )
}

export default PNavBar;