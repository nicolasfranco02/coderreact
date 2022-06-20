import React, { useState } from 'react'
import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
const idOp = 0;
//const {id} = useState();
const [items, setItem]=useState();
const [isLoading, setIsLoading]=useState(true); 

console.log()

useEffect(()=>{
    setIsLoading (true);
    setTimeout(()=>{
        fetch('../producto.json' )
        .then((resul)=>resul.json())
        .then((productos)=>{
            const producto = productos.find
            ((producto) => producto.id ===idOp);
            setItem(producto);
            setIsLoading(false);
            console.log(productos);
}) 
.catch((error)=>{
    console.log(error);
    setIsLoading(false);
});

    },2000);
},[]);



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



