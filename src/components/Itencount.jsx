//import { SettingsCellOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const Itencount = ({inicial , max , onadd}) => {
const[contador, setcontador]= useState(inicial)

const sumar=()=>{
    if(contador < max){
        setcontador (contador +1)
    }else{
        alert(`estas solicitando mas del stock disponible`)
    }
}
const restar=()=>{
   if(contador > inicial){
    setcontador (contador -1)
    }else{
        alert (`no es un valor valido`)
    }
}
const reset =()=>{
    setcontador(inicial)
}

  return (
    <div className='cardscontador'>
        <h2>{contador}</h2>
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    <button onClick={()=> {onadd(contador) ; reset()}}>agregar</button>
    </div>
  )
  }

export default Itencount;