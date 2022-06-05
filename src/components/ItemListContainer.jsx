import { Tv } from '@mui/icons-material';
import React, { useEffect, useInsertionEffect, useState } from 'react'
import ItemList from './ItemList'

function ItemListContainer() {
 const [resultados, setresultado]=useState([])

 useEffect(()=>{

   const listaProd = new Promise((res, rej) =>{
     setTimeout(()=>{
       res([
        {id:0 , nombre:"tv",precio: 50000, imagen:'../imagenes/Logo.png'},
        {id:1 ,nombre:"notebook",precio: 72000, imagen:'src/imagenes/notebook.jpg'},
        {id:2 ,nombre:"ventilador",precio: 1000,imagen:'./imagenes/ventilador.jpg' },
        {id:3 ,nombre:"tostadora",precio: 3200, imagen:'src/imagenes/tostadora.png'},
        {id:4 ,nombre:"termo",precio: 9000, imagen:'./imagenes/termo.jpg'},
        {id:5 ,nombre:"heladera", precio: 80000, imagen:'../imagenes/heladera.jpg'}
    ]);
     },2000);
   }); 

listaProd
.then((resul) => {
setresultado(resul);
})

.catch((error)=>{
  setresultado(error);
})
})

    return (
   <>  <div className='titulo'>
    <h1>nombre comercio</h1>
    </div>
    <div>
      <ItemList listaProd={resultados} />
    </div>
   
    </>
    );
}

export default ItemListContainer;