import C from './actionType'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


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

export const user = (state = {loggedIn: false}, action) => {
    switch (action.type) {
        case C.LOG_IN:
            return {loggedIn: true, ...action.payload}
        case C.LOG_OUT:
            return {loggedIn: false}
        default:
            return state
    }
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [cart, user]
}

const rootReducer = combineReducers({
    allItems,
    shopCategory,
    cart,
    user
})

export default persistReducer(persistConfig, rootReducer)