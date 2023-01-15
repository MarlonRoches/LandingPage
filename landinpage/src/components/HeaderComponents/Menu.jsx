import "../../styles/HeaderStyles/Menu.scss"
import {NavLink} from "react-router-dom"

function Menu(params) {
    return(<>
    <div className="MenuContainer">
           <ul>
            <li><NavLink className="Menu-NavLink"  to="/Home" ><b>HOME</b></NavLink></li>
            <li><NavLink className="Menu-NavLink" to="/About"  > <b>ABOUT</b></NavLink></li>
            <li><NavLink className="Menu-NavLink" to="/Services"  ><b>SERVICES</b></NavLink></li>
            <li><NavLink className="Menu-NavLink" to="/Portfolio"  ><b>PORTFOLIO</b></NavLink></li>
            <li><NavLink className="Menu-NavLink" to="/Blog"  ><b>BLOG</b></NavLink></li>
            <li><NavLink className="Menu-NavLink" to="/Contact"  ><b>CONTACT</b></NavLink></li>
           </ul>
    </div>
    </>)
}
export default Menu;