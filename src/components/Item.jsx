import React from 'react'
import { Card } from 'react-bootstrap'
import Itencount from './Itencount';

const Item = ({listaProd}) => {
    const {nombre, imagen, precio}= listaProd ;


  return (


<Card className='cardItem' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      precio:${precio}
    </Card.Text>
    <button variant="primary">detalles</button>
  </Card.Body>
</Card>
  )
  }

export default Item