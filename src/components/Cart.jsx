import { Card } from "@mui/material";
import { useContext } from "react";
import { CartContex } from "./cartcontex/CartContex";
import { IconName } from "react-icons/bi";
import { Link } from "react-router-dom";

const Cart = () => {
const {cart,emptyCart, deleteItem, getItemQty, getItemPrice}= useContext(CartContex)


return(
<>
<h3>compra</h3>

 {cart.map(items =>(
<div className="carritocompras">
    <img src="{}" alt="" />
    <p>{}</p>
    <p>producto {items.nombre}</p>
    <p>precio:{items.precio}</p>
    <p>cantidad :{items.contador} </p>
    <button onClick={() => deleteItem(items.id)} className='btn btn-dark'> borrar producto</button>
    
<p> total de productos :{getItemQty()}</p>
<p>total a pagar : {getItemPrice()}</p>

</div>))}
<button className="btn btn-dark"> finalizar compra</button>
<Link to={"/"} className="btn btn-dark" >agregar mas productos </Link>
</>

)
}
export default Cart;