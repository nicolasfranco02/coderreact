import { Card } from "@mui/material";
import { useContext } from "react";
import { CartContex } from "./cartcontex/CartContex";
import { IconName } from "react-icons/bi";
import { Link } from "react-router-dom";

const Cart = () => {
//const [cart, deleteItem, getItemQty, getItemPrice]= useContext(CartContex);
//const { nombre, imagen,precio, contador }= items ;

return(
<>
<h3>compra</h3>

 
<div className="carritocompras">
    <img src="{}" alt="" />
    <p>producto {}</p>
    <p>precio:{}</p>
    <p>cantidad{} </p>
   {/* <p onClick={() =>deleteItem(items.id)} className='eliminarItemCard'><img className='imgBasura img-fluid' src="{}" alt={"Producto1"} width="30px" /></p>
    
<p> total de productos :{getItemQty()}</p>
<p>total a pagar : {getItemPrice()}</p>*/}
</div>
<button className="btn"> finalizar compra</button>
<Link to={"/"} className="btn" >agregar mas productos </Link>
</>

)
}
export default Cart;