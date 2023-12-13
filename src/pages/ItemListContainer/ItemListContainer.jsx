import './styles.css';
import ItemList from '../../Components/ItemList/ItemList';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import Loader from '../../Components/Loader/Loader';
import { getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { listapi } from '../api'

const ItemListContainer = ({ greeting }) => {
    const colorTheme = useContext(ThemeContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const upToFirestore = async () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'products')

        const promises = listapi.map((product) => {
            const newProduct = {
                ...product,
                stock: 60,
            }
            return addDoc(ordersCollection, newProduct)
        })

        try{    
            await Promise.all(promises)
            console.log ("Datos cargados")
        }catch(error){
            console.log("Error subiendo datos", error)
        }
    }

    const fetchProducts = () => {
        const db = getFirestore()
        const productQuery = collection(db, 'products')
        const querySnapshots = !id ? productQuery : query(productQuery, where('category', '==', id))

        getDocs(querySnapshots)
            .then((response) => {
                const products = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [id])



    return loading ? <Loader /> :
        <div className='cont-item-lists' style={{ backgroundColor: colorTheme.theme === 'light' ? 'white' : 'gray', }}>
            <h2>{greeting}</h2>
            <ItemList productList={products} />
            <button onClick={upToFirestore}>Subir data</button>
        </div>

}

export default ItemListContainer