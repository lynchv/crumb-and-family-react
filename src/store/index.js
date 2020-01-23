import persistedReducer from "./reducers"

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import { createStore, applyMiddleware } from 'redux'


export const store = createStore (
	persistedReducer,
	applyMiddleware(thunk, logger)
)

export const persistor = persistStore(store)