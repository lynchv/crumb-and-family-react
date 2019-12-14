import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PageNavigation from './AppNavigation'
import Home from './home/Home'
import Shop from './shop/Shop'
import About from './about/About'
import Contact from './contact/Contact'

function App() {
  return (
    <div id="hero">
      <div id='hero-overlay'>
        <Router>
          <PageNavigation />
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/cupcakes" render={() => <Shop items='cupcakes' />}/>
            <Route path="/cookies" render={() => <Shop items='cookies' />}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;