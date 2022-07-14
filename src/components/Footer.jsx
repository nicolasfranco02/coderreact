import React from 'react'
import {a, Link} from 'react-router-dom';

function Footer() {
  return (
   <> <div>

<nav class="nav flex-column">
  <ul>
    <li>
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
</nav>
   </div>
   <div className='footerCopy'>copyright franco nicolas</div>
   
   </>
  )
}

export default Footer