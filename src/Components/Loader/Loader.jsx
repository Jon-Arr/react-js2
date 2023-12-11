import imgCarga from "./pokeload.gif"
import { useEffect, useState } from "react"

const Loader = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    if (loading === true) {
        return (
            <div className='cont-item-list'>
                <img className="cargando" alt={"Cargando"} src={imgCarga} />
            </div>
        )
    }
}

export default Loader