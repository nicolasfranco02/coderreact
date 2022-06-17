import React from 'react'
import {useState} from 'react';
import ItemDetailContainer from './ItemDetailContainer';


export const ProdBuscador = ({productos}) => {

    const [buscador, setBuscador]= useState([])
    const busc=(e)=>{
        setBuscador(e.target.value)
        
    }



    const busqueda = !buscador ? productos: productos.filter((dato)=>dato.nombre.toLocaleLowerCase().includes(buscador.toLocaleLowerCase()))


  return (
   <> <input value={buscador} onChange={busc} type="text" placeholder='buscar' className='form-control' />
  {buscador?.map(buscador=><ItemDetailContainer key={buscador.nombre} buscador={buscador}/>)}
  </>
  )
}
