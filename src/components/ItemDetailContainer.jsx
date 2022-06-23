import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
//const {itemId} = useParams([])
const {itemId} = useState();
const idOp = 0;
//const itemId= 1;
const [items, setItem]=useState();
const [isLoading, setIsLoading]=useState(true); 


useEffect(()=>{
    setIsLoading (true);
    setTimeout(()=>{
        fetch('../producto.json' )
        .then((resul)=>resul.json())
        .then((productos)=>{
            const producto = productos.find((producto) => producto.id ===idOp);
            setItem(producto);
            setIsLoading(false);
            console.log(producto);
}) 
.catch((error)=>{
    console.log(error);
    setIsLoading(false);
});

    },2000);
},[]);


console.log(idOp)
  return (
  <>
    
{isLoading ?"cargando detalle..." : <ItemDetail  items={items}/>}

 {/* <div>
    
        {resultados?.map(resultados=><ItemDetail key={resultados.id} resultados={resultados}/>)}

  </div>
  
  */}
    
     
     </>
);
}


export default ItemDetailContainer;



