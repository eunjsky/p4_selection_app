import React from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";



function Navbar(props){

    let nav = props.currentUser ?
    <div className="nav">
        <div>navbar</div>
        <ul>
            <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/selections' activeClassName="active">Selections</NavLink></li>
            <li><NavLink to='/selections/new' activeClassName="active">Add Selections</NavLink></li>
            <li><span className="user">Welcome {props.currentUser.name}</span></li>
            <li><NavLink to='login'className='NavBar-link' onClick={props.handleLogout}>LOG OUT</NavLink></li>
        </ul>
    </div> 
    :
    <div className="nav">
        <div>navbar</div>
        <ul>
            <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/login' activeClassName="active">Login</NavLink></li>
            <li><NavLink to='/signup' activeClassName="active">Signup</NavLink></li>
        </ul>
    </div> 

    return nav
}

export default Navbar