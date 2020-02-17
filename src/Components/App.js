import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { connect } from "react-redux"
import { fetchItems, fetchItemCategories, logIn } from '../store/actions'

import Error from './error/Error'
import Navigation from './navigation/Navigation'
import Home from './home/Home'
import Shop from './shop/Shop'
import About from './about/About'
import Contact from './contact/Contact'
import Cart from './cart/Cart'
import Settings from './settings/Settings'
import Login from './login/Login'
import Register from './login/register';


const AppUi = ({user, getAllItems, getItemCategories, verifySessionLogin}) => {

    const isAdmin = user.is_admin ? user.is_admin : false
    const loggedIn = user.loggedIn

    useEffect(() => {
        // Get all the items & categories from the API
        getAllItems()
        getItemCategories()
        // automatically log user if session cookie is present
        verifySessionLogin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="hero">
            <div id='hero-overlay'>
                <Router>
                    <Error />
                    <Navigation />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/cupcakes" render={() => <Shop shopCategory='cupcakes' />} />
                        <Route path="/cookies" render={() => <Shop shopCategory='cookies' />} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/settings" component={ isAdmin ? Settings : Home} /> 
                        <Route path="/login" component={ loggedIn ? Home : Login} />
                        <Route path="/register" component={ loggedIn ? Home : Register} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

const mapStateToProps =  state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllItems() {
            dispatch(fetchItems())
        },
        getItemCategories() {
            dispatch(fetchItemCategories())
        },
        verifySessionLogin() {
            dispatch(logIn("", "", false))
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppUi)

export default App