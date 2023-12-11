import './styles.css';
import ItemList from '../../Components/ItemList/ItemList';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext'

const ItemListContainer = ({ greeting }) => {

    const colorTheme = useContext(ThemeContext)

    const [productList, setProductList] = useState([])

    const fetchProducts = () => {
        fetch('./api.json')
            .then((response) => response.json())
            .then((json) => setProductList(json))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='cont-item-list' style={{ backgroundColor: colorTheme.theme === 'light' ? 'white' : 'gray', }}>
            <h4>{greeting}</h4>
            <ItemList productList={productList} />
        </div>
    )
}

export default ItemListContainer