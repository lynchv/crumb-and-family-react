import { connect } from "react-redux"
import { clearNotification } from "../../store/actions"
import ErrorUi from "./ErrorUi"

const mapStateToProps =  state => {
    return {
        title: state.notification.title,
        message: state.notification.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClose() {
            dispatch(
                clearNotification()
            )
        }
    }
}

const Error = connect(mapStateToProps, mapDispatchToProps)(ErrorUi)

export default Error