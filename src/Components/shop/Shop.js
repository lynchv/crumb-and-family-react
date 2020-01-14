import ShopUi from "./ShopUi"
import { connect } from "react-redux"

const mapStateToProps =  state => {
    return {
        items: state.allItems.filter( item => (item.category === state.shopCategory))
    }
}

const Shop = connect(mapStateToProps)(ShopUi)

export default Shop