import {useState, useContext} from 'react';
import {CartContex} from './cartcontex/CartContex';
//import Itencount from './Itencount';
import {Link} from 'react-router-dom';




const Itencount = ({items}) => {
const [contador, setContador]= useState(1)
const { agregarAlCArrito, getItemQty}=useContext(CartContex);


const onAdd = ()=>{
    alert(`agregaste ${contador} al carrito de compras`)
    agregarAlCArrito(items, contador);
    
}

const sumar=()=>{
    if(contador < items.stock){
        setContador (contador +1)
    }
    else{
        alert(`estas solicitando mas del stock disponible`)
    }
}
const restar=()=>{
   if(contador > 1){
    setContador (contador -1)
    }else{
        alert (`no es un valor valido`)
    }
}



const reset =()=>{
    setContador(1)
}

  return (
    <div className='cardscontador'>
     <div className='sumas'>  
    <button className=" btn sum btn-outline-dark" onClick={sumar}>+</button>
    <h2 className='cantidad'>{contador}</h2>
    <button className=" btn sum btn-outline-dark" onClick={restar}>-</button>
    </div>
    <div className=''>
   { contador > 0 ? <button className=" btn btncarro btn-outline-dark" onClick={()=> {onAdd()}}>agregar al carro</button>:<Link to={"/"} className="btn btn-dark" >agregar mas productos </Link>}
    < Link to={'/Cart'} className="btn btncarro btn-outline-dark">Terminar mi compra</Link> 
    </div>
    </div> 
  )
  }

export default Itencount;

