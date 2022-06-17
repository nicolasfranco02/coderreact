import React from 'react'
import {Card} from 'react-bootstrap';
import ItemListContainer from './ItemListContainer';
import Itencount from './Itencount';


const ItemDetail =({ items })=> {
const { nombre, imagen,precio, marca,pulgadas,origen }= items ;

const onAdd = (contador) => {
  alert(`agregaste ${contador} productos`);
};
  return (
    <>

<Card className=' cardjson 'style={{ width: '18rem' }}>
  <h1>DESTACADO</h1>
  <Card.Img variant="top" className='imagenJson' src={imagen} />
  <Card.Body >
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
     precio:${precio} <br />
    </Card.Text>
    <Card.Text> 
     marca:{marca} <br />
    </Card.Text>
    <Card.Text> 
     Pulgadas:{pulgadas} <br />
    </Card.Text>
    <Card.Text> 
    origen:{origen} <br />
     </Card.Text>
   
   <Itencount inicial={1} max={10} onAdd={onAdd}/>
  </Card.Body>
</Card>


</>
  )}

export default ItemDetail
