//import { SettingsCellOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const Itencount = ({inicial , max , onAdd}) => {
const [contador, setContador]= useState(inicial)
const[stock, setStock]= useState(max)

const sumar=()=>{
    if(contador < max){
        setContador (contador +1)
    }
    else{
        alert(`estas solicitando mas del stock disponible`)
    }
}
const restar=()=>{
   if(contador > inicial){
    setContador (contador -1)
    }else{
        alert (`no es un valor valido`)
    }
}

const reset =()=>{
    setContador(inicial)
}

  return (
    <div className='cardscontador'>
        <h2>{contador}</h2>
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    <button onClick={()=> {onAdd(contador) ; reset()}}>agregar</button>
    </div>
  )
  }

export default Itencount;