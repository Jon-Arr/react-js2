import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import Item from "../../Components/Item/Item"
import { Form } from "react-bootstrap"
import './styles.css'
import { collection, addDoc, getFirestore } from "firebase/firestore"

const Cart = () => {

  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const { products, clear, removeItem } = useContext(CartContext)
  const handleInput = (event) => {
    setFormValue({
      ...formValue, [event.target.name]: event.target.value,
    })
  }

  const validateForm = formValue.name === '' || formValue.phone === '' || formValue.email === ''

  const createOrder = (event) => {
    event.preventDefault()
    const db = getFirestore()
    const querySnapshot = collection(db, 'orders')

    const newOrder = {
      buyer: formValue,
      items: products.map((product) => {
        return {
          name: product.name,
          price: product.price,
          id: product.id,
          quantity: product.quantity,
        }
      }),
      date: new Date(),
      total: products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    }
    addDoc(querySnapshot, newOrder)
      .then((res) => alert('Compra exitosa!'))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <h1>Mochila</h1>
      <button onClick={clear}>Vaciar Mochila</button>

      {products.length > 0 ? (
        <div >
          {products.map((product) => {
            return (
              <div key={Item.id} className="products">
                <Item
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  stock={product.stock}
                />
                <button onClick={() => removeItem(product.id)}>Quitar</button>
              </div>
            )

          })}
        </div>
      ) : (
        <h2>No hay items en la mochila!</h2>
      )
      }

      <Form className="form">
        <Form.Group className="mb-3 formulario">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Nombre" value={formValue.name} onChange={handleInput} name="name" required/>
        </Form.Group>
        <Form.Group className="mb-3 formulario">
          <Form.Label></Form.Label>
          <Form.Control type="number" placeholder="Telefono" value={formValue.phone} onChange={handleInput} name="phone" required/>
        </Form.Group>
        <Form.Group className="mb-3 formulario">
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Email" value={formValue.email} onChange={handleInput} name="email" required/>
        </Form.Group>
        <button onClick={createOrder} className="confirmar" type="submit" disabled={validateForm}>
          Confirmar compra
        </button>
      </Form>

    </div>
  )
}

export default Cart