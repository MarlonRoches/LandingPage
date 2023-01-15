import Constants from "../../Helpers/Constants"
import Typical from "react-typical"
function TypingText() {
    return(<>
        <h1 className="TypingText"> <b>I Am </b></h1>
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
                wrapper="h1"
            />
            </>
        )
}
export default TypingText