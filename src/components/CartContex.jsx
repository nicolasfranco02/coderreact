{/*import { useState } from "react";
import { createContext } from "react";

export const CartContex = createContext()

const {Provider} = CartContex;

const MyProvider = ({children})=>{
const [cart , setCart]= useState ([])

//metodo some (true o false) ItemDetail- se encarga si hay un prodcto a agregar ya esta o no en el carro
const isinCart =(id) =>{
    return cart.some(x=>x.id=== id)
}


// itemDetail se encarga de agregar el prod selec al cxart sin pisar a los agregados, y si es duplicado, 
const addIten =(item, cantidad)=>{
    const newItem ={
        ...item,
        cantidad
    }

    if (isinCart(newItem.id) ){
        const findProduct = cart.find(x=> x.id === newItem.id)
        const productIndex = cart.indexOf(findProduct)
        const auxArray=[...cart]
        auxArray[productIndex].cantidad +=cantidad;
        setCart(auxArray)

    }else {
        setCart([...cart], newItem)
    }
}


//vaciar carrito en cart boton
const emptyCart = () =>{
    setCart([]);
}


//metodo filter en cart se encarga en funcion del id
const deleteItem =(id)=>{
    return setCart(cart.filter(x=> x.id!==id))
}


//metodo reduce -card whitget retorna la cantidad de unicaddes de nuestro cart
const getItemQty = ()=>{
return cart.reduce((acc , x)=> acc+=x.cantidad, 0)
}


//metodo reduce cart valor total de compra
const getItemPrice =() =>{

    return cart.reduce((acc , x)=>acc += x.cantidad * x.precio, 0)
}


    return <Provider value={{cart, isinCart, addIten,deleteItem,emptyCart,getItemPrice, getItemQty}}>{children}</Provider>
}

export default MyProvider*/}