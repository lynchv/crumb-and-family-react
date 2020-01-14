import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

import storeFactory from './store'
import { fetchItems } from './store/actions'

const store = storeFactory()
window.store = store
// Getting all items from the API on start up
store.dispatch(fetchItems())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
