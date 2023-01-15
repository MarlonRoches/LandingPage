import Constants from "../../Helpers/Constants"
import "../../styles/HomeStyles/HomeTextContent.scss"
import Typical from "react-typical"
function TypingText() {
    return(<>
        <span className="TypingText">I Am </span>
        <Typical className="TypingText"
                steps={[
                    Constants.Engineer,
                    Constants.TypicalLoopTime,
                    Constants.Front,
                    Constants.TypicalLoopTime,
                    Constants.Back,
                    Constants.TypicalLoopTime,
                    ]}
                loop={Constants.loop}
                wrapper="span"
            />
            </>
        )
}
export default TypingText