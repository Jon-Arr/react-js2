import ItemDetail from "../../Components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const {id} = useParams()

  const fetchProduct = () =>{
    fetch(`./api.json/product.${id}`)
    .then((response) => response.json())
    .then((data) => setProduct(data))
    .catch((error) => console.log(error))
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