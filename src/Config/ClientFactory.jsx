import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const ClientFactory = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const products = doc(db, "items", "9Lul0vCTcvAIjyP3GKrU")
        getDoc(products).then((snapshot) => {
            if(snapshot.exists()){
                setProducts({id: snapshot.id, ...snapshot.data()})
            }
        })
    }, [])

  return (
    <div>ClientFactory</div>
  )
}

export default ClientFactory