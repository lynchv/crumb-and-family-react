import React from 'react';
import './App.css';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PageNavigation from './AppNavigation'
import Home from './home/Home'
//import Shop from './shop/Shop'

function App() {
  return (
    <div id="hero">
      <div id='hero-overlay'>
        <PageNavigation />
        <Home />
      </div>
    </div>
  )
}

export default App;

{/* <Router>

<Switch>
  <Route path="/home" component={Home}/>
  <Route path="/cupcakes" component={Shop}/>
  <Route path="/" component={Home}/>
</Switch>
</Router> */}