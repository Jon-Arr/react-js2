import { CartContext } from "./CartContext"
import { useState, useEffect } from "react"

const CartProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [productsQuantity, setProductQuantity] = useState([])

    const addItem = (product, quantity) => {
      if(isInCart(product.id)){
        const newProducts = products.map((item) => {
          if(item.id === product.id){
            return{
              ...item,
              quantity: item.quantity + quantity,
            }
          }
          return item
        })
        setProducts(newProducts)
        return
      }
        setProducts([...products, {...product, quantity,},])
    }

    const removeItem = (productId) => {
      setProducts(products.filter((product) => product.id !== productId))
    }

    useEffect(() => {
        setProductQuantity(
            products.reduce((acc, product) => acc + product.quantity, 0),0
        )
    }, [products])

    
    const clear = () => {
      setProducts([])
    }

    const isInCart = (id) =>{
      return products.some((product) => product.id === id)
    }

  return (
    <CartContext.Provider value={{products, addItem, productsQuantity, clear, removeItem}}> 
    {children}
    </CartContext.Provider>
  )
}

export default CartProvider