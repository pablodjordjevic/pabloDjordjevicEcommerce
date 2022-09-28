import React from "react"
import { useState, useContext } from "react";

const CartContext = React.createContext([]); 
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, nuevaCantidad) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item , cantidad: nuevaCantidad})
        setCart(newCart)
    }

    console.log(cart)

    // const addProduct = (item, nuevaCantidad) =>{
    //     if(inInCart(item.id)){
    //         setCart(cart.map(product=>{
    //             return product.id === item.id ? {...product, nuevaCantidad: product.nuevaCantidad + nuevaCantidad}: product
    //         }));
    //     }else{
    //         setCart([...cart, {...item, nuevaCantidad}]);
    //     }
    // }

    // const inInCart = (id) => cart.find(product => product.id === id ) ? true : false;


    const clearCart = () =>{
        setCart([]);
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !==id));
    }

    const precioTotal = () => {
        return cart.reduce((acu, prev) => acu +prev.cantidad * prev.price, 0);
    }

    const totalProductos = () => cart.reduce((acumulador, prodActual) => acumulador +prodActual.cantidad,0);

  return (
    <CartContext.Provider value={{
        clearCart,
        addProduct,
        removeProduct,
        precioTotal,
        totalProductos,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider