import ItemCount from '../ItemCount/ItemCount'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({itemSelected}) => {

  const stock = itemSelected?.stock
  const [count, setCount] = useState(1)
  const navigate = useNavigate()
  const {addItem} = useContext (CartContext)
  
  const addToCart = () =>{
    addItem(itemSelected, count)
  }

  const handleNavigation = () =>{
    navigate('/cart')
  }

  return (
    <div className='card-container'>
        <h6 className='card-title'>{itemSelected?.name}</h6>
        <img src={itemSelected?.image} alt={itemSelected?.name} />
        <div className='card-description'>
            <p>{itemSelected?.description}</p>
        </div>
        <p>${itemSelected?.price}</p>
          <span>Stock: {itemSelected?.stock}</span>

        <div>
          <ItemCount count={count} setCount={setCount} stock={stock} />
          <button onClick={addToCart}>Agregar a la mochila</button>
          <button onClick={handleNavigation}>Finalizar compra</button>
        </div>
    </div>
  )
}

export default ItemDetail