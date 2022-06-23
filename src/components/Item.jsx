
import React, { useState } from 'react'
import { Card, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Itencount from './Itencount';


const Item = ({listaProd}) => {
    const {nombre,id, stock, imagen, precio}= listaProd ;

   
  return (


<Card className='cardItem' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      precio:${precio}
    </Card.Text>
    <Card.Text>
      cod:{id}
    </Card.Text>
   <Link to={'items/'+ id} className=" btn btn-outline-dark" variant="primary" >detalles</ Link>
  </Card.Body>
</Card>
  )
  }

export default Item;




