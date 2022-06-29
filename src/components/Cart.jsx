import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContex } from "./cartcontex/CartContex";
import CartDelete from "./CartDelete";

const Cart = () => {
const {cart,emptyCart, deleteItem, getItemQty, getItemPrice}= useContext(CartContex)



return(
<>
<h3 className="titulo">articulos agregados</h3>
<div className=" vaciarCarrito">
<button onClick={() => emptyCart()} className='btn btn-dark' >vaciar carrito </button>
</div>
{getItemQty() > 0 ? <span>
{cart.map(items =>(
    <div className="cardjson cartult shadow-lg p-3 mb-5 bg-body rounded">
<div className="carritocompras d-flex flex-row mb-3 ">
    <img className="p-2 imgcart" src={items.imagen} alt="" />
    <div className="p-2 prodpre" >
    <h5>producto:  {items.nombre}</h5>
    <h5>precio: ${items.precio}</h5>
    
    </div>
    <div className="p-2 delete">
    <h5>cantidad :{items.contador} </h5>
    <button onClick={() => deleteItem(items.id)} className='btn eliminaritems' ><CartDelete/> </button>
    
    </div>

</div>
</div>
))}

<h4 className="botoneraCart"> total de productos :{getItemQty()}</h4><br />
<h4 className="botoneraCart">total a pagar : {getItemPrice()}</h4> </span> :<h2 className="cardjson cartult shadow-lg p-3 mb-5 bg-body rounded">el carrito se encuentra vacio</h2>  }
<div className="botonCart">
{getItemQty() >0 ? <button className="btn btnCart btn-dark"> finalizar compra</button>: <span> </span>}
<Link to={"/"} className="btn  btn-dark" >agregar mas productos </Link></div>


</>

)
}
export default Cart;