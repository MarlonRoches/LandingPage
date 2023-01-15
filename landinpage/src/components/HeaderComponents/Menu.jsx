import "../../styles/HeaderStyles/Menu.scss"
import {NavLink} from "react-router-dom"

function Menu(params) {
    return(<>
    <div className="MenuContainer">
           <ul>
            <li><NavLink exact className="Menu-NavLink"  to="/Home" >Inicio</NavLink></li>
            <li><NavLink exact className="Menu-NavLink" to="/About"  >About</NavLink></li>
            <li><NavLink exact className="Menu-NavLink" to="/Services"  >Services</NavLink></li>
            <li><NavLink exact className="Menu-NavLink" to="/Portfolio"  >Portfolio</NavLink></li>
            <li><NavLink exact className="Menu-NavLink" to="/Blog"  >Blog</NavLink></li>
            <li><NavLink exact className="Menu-NavLink" to="/Contact"  >Contact</NavLink></li>
           </ul>
    </div>
    </>)
}
export default Menu;