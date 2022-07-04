
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContex } from './cartcontex/CartContex';

function CheckOut() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero]= useState("")
    const [idCompra, setIdCompra] = useState("")
    const {cart, getItemPrice,emptyCart }= useContext(CartContex )
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

 const db = getFirestore ()
    const orderCollection = collection(db, "orders")
function handleClick() {
  const orden ={
    buyer:{ nombre, email, numero},
    items: cart,
    total: getItemPrice()
  }
  addDoc(orderCollection, orden).then(({id})=>{
    setIdCompra(id)
  })
  handleShow();


  
}
console.log(setIdCompra)
console.log(idCompra)
  return (
   <> 
 <div className='titulo'>
 <h2>finalizar compra</h2>
      </div>

    <Card className='d-flex cardjson shadow-lg p-3 mb-5 bg-body rounded'style={{ width: '25rem' }}>
   

    <input className='btn formcheckOut' onChange={(e)=>setNombre(e.target.value)} placeholder="ingrese su nombre" type="text" aria-label=".form-control-lg example"/> <br />
    <input className='btn formcheckOut'  onChange={(e)=>setEmail(e.target.value)} placeholder="ingrese su Email" type="text" aria-label=".form-control-lg example"/> <br />
    <input className='btn formcheckOut'  onChange={(e)=>setNumero(e.target.value)} placeholder="ingrese su tel" type="text" aria-label=".form-control-lg example" /> <br />   
    <button className='btn formcheckOut' onClick={()=>handleClick()}> terminar compra </button>
</Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>nombre comercio </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          gracias {nombre} por realizar tu compra!! <br />
          nos pondremos  en contacto en la brevedad <br />
         su numero de pedido: {idCompra}
        
        </Modal.Body>
        <Modal.Footer> 
    <Link to={"/"} onClick={() => emptyCart()} className="btn  btn-dark"  >cerrar</Link>
        </Modal.Footer>
      </Modal>

  
   
  
</>

  )
}

export default CheckOut