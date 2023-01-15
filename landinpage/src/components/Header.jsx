import "../styles/Header.scss"
import logo from "../images/Roches white.png"
import Menu from "./HeaderComponents/Menu";

function Header(params) {
    return (<>
    <section>
        <div className="headerContainer">
            <header>
               <img src={logo} alt="Mi logo"/>
              <Menu/>
            </header>
        </div>
    </section>
    </>)
}

export default Header;
