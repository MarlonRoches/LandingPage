import MainButton from "../components/Commons/MainButton"
import TypingText from "../components/HomeComponents/TypingText"
import Constants from "../Helpers/Constants"
import "../styles/HomeStyles/HomeStyle.scss"
import BackgoundGifLocal from "../images/Gifs/HomeGif.gif"
import MiFoto from "../images/Yo-Transparent.PNG"
import arte1 from "../images/arts/arte1.png"

function Home() {
    return (<>
        <section className="HomeSection">
                <BackgoundGif/>
            <div className="HomeContainer">
                <div className="HomeInfo">
                    {/* <div  className="in-flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div> */}
                    
                    <div className="in-flex"><HomeText/></div>
                    <div className="in-flex"><HomeImage/></div>
                    <div className="in-flex"><InfoImage/></div>
                    <div className="in-flex"><InfoText/></div>
                    {/* <HomeText/>
                    <HomeImage/> */}
                </div>
            </div>
        </section>
        
        </>)
}

function BackgoundGif(params) {
    return(
        // <img className="BackgoundGif" src="https://i.pinimg.com/originals/95/57/8c/95578cdd71c7280492476da49836a083.gif" alt="fondo"/>
        <img className="BackgoundGif" src={BackgoundGifLocal} alt="fondo"/>
    )
}
function HomeText(params) {
    return(
        <div className="HomeText-Container"> 
            <h1 className="ColorTitle">HI THERE,</h1>
            <TypingText/>
            <p className="BoldText">{Constants.Resume}</p>
            <br/>
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
function InfoText(params) {
    return(
        <div className="InfoText-Container">
            <h1 >asdasdasd</h1>
            <h1 className="WhiteTitle">Hello, I Am <span className="ColorSubTitle">Developer</span></h1>
            
            {/* <TypingText/> */}
            <p className="BoldText">{Constants.Resume}</p>
            <ul>
                <li>Name        :       Roton Mirza</li>
                <li>Age         :       30</li>
                <li>Address : East London, England</li>
                <li>Phone : + (00) 223 126 499</li>
                <li>e-mail : email@example.com</li>
                <li>Freelance : Available</li>
            </ul>
            <MainButton Text ="Get CV"/>

        </div>
    )
}
function InfoImage(params) {
    return(<div className="InfoImage-Container">
    {/* <img className="MyPhoto" src="https://i.pinimg.com/originals/5c/44/a9/5c44a984fef2f369360b159fa457c836.png" alt="mi foto"/> */}
    <img className="Arte1" src={arte1} alt="arte1"/>
    
</div>)
}
export default Home;
