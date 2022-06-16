import { Tv } from '@mui/icons-material';
import React, { useEffect, useInsertionEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList'

let productos = [
  {id:0 ,categoria:"tv" , stock:10, nombre:"tv",precio: 50000, imagen:'./imagenes/tv.jpg'},
  {id:1 ,categoria:"informatica" , stock:10,nombre:"notebook",precio: 72000, imagen:'./imagenes/notebook.jpg'},
  {id:2 ,categoria:"ventilacion" , stock:10,nombre:"ventilador",precio: 1000,imagen:'./imagenes/ventilador.jpg' },
  {id:3 ,categoria:"hogar" , stock:10,nombre:"tostadora",precio: 3200, imagen:'./imagenes/tostadora.png'},
  {id:4 ,categoria:"hogar" , stock:10,nombre:"termo",precio: 9000, imagen:'./imagenes/termo.jpg'},
  {id:5 ,categoria:"heladera" , stock:10,nombre:"heladera", precio: 80000, imagen:'./imagenes/heladera.jpg'},
  {id:6 ,categoria:"tv" , stock:10, nombre:"smart tv 60",precio: 90000, imagen:'./imagenes/tv2.jpg'},
  {id:7 ,categoria:"tv" , stock:10, nombre:"smart tv 50",precio: 60000, imagen:'./imagenes/tv3.jpg'},
  {id:8 ,categoria:"tv" , stock:10, nombre:"led 32",precio: 52000, imagen:'./imagenes/tv4.jpg'},
  {id:9 ,categoria:"informatica" , stock:10,nombre:"notebook asus",precio: 62000, imagen:'./imagenes/note2.jpg'},
  {id:10 ,categoria:"informatica" , stock:10,nombre:"notebook hp",precio: 8000, imagen:'./imagenes/note3.jpg'}


]





function ItemListContainer() {
  const[loading,  setLoading]= useState(true)
  const[error, setError]= useState(false)
  

  const{id}= useParams();
 const [resultados, setresultado]=useState([])

 useEffect(()=>{

   const listaProd = new Promise((res, rej) =>{
     setTimeout(()=>{
      (!id)? res(productos) : res(productos.filter(prod=>prod.categoria == id))
     },2000);
   }); 

listaProd
.then((resul) => {
setresultado(resul);
setLoading(false)
})

.catch((error)=>{
  setresultado(error);
  setError(true)
})
})

    return (
   <> 
   <div>{loading && "loading..."}</div>
   <div>{error && "hubo un error..."}</div>
    <div className='titulo'>
    <h1>nombre comercio</h1>
    </div>
    <div>
    <div className='titulo'>
      </div>
      <div className='titulo'>
    <h2>producto</h2>
    </div>
      <ItemList listaProd={resultados} />
    </div>
   
    </>
    );
}

export default ItemListContainer;