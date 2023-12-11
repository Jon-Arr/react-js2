// import { useEffect, useState } from "react"
// import Item from "../Item/Item"
// import './styles.css'
// import imgCarga from "./pokeload.gif"
// import { Link, useParams } from "react-router-dom"


// const ItemList = () => {
//     const [items, setItems] = useState([])
//     const { id } = useParams()

//     const fetchProducts = () => {
//         setTimeout(()=> {
//             fetch('./api.json')
//             .then((res) => res.json())
//             .then((json) => setItems(json))
//             .catch((error) => {console.log(error)})

//         }, 3000)        
//     }

//     useEffect(() => {
//         fetchProducts()
//     }, [])

//     useEffect(() => {
//         const filteredItems = items.filter((product) => {
//             const category = product.category
//             return category === id
//         })
//         setItems(filteredItems)
//     }, [id])

//   return (
//     items.length === 0 ?(
//         <img className="cargando" alt={"Cargando"} src={imgCarga} />
//     ):(
//     <div className="container">

//         {items.map((item) => {
//             return(
//             <Link to={'/item/' + item.id} className="list-container" key={item.id}>
//                 <Item name={item.name} description={item.description} price={item.price} image={item.image}/>
//             </Link>
//             )
//         })}
//     </div>
//   ))
// }

// export default ItemList

import { Link } from "react-router-dom"
import Item from "../Item/Item"
import './styles.css'

const ItemList = ({ productList }) => {
    return (
        <div className="container">
            {productList.map((product) => {
                return(
                    <Link to={'item/'+ product.id} key={product.id} className="list-container">
                    <Item

                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image} 
                    />
                </Link>
                )
                
            })}

        </div>
    )
}

export default ItemList