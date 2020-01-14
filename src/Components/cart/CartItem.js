import { connect } from "react-redux"
import { removeFromCart } from "../../store/actions"
import CartItemUi from "./CartItemUi"

const mapStateToProps =  state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onItemRemove(itemIndex) {
            dispatch(
                removeFromCart(itemIndex)
            )
        }
    }
}

const CartItem = connect(mapStateToProps, mapDispatchToProps)(CartItemUi)

export default CartItem