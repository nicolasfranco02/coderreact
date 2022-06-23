import React, { useContext, useState } from 'react'
import {Card} from 'react-bootstrap';
import ItemListContainer from './ItemListContainer';
import Itencount from './Itencount';
import {Link} from 'react-router-dom';
import { CartContex } from './cartcontex/CartContex';




const ItemDetail =({items})=> {
//const { nombre,stock, imagen,precio, marca,pulgadas,origen }=items;
const { addItem}= useContext(CartContex)
//const [articulosagregados , setarticulosagredos]=useState (0) 
  return (
    <>

<Card className=' cardjson 'style={{ width: '20rem' }}>
  <Card.Img variant="top" className='imagenJson' src={items.imagen} />
  <Card.Body >
    <Card.Title>{items.nombre}</Card.Title>
    <Card.Text>
     precio:${items.precio} <br />
    </Card.Text>
    <Card.Text> 
     marca:{items.marca} <br />
    </Card.Text>
    <Card.Text> 
     Pulgadas:{items.pulgadas} <br />
    </Card.Text>
    <Card.Text> 
    origen:{items.origen} <br />
     </Card.Text>
     <Card.Text> 
    stock:{items.stock} <br />
     </Card.Text>
     <Card.Text> 
    cantidad{items.contador} <br />
     </Card.Text>
   {/*<Itencount />*/}
  </Card.Body>

{/*{cantidad > 0 ?<Link to={'/Cart'} className="btn-fin">Terminar mi compra</Link>*/ }<Itencount items={items} /> 
</Card>

</>
  )}

  export default ItemDetail

  
  
 