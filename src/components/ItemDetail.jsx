import { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContex } from './cartcontex/CartContex';
import ItenCount from './ItenCount';

function ItemDetail({ items }) {
  const { nombre, stock, imagen, precio, descripcion } = items;
  const { agregarAlCArrito } = useContext(CartContex); 
  const [showItemCount, setItemCount ] = useState(true);

  const onAdd = (contador) => {
    alert(`agregaste ${contador} al carrito de compras`);
    setItemCount (false);
    agregarAlCArrito(items, contador);
  };

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
  </Card.Body>
 
  <div className="divcontador">
              {showItemCount ? (
                <ItenCount items={items} onAdd={onAdd} />
              ) : (
                <Link to={"/cart"} className="btn btn-outline-dark">
                  Terminar mi compra
                </Link>
              )}
              <Link to={"/"} className="btn  btn-outline-dark" >agregar mas productos </Link>
</div> 
</div>
</Card>
</div>
</>
  )}

  export default ItemDetail

  
  
 