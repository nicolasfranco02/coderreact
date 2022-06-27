import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
const {id} = useParams();
const [items, setItem]=useState();
const [isLoading, setIsLoading]=useState(true); 
const[error, setError]= useState(false)
const idOp = 0

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

  {/*  const db = getFirestore();
    const refProduct = doc(db , 'item', id);
    setIsLoading (true);
    getDoc(refProduct)
      .then((snapshot) => {
        setItems({ ...snapshot.data(), id: snapshot.id });
        setIsLoading(false);
        console.log(setItems)
    })
    .catch((error)=>{     
      setError(error);
    }).finally( ()=>{
        setIsLoading(false);
    })
    
},[id]);
console.log(id)
 console.log(setItems)
console.log(items)*/}
  return (
  <>
 {/* {items && <ItemDetail items={items} />}*/}
   
{isLoading ?"cargando detalle..." : <ItemDetail items={items}/>}

    
     
     </>
);
}


export default ItemDetailContainer;



