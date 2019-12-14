import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PageNavigation from './page-navigation'
import Home from './home/Home'
import Shop from './shop/Shop'

function App() {
  return (
    <Router>
      <PageNavigation />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/cupcakes" component={Shop}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
