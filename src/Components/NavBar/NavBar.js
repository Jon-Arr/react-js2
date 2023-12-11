import "./styles.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import { useContext } from "react"
import {ThemeContext} from "../../Context/ThemeContext"
import * as Icon from 'react-bootstrap-icons'

const NavBar = () => {

    const {setTheme} = useContext(ThemeContext)

    return (
        <div className="NavBar">
            <div className="cont-logo">
                <Link className="cont-logo" to={'/'}>
                <h1>Tienda Pokémon</h1>
                <img className="logo" alt="Imagen tienda Pokemon" src={"./tienda.webp"} />
                </Link>
                
                
                <Icon.BrightnessHigh className="themeIcon" onClick={() => setTheme((currentValue) => currentValue === 'light' ? 'dark' : 'light')}/>
                
            </div>
            <div className="div-list-cont">
                <ul className="list-cont">
                    <li><NavLink activeclassname="active" to={'/category/pokeballs'} className="cat-button">Pokeballs</NavLink></li>
                    <li><NavLink activeclassname="active" to={'/category/mts'} className="cat-button">MT</NavLink></li>
                    <li><NavLink activeclassname="active" to={'/category/stones'} className="cat-button">Piedra</NavLink></li>
                    <li><NavLink activeclassname="active" to={'/category/misc'} className="cat-button">Otros</NavLink></li>
                </ul>
            </div>
            <Link to={'/cart'}>
                <CartWidget />
            </Link>
        </div>
    )
}

export default NavBar