import React, { useState } from 'react'
import {useEffect} from 'react';
import ItemDetail from './ItemDetail';
import Item from './Item';

function ItemDetailContainer() {
   
const [resultados, setResultados]=useState([])

useEffect(()=>{
    setTimeout(()=>{
        fetch("./producto.json")
        .then((resul)=>resul.json())
        .then((date)=>{
            setResultados(date)
            console.log(date)
}) 
.catch((error)=>console.log(error))

    },2000);
},[])


  return (
  <>

  <div>
    
        {resultados?.map(resultados=><ItemDetail key={resultados.id} resultados={resultados}/>)}

    </div>
  
  
    
     
     </>
);
}


export default ItemDetailContainer;