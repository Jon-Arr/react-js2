import imgCarga from "./pokeload.gif"

const Loader = () => {

    return (
        <div className='cont-item-list'>
            <img className="cargando" alt={"Cargando"} src={imgCarga} />
        </div>
    )
}

export default Loader