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

export const cart = (state = [], action) => {
    switch (action.type) {
        case C.ADD_TO_CART:
            return [...state, action.payload]        
        case C.REMOVE_FROM_CART:
            return state.filter(item_id => item_id !== action.payload)     
        case C.CLEAR_CART:
            return []
        default:
            return state
    }
}

export default combineReducers({
    allItems,
    cart
})