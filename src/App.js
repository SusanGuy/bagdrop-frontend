import React from 'react';
import Dashboard from './components/dashboard'
import Signup from './components/signup'
import Signin from './components/signin'
import Home from './components/home'
import './main.css';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';






function App(){


return(
  <Router>
    <Switch>
    <Route path ='/' exact component={Home}/>
    <Route path ='/signup' component={Signup}/>
    <Route path ='/signin' component={Signin}/>
    <Route path ='/dashboard' component={Dashboard}/>
    </Switch>


    </Router>
)
}





export default App;
