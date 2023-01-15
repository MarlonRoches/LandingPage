import MainButton from "../components/Commons/MainButton"
import TypingText from "../components/HomeComponents/TypingText"
import Constants from "../Helpers/Constants"
import "../styles/HomeStyles/HomeStyle.scss"
import MiFoto from "../images/Yo-Transparent.PNG"

function Home() {
    return (<>
        <section className="HomeSection">
                <BackgoundGif/>
            <div className="HomeContainer">
                <div className="HomeInfo">
                    {/* <div  className="in-flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div> */}
                    
                    <div className="in-flex"><HomeText/></div>
                    <div className="in-flex"><HomeImage/></div>
                    {/* <HomeText/>
                    <HomeImage/> */}
                </div>
            </div>
        </section>
        </>)
}

function BackgoundGif(params) {
    return(
        <img className="BackgoundGif" src="https://i.pinimg.com/originals/95/57/8c/95578cdd71c7280492476da49836a083.gif" alt="fondo"/>
    )
}
function HomeText(params) {
    return(
        <div className="HomeText-Container">
            <h1 className="ColorTitle">HI THERE</h1>
            <TypingText/>
            <p className="BoldText">{Constants.Resume}</p>
            <MainButton Text ="Hire Me"/>
            <br/>
        </div>
    )
}
function HomeImage(params) {
    return(<div className="MyPhoto-Container">
    {/* <img className="MyPhoto" src="https://i.pinimg.com/originals/5c/44/a9/5c44a984fef2f369360b159fa457c836.png" alt="mi foto"/> */}
    <img className="MyPhoto" src={MiFoto} alt="mi foto"/>
</div>)
}
export default Home;
