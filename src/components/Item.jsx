
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({listaProd}) => {
    const {nombre,id, stock, imagen, precio}= listaProd ;

   
  return (


<Card className='cardItem shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      precio:${precio}
    </Card.Text>
    <Card.Text>
      cod:{id}
    </Card.Text>
   <Link to={'/items/:'+ id} className=" btn btndetalles btn-outline-dark" variant="primary" >detalles</ Link>
  </Card.Body>
</Card>
  )
  }

export default Item;




