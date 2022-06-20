import React, { useState } from 'react'
import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
const {id} = useParams();
const [items, setItem]=useState([]);
const [isLoading, setIsLoading]=useState(true); 

console.log(id)

useEffect(()=>{
    setIsLoading (true);
    setTimeout(()=>{
        fetch('../../producto.json')
        .then((resul)=>resul.JSON())
        .then((productos)=>{
            const producto = productos.find((producto) => producto.id ===id);
            setItem(producto);
            setIsLoading(false);
            console.log(productos);
}) 
.catch((error)=>{
    console.log(error);
    setIsLoading(false);
});

    },2000);
},[id]);



  return (
  <>
{isLoading ?"cargando detalle..." : <ItemDetail   items={items}/>}
 {/* <div>
    
        {resultados?.map(resultados=><ItemDetail key={resultados.id} resultados={resultados}/>)}

  </div>
  
  */}
    
     
     </>
);
}


export default ItemDetailContainer;



