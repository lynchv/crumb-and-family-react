import { connect } from "react-redux"
import { register } from "../../store/actions"
import RegisterUi from "./registerUi"

const mapStateToProps =  state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onRegister(registerInfo) {
            dispatch(
                register(registerInfo)
            )
        }
    }
}

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterUi)

export default Register