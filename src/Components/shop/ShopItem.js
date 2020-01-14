import { connect } from "react-redux"
import { addToCart } from "../../store/actions"
import ShopItemUi from "./ShopItemUi"

const mapStateToProps =  state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart(itemId) {
            dispatch(
                addToCart(itemId)
            )
        }
    }
}

const ShopItem = connect(mapStateToProps, mapDispatchToProps)(ShopItemUi)

export default ShopItem