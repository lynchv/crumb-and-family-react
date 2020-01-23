import React from 'react'
import './Navigation.css'

import Icon from '../utils/Icon'
import UserDropdown from './userDropdown/UserDropdown'

import { Link } from 'react-router-dom';

const NavigationUi = ({user, itemsInCart, onShopDisplay, onLogOut}) => {

    return (
        <div className="nav-bar">
            <div className="ml-4 nav-content">
                <Link to='/home'>
                    <Icon icon='home' size="medium"/>
                </Link>
            </div>
            <div className="nav-content">
                <ul>
                    <Link to='/cupcakes'>
                        <Icon icon='cupcake'/>
                        <li className="nav-options" onClick={() => onShopDisplay("cupcakes")}>Cupcakes</li>
                    </Link>
                    <Link to='/cookies'>
                        <Icon icon='cookie'/>
                        <li className="nav-options" onClick={() => onShopDisplay("cookies")}>Cookies</li>
                    </Link>
                    <Link to='/about'>
                        <Icon icon='about'/>
                        <li className="nav-options">About</li>
                    </Link>
                    <Link to='/contact'>
                        <Icon icon='contact'/>
                        <li className="nav-options">Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="nav-content mr-4">
                <UserDropdown user={user} onLogOut={onLogOut}/>
                <Link to='/cart'>
                    <span>{itemsInCart === 0 ? "" : itemsInCart}</span>
                    <Icon icon='checkout' size="medium"/>
                </Link>
            </div>
        </div>
    )
}

export default NavigationUi
