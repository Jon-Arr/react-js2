import './styles.css';
import ItemList from '../../Components/ItemList/ItemList';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import Loader from '../../Components/Loader/Loader';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams

    const fetchProducts = () => {
        const db = getFirestore()
        const productQuery = collection(db, 'products')
        getDocs(productQuery)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) =>{
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [id])

    const colorTheme = useContext(ThemeContext)

    return loading ? <Loader /> :
        <div className='cont-item-list' style={{ backgroundColor: colorTheme.theme === 'light' ? 'white' : 'gray', }}>
            <h4>{greeting}</h4>
            <ItemList productList={products} />
        </div>

}

export default ItemListContainer