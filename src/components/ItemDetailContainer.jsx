import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
const {id} = useParams();
const [items, setItem]=useState({});
const [isLoading, setIsLoading]=useState(true); 
const[error, setError]= useState(false)
//const idOp = 0

useEffect(()=>{
    const db = getFirestore();
    const refProduct = doc(db , 'item', id);
    setIsLoading (true);
    getDoc(refProduct)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
        setIsLoading(false);
        console.log(setItem)
    })
    .catch((error)=>{     
      setError(error);
    }).finally( ()=>{
        setIsLoading(false);
    })
    
},[id]);

  return (
  <>
{/*  {items && <ItemDetail items={items} />}*/}
   
  {isLoading ?"cargando detalle..." : <ItemDetail items={items}/>}

    
     
     </>
);
}


export default ItemDetailContainer;



