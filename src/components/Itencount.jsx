import {useState} from 'react';





const ItenCount = ({items , onAdd}) => {
const [contador, setContador]= useState(1)
// contador de suma
const sumar=()=>{
    if(contador < items.stock){
        setContador (contador +1)
    }
    else{
        alert(`estas solicitando mas del stock disponible`)
    }
}

// contador de resta
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
    <button
          className=" btn btncarro btn-outline-dark"
          onClick={() => {
            onAdd(contador);
          }}
        >
          agregar al carro
        </button>
    </div>
    </div> 
  )
  }

export default ItenCount;

