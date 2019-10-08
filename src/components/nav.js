import React from 'react';
import '../main.css';
import {Link} from 'react-router-dom';
import logo from '../bagdrop-logo.png';
const Nav = ()=>{
    return (
        <div>
        <header className="head">
        <img className="logo" src={logo} alt="logo"/>
        <nav>
            <ul className="nav_links">
             <Link className='new' to='/'> <li>Add a Drop point</li></Link>
             <Link className='new' to='/signup'><li>Register</li></Link>
             <Link className='new' to='/signin'><li>Login</li></Link>
            </ul>
        </nav>

         <button>Contact</button>
        </header>

        </div>
    )
}

export default Nav;