import NavigationUi from "./NavigationUi"
import { setShopCategory } from "../../store/actions"
import { connect } from "react-redux"

const mapStateToProps =  state => {
    return {
        itemsInCart: state.cart.length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShopDisplay(category) {
            dispatch(
                setShopCategory(category)
            )
        }
    }
}

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationUi)

export default Navigation