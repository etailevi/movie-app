import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/favicon.svg'

export function AppHeader() {
    return (
        <div className='app-header'>
            <NavLink to='/'>
                <div className="logo">
                    <img src={Logo} alt="logo" /> Movies App
                </div>
            </NavLink>
            <nav className='main-nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movie'>Our Movies</NavLink>
            </nav>
        </div>
    )
}
