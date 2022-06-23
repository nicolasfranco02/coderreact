import {useState, useContext} from 'react';
import {CartContex} from './cartcontex/CartContex';
//import Itencount from './Itencount';
import {Link} from 'react-router-dom';



const Itencount = ({items}) => {
const [contador, setContador]= useState(1)
const { agregarAlCArrito}=useContext(CartContex);


const onAdd = ()=>{
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
        <h2>{contador}</h2>
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    <button onClick={()=> {onAdd()}}>agregar al carro</button>
    <Link to={'/Cart'} className="btn-fin">Terminar mi compra</Link> 
    </div> 
  )
  }

export default Itencount;

