import React from 'react';
import '../main.css';
import {Link} from 'react-router-dom';

const Nav = ()=>{
    return (
        <div>
        <header className="head">
        <img className="logo" src="images/logo.png" alt="logo"/>
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