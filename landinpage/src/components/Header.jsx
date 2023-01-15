import "../styles/Header.scss"
import logo from "../images/Roches white.png"
import menuIcon from "../images/assets/whiteMenu.png"
import Menu from "./HeaderComponents/Menu";
import { useEffect, useState, useRef } from "react";

function Header(params) {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
      function menuSelector(){
        if (windowSize[0]> 900) {
            return <Menu/>
        } else {
            return <MenuDesplegable/>
        }
      }
    return (<>
    <section>
        <div className="headerContainer">
            <header>
               <img src={logo} alt="Mi logo"/>
               {/* <p>Width: {windowSize[0]}</p>
               <p>Height: {windowSize[1]}</p> */}
      {menuSelector()}
     
            </header>
        </div>
    </section>
    </>)
}

function MenuDesplegable() {
    return (<div className="MenuDesplegable-Container">
        <img className="MenuDesplegable" src={menuIcon} alt="menu icon"/>
    </div>)
}
export default Header;
