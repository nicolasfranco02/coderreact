import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {
 

  const {id}= useParams();
  useEffect( ()=>{
      console.log(id)
  }, [id])

const [productos , setProductos]= useState({});
  useEffect(()=>{
      if(id==100){
          setProductos({id:100 , name: "juan maria", precio: "gold"})
      }else if(id ==101){
        setProductos({id:101 , name: "juan maria", precio: "gold"}) 
      }
  })
  
  return (
    <div>{productos && <div>{JSON.stringify(productos)}</div>}</div>
  )
}
