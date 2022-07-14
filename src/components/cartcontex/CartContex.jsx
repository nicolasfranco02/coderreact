import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContex = createContext()

const {Provider} = CartContex;

const MyProvider = ({children})=>{
//guardar en localstorage

const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? [])

    useEffect(() => 
    {
        localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart]);

//metodo some (true o false) ItemDetail- se encarga si hay un prodcto a agregar ya esta o no en el carro
const isInCart =(id) =>{
    return cart.findIndex(items=>items.id=== id)
}
// itemDetail se encarga de agregar el prod selec al cxart sin pisar a los agregados, y si es duplicado, 
const agregarAlCArrito=(item, contador)=>{

let posicion= isInCart(item.id)

if (posicion ==-1){
    setCart([...cart,{...item,contador:contador}])
}else{
    const aux2 = [...cart]
     aux2[posicion].contador = aux2[posicion].contador + contador
    setCart(aux2)
}

}
useEffect(()=>{
    
},[cart])






//vaciar carrito en cart boton
const emptyCart = () =>{
    setCart([]);
}


//metodo filter en cart se encarga en funcion del id
const deleteItem =(id)=>{
    return setCart(cart.filter(items=> items.id !==id))
}


//metodo reduce -card whitget retorna la contador de unicaddes de nuestro cart
const getItemQty = ()=>{
return cart.reduce((acc , items)=> acc += items.contador, 0)
}


//metodo reduce cart valor total de compra
const getItemPrice =() =>{

    return cart.reduce((acc , items)=>acc += items.contador * items.precio, 0)
}



    return <Provider value={{cart,agregarAlCArrito, isInCart,deleteItem,emptyCart,getItemPrice, getItemQty}}>{children}</Provider>
}

export default MyProvider