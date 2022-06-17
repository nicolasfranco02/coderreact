import React, { useState } from 'react'
import {useEffect} from 'react';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
const itemId = 20;
const [items, setItem]=useState();
const [isLoading, setIsLoading]=useState(true); 

useEffect(()=>{
    setIsLoading (true);
    setTimeout(()=>{
        fetch("./producto.json")
        .then((resul)=>resul.json())
        .then((productos)=>{
            const producto = productos.find((producto) => producto.id ===itemId);
            setItem(producto);
            setIsLoading(false);
            console.log(productos);
}) 
.catch((error)=>{
    console.log(error);
    setIsLoading(false);
});

    },2000);
},[])


  return (
  <>
{isLoading ?"cargando detalle..." : <ItemDetail key={items.id} items={items}/>}
 {/* <div>
    
        {resultados?.map(resultados=><ItemDetail key={resultados.id} resultados={resultados}/>)}

  </div>*/}
  
  
    
     
     </>
);
}


export default ItemDetailContainer;