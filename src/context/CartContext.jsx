import React, { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartlist] = useState([])

    const isInCart = (id) => {
        return cartList.some((item)=> item.id === id)
    }

    const agregarCart = (item)=> {
        setCartlist([...cartList, item])
    }

    const vaciarCart=()=>{
        setCartlist([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            isInCart,
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