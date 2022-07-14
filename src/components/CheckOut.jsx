
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContex } from './cartcontex/CartContex';
import IconoError from './IconoError';
import Validador from './Validador';


function CheckOut() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero]= useState("")
    const [idCompra, setIdCompra] = useState("")
    const {cart, getItemPrice,emptyCart }= useContext(CartContex )
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//validacion de usuario
    const [validacion, setValidacion] = useState({
      nombre: false,
      email: false,
      numero: false
  })

 const db = getFirestore ()
    const orderCollection = collection(db, "orders")

function handleClick() {
  //boton terminar compra
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
// validaciones
function validacionEmail() {
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)) {
      setValidacion({ ...validacion, email: true });
  } else {
      setValidacion({ ...validacion, email: false });
  }
}

function validacionNombre() {
  if (/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(nombre)) {
      setValidacion({ ...validacion, nombre: true });
  } else {
      setValidacion({ ...validacion, nombre: false });
  }
}

function validacionNumero() {
  if (/^[0-9]+$/.test(numero) && numero.length >= 9) {
      setValidacion({ ...validacion, numero: true });
  } else {
      setValidacion({ ...validacion, numero: false });
  }
}

  return (
   <> 
 <div className='titulo'>
 <h2>finalizar compra</h2>
      </div>

    <Card className='d-flex cardjson shadow-lg p-3 mb-5 bg-body rounded'style={{ width: '25rem' }}>
   
   <div className="">
    <input onKeyUp={validacionNombre} className='btn formcheckOut' onChange={(e)=>setNombre(e.target.value)} placeholder="ingrese su nombre" type="text" aria-label=".form-control-lg example"/>
    {validacion.nombre ? <p className=" ">Nombre y Apellido <Validador /></p > : nombre == "" ? "" : <p className="validacionX">Solo se permiten letras <IconoError /> </p>}
     <br />
</div>
    <input onKeyUp={validacionEmail} className='btn formcheckOut'  onChange={(e)=>setEmail(e.target.value)} placeholder="ingrese su Email" type="text" aria-label=".form-control-lg example"/>
    {validacion.email ? <p className="validacion">email <Validador /></p> : email == "" ? "" : <p className="validacionX">Agregá un correo válido <IconoError /></p>}
     <br />
    <input onKeyUp={validacionNumero} className='btn formcheckOut'  onChange={(e)=>setNumero(e.target.value)} placeholder="ingrese su tel" type="text" aria-label=".form-control-lg example" />
    {validacion.numero ? <p className="validacion">Celular <Validador /></p> : numero == "" ? "" : <p className="validacionX">Agregue un celular válido <IconoError /></p>}
     <br />  
     <div>
     {validacion.numero && validacion.email && validacion.nombre ? <button className='btn formcheckOut' onClick={()=>handleClick()}> terminar compra </button>: <span></span> }
</div> 
</Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       
      >
        <Modal.Header closeButton  className="modalcheck">
          <Modal.Title >ecommer </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          
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