import "./styles.css"
import * as Icon from 'react-bootstrap-icons'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const CartWidget = () => {

    const {productsQuantity} = useContext(CartContext)

    return (
        <div className='cart-cont'>
            <Icon.BagCheck/>
            <h5>{productsQuantity}</h5>
        </div>
    )
}

export default CartWidget