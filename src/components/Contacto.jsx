import React from 'react'
import {useEffect, useState} from 'react';

export default function Contacto() {
  const [resultados, setresultado]=useState([])

  useEffect(()=>{
 
    const getDetail = new Promise((res, rej) =>{
      setTimeout(()=>{
        res(
          fetch("./productos.json")
        );
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
    <div>Contacto</div>
  )
}
