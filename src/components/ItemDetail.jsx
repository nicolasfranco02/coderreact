import { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContex } from './cartcontex/CartContex';
import ItenCount from './ItenCount';

function ItemDetail({ items }) {
  const { nombre, stock, imagen, precio, descripcion } = items;
  const { agregarAlCArrito, guardar } = useContext(CartContex); 
  const [showItemCount, setItemCount ] = useState(true);


  //agregar al carrito
  const onAdd = (contador , Cart) => {
    alert(`agregaste ${contador} al carrito de compras`);
    setItemCount (false);
    agregarAlCArrito(items, contador);
  };


  return ( 
    <>  
<div className='d-flex tarjetaprod'>
<Card className=' d-flex cardjson shadow-lg p-3 mb-5 bg-body rounded'style={{ width: '50rem' }}>
  <Card.Img variant="top" className=' align-self-start' src={imagen} />
  <div className=' align-self-end  shadow p-3 mb-5 bg-body rounded'> 
 <Card.Body className='' >
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
 
  <div className="divcontador ">
              {showItemCount ? (
                <ItenCount items={items} onAdd={onAdd} />
              ) : (  
                <Link to={"/cart"} className="btn btnITEMDetail  btn-outline-dark">
                  Terminar mi compra
                </Link>
              )}
              <Link to={"/"} className="btn btnITEMDetail btn-outline-dark" >agregar mas productos </Link>
</div> 
</div>
</Card>
</div>
</>
  )}

  export default ItemDetail

  
  
 