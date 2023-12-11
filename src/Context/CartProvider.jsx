import { CartContext } from "./CartContext"
import { useState, useEffect } from "react"

const CartProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [productsQuantity, setProductQuantity] = useState([])

    const addItem = (product, quantity) => {
        setProducts([...products, {...product, quantity,},])
        
    }
    useEffect(() => {
        setProductQuantity(
            products.reduce((acc, product) => acc + product.quantity, 0),0
        )
    }, [products])

  return (
    <CartContext.Provider value={{products, addItem, productsQuantity}}> 
    {children}
    </CartContext.Provider>
  )
}

export default CartProvider