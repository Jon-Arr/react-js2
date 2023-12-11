import './styles.css'

const Item = ({name, description, price, image}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <img className='imgItem' alt={name} src={image} />
      <h3>{description}</h3>
      <p>${price}</p>
    </div>
  )
}

export default Item