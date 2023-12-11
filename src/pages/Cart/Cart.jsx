import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import Item from "../../Components/Item/Item"
import './styles.css'

const Cart = () => {

  const { products, clear } = useContext(CartContext)

  return (
    <div className="container">
      <h1>Mochila</h1>
      <button onClick={clear}>Vaciar Mochila</button>

      {products.length > 0 ? (
        <div >
          {products.map((product) => {
            return (
              <Item
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                stock={product.stock}
              />
            )

          })}
        </div>
      ) : (
        <h2>No hay items en la mochila!</h2>
      )
      }
    </div>
  )
}

export default Cart