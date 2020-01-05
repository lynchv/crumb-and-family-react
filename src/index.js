import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import storeFactory from './store'

import { Provider } from 'react-redux'
import App from './components/App'

const store = storeFactory()
window.store = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
