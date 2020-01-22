import { connect } from "react-redux"
import { logIn } from "../../store/actions"
import LoginUi from "./LoginUi"

const mapStateToProps =  state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin(loginInfo) {
            dispatch(
                logIn(loginInfo)
            )
        }
    }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUi)

export default Login