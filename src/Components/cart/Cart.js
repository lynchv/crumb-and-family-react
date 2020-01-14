import { connect } from "react-redux"
import { removeFromCart } from "../../store/actions"
import CartUi from "./CartUi"

const mapStateToProps =  state => {
    return {
        items: state.cart
    }
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

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartUi)

export default Cart