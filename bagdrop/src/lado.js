import React from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';


function Lado() {
  return (
    <div>
    <header className="head">
      <img className="logo" src={logo} alt="logo" />
    <nav>
        <ul className="nav_links">
            <li><a href="login.html">Ma Render Bhaye</a></li>
            <li><a href="signup.html">Register</a></li>
            <li><a href="login.html">Login</a></li>
        </ul>
    </nav>
      <a className="button"><button>Contact</button>  </a>
  </header>
    <div className="drppnt">
        <h2 className="heading">Login</h2>
        <div className="card">
            <div className="container">
                <form className="searchform">
                    <label>Username</label><br/>
                    <input type="text" placeholder="Username"/>
                    <label>Password</label>
                    <input type='password' placeholder="Enter your password" />
                    <label><input type='radio' name='type' value='host' />Host</label>
                    <label><input type="radio" name='type' value='dropper'/>Dropper</label> <br />
                   
                    
                    <br /><button className="submitbutton">Log in</button>
                    
                </form>
                
            </div>
            
        </div>
        
    </div>
    </div>
  );
}

export default Lado;
