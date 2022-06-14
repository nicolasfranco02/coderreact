import React from 'react'
import {Card} from 'react-bootstrap';


const ItemDetail =({resultados})=> {
const {nombre, imagen,precio, marca,pulgadas,origen}= resultados ;


  return (
    <>

<Card className=' cardjson 'style={{ width: '40%', height: '40%' }}>
  <h1>DESTACADO</h1>
  <Card.Img variant="top" className='imagenJson' src={imagen} />
  <Card.Body >
    <Card.Title>{nombre}</Card.Title>
    <Card.Text> precio:${precio} <br /></Card.Text>
    <Card.Text>  marca:{marca} <br /></Card.Text>
    <Card.Text>  Pulgadas:{pulgadas} <br /></Card.Text>
    <Card.Text> origen:{origen} <br /> </Card.Text>
   
    <button variant="primary">agregar al carrito</button>
  </Card.Body>
</Card>


</>
  )}

export default ItemDetail
