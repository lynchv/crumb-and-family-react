import C from './actionType'
import { combineReducers } from 'redux'


export const allItems = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ITEM:
            return [...state, action.payload]            
        case C.REMOVE_ITEM:
            return state.filter(item => item.item_id !== action.payload)     
        default:
            return state
    }
}

export const shopCategory = (state = "cupcakes", action) => {
    switch (action.type) {
        case C.SET_SHOP_CATEGORY:
            return action.payload
        default:
            return state
    }
}

export const cart = (state = [], action) => {
    switch (action.type) {
        case C.ADD_TO_CART:
            return [...state, action.payload]        
        case C.REMOVE_FROM_CART:
            const i = action.payload
            return state.slice(0, i).concat(state.slice(i + 1, state.length))    
        case C.CLEAR_CART:
            return []
        default:
            return state
    }
}

export default combineReducers({
    allItems,
    shopCategory,
    cart
})