import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

import { store, persistor } from './store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { fetchItems } from './store/actions'

window.store = store
// Getting all items from the API on start up
store.dispatch(fetchItems())

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
