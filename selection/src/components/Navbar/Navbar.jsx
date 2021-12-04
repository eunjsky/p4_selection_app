import React from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";




function Navbar(props){

    let nav = props.currentUser ?
    <div className="nav">
        <div className="title">Select App</div>
        <ul> 
            <li className="hover"><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li className="hover"><NavLink to='/selections' activeClassName="active">Selection List</NavLink></li>
            <li className="hover"><NavLink to='/selections/new' activeClassName="active">Add Selection</NavLink></li>
            <li><span className="user">Welcome&nbsp;&nbsp;</span><span style={{color:"black"}}> {props.currentUser.name}&nbsp;💛 </span></li>
            <li className="hover"><NavLink to='login'className='NavBar-link' onClick={props.handleLogout}>Logout</NavLink></li>
        </ul>
    </div> 
    :
    <div className="nav">
        <div className="title">Select App</div>
        <ul>
            <li className="hover"><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li className="hover"><NavLink to='/login' activeClassName="active">Login</NavLink></li>
            <li className="hover"><NavLink to='/signup' activeClassName="active">Signup</NavLink></li>
        </ul>

    </div> 

    return nav
}

export default Navbar