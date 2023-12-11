import './styles.css'

const Item = ({name, description, price, image, stock}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <img className='imgItem' alt={name} src={image} />
      <h3>{description}</h3>
      <h5>Stock: {stock}</h5>
      <p>${price}</p>
    </div>
  )
}

export default Item