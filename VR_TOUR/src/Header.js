import React from 'react'
import './Header.css' ;
import logo from './Hio.png'
function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="" />
            <b >Experiences</b>
            <b >events</b>
            <b>FAQ</b>
            <b>Contact</b>
        </div>
    )
}

export default Header
