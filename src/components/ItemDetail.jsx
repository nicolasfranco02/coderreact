import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContex } from './cartcontex/CartContex';
import Itencount from './Itencount';

function ItemDetail ({items}) {
const { nombre,stock, imagen,precio, descripcion,contador }=items;
const { agregarAlCArrito, cart}= useContext(CartContex)
 
  return (
    <>  
<div className='tarjetaprod'>
<Card className=' d-flex cardjson shadow-lg p-3 mb-5 bg-body rounded'style={{ width: '50rem' }}>
  <Card.Img variant="top" className='imagenJson align-self-start' src={imagen} />
  <div className='cardjsondetalles align-self-end  shadow p-3 mb-5 bg-body rounded'> 
 <Card.Body className='cardbody' >
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
     precio:  ${precio} <br />
    </Card.Text>
    <Card.Text> 
     marca:  <br />
    </Card.Text>
    <Card.Text> 
     descripcion:{descripcion} <br />
    </Card.Text>
    <Card.Text> 
    origen:   <br />
     </Card.Text>
     <Card.Text> 
    stock:  {stock} <br />
     </Card.Text>
     <Card.Text> 
    cantidad:  {contador} <br />
     </Card.Text>
  </Card.Body>
 
<div className='divcontador'>
{contador > 0 ? <Link to={'/cart'} className="btn-fin">Terminar mi compra</Link>:<Itencount items={items} />}


</div> 
</div>
</Card>
</div>
</>
  )}

  export default ItemDetail

  
  
 