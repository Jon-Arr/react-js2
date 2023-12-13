import ItemDetail from "../../Components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const {id} = useParams()

  const fetchProduct = () =>{
    const db = getFirestore()
    const querySnapshot = doc(db, 'products', id)
    getDoc(querySnapshot)
      .then((res) => {
        setProduct({id: res.id, ...res.data()})
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div>
      <ItemDetail itemSelected={product}/>
    </div>
  )
}

export default ItemDetailContainer