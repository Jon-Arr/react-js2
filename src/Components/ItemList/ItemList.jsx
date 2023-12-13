import { Link } from "react-router-dom"
import Item from "../Item/Item"
import './styles.css'

const ItemList = ({ productList }) => {
    return (
        <div className="container">
            {productList.map((product) => {
                return(
                    <Link to={'/item/'+ product.id} key={product.id} className="list-container">
                    <Item

                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image} 
                        stock={product.stock}
                    />
                </Link>
                )
                
            })}

        </div>
    )
}

export default ItemList