import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PageNavigation from './AppNavigation'
import Home from './home/Home'
import Shop from './shop/Shop'
import About from './about/About'
import Contact from './contact/Contact'
import Cart from './cart/Cart'

function App() {

  const [shopItems, setShopItems] = useState([])

  const onShopChange = (item) => {
    setShopItems(shopItems.concat(item))
  }

  return (
    <div id="hero">
      <div id='hero-overlay'>
        <Router>
          <PageNavigation itemsInShop={shopItems.length}/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/cupcakes" render={() => <Shop itemsType='cupcakes' onShopChange={onShopChange}/>}/>
            <Route path="/cookies" render={() => <Shop itemsType='cookies' onShopChange={onShopChange}/>}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;