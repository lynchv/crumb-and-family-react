import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from "react-redux"

import Navigation from './navigation/Navigation'
import Home from './home/Home'
import Shop from './shop/Shop'
import About from './about/About'
import Contact from './contact/Contact'
import Cart from './cart/Cart'
import Settings from './settings/Settings'
import Login from './login/Login'


const AppUi = ({isAdmin}) => {

    console.log(isAdmin)

    return (
        <div id="hero">
            <div id='hero-overlay'>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/cupcakes" render={() => <Shop shopCategory='cupcakes' />} />
                        <Route path="/cookies" render={() => <Shop shopCategory='cookies' />} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/settings" component={ isAdmin ? Settings : Login} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

const mapStateToProps =  state => {
    return {
        isAdmin: state.user.loggedIn
    }
}

const App = connect(mapStateToProps)(AppUi)

export default App