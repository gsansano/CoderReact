import React, { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartlist] = useState([])

    const agregarCarrito = (item) => {

        const index = cartList.findIndex(i => i.id === item.id)
  
          if (index > -1) {
            const oldQy = cartList[index].cantidad
  
            cartList.splice(index, 1)
            setCartlist([...cartList, { ...item, cantidad: item.cantidad + oldQy}])
          } else {
            setCartlist([...cartList, {...item, cantidad: item.cantidad}])
          }
      }


      const precioTotal =()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
      }

    const cantidadItem = () =>{
        return cartList.reduce( (acum, prod)=> acum = acum + prod.cantidad , 0)
    }


    const quitarProd = (itemIncart) => {
        const index = cartList.findIndex(i => i.id === itemIncart.id);
        const cartCopy = Array.from(cartList);
    
        if (index >= 0) {
          cartCopy.splice(index, 1);
          setCartlist(cartCopy);
        }
    }



    const vaciarCart=()=>{
        setCartlist([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            precioTotal,
            cantidadItem,
            quitarProd,
            vaciarCart
        }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider




















/* 
export const CartProvider= ({children})=>{
    const [cart, setCart] = useState ([])
    const AddToCart = (product)=>{
    setCart([...cart, product])
}
const IsInCart = (id)=>{
    return cart.some ((prod) =>prod.id ===id)
}
    return (
    <CartContext.Provider value= {{
        AddtoCart,
        IsInCart
    }}>

        {children}
    </CartContext.Provider>
)
} */