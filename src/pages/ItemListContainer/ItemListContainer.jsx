import './styles.css';
import ItemList from '../../Components/ItemList/ItemList';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Config/ConfigFirebase';
import Loader from '../../Components/Loader/Loader';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        const products = collection(db, "products")
        getDocs(products).then((snapshot) => {
            if (snapshot.size !== 0) {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            }
        })
    }, [])

    const colorTheme = useContext(ThemeContext)

    return loading ? <Loader /> :
        <div className='cont-item-list' style={{ backgroundColor: colorTheme.theme === 'light' ? 'white' : 'gray', }}>
            <h4>{greeting}</h4>
            <ItemList productList={products} />
        </div>

}

export default ItemListContainer