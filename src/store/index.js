import appReducer from "./reducers"
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessage = store => next => action => {

	console.groupCollapsed(`dispatching action => ${action.type}`)

	let { allItems, cart } = store.getState()

	console.log(`

		Number of Items: ${allItems.length}
		allItems: ${allItems}
        cart: ${cart}
    
    `)

	console.groupEnd()

	return next(action)
}

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessage)(createStore)(appReducer, initialState)
}