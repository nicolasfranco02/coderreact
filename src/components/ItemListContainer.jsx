
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import {collection , getDocs, getFirestore , query, where} from 'firebase/firestore';
import { Spinner } from 'react-bootstrap';
// trae lista de productos

function ItemListContainer() {
  const[loading,  setLoading]= useState(true)
  const[error, setError]= useState(false)
  const{id}= useParams();
  const [resultados, setResultado]=useState([])


 useEffect(()=>{
    const db= getFirestore();
    const prodColeccion= collection(db, 'item');

  if (id) {
    const q = query(prodColeccion , where('categoria','==',id));
    getDocs(q)
    .then((snapshot)=>{
      setResultado(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id })));
     setLoading(false);
    })
     .catch((error)=>{
      setError(error)
    })
    .finally(()=>{
      setLoading(false)
    })
  }else{
  getDocs(prodColeccion)
  .then((snapshot)=>{
    setResultado(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id })));
    setLoading(false);
  })
   .catch((error)=>{
    setError(error)
      
  })
  }
}, [id])


    return (
   <> 
   
   

    <div className='titulo'>
    <h1>ecommer</h1>
    </div>
    <div className='spinner titulo'>{loading && <Spinner animation="grow" variant="primary" />}</div>
    <div>
    <div className='titulo'>
      </div>
      <ItemList listaProd={resultados} />
    </div>
   
    </>
    );
    }

export default ItemListContainer;
