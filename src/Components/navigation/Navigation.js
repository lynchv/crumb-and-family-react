import NavigationUi from "./NavigationUi"
import { setShopCategory, logOut } from "../../store/actions"
import { connect } from "react-redux"

const mapStateToProps =  state => {
    return {
        itemsInCart: state.cart.length,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShopDisplay(category) {
            dispatch(
                setShopCategory(category)
            )
        },

        onLogOut() {
            dispatch(
                logOut()
            )
        }
    }
}

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationUi)

export default Navigation