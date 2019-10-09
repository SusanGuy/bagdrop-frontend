import React from 'react'
import Nav from '../components/nav'
import '../main.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            errorMessage:'',

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.responseGoogle=this.responseGoogle.bind(this);
    }
    

    handleSubmit(event){
        event.preventDefault();
        const {username,password} =this.state
        axios({
            url:'https://bagdrop.herokuapp.com/users/signin',
            method:'POST',
            data:{
                username,
                password
            }
        }).then((response)=>{
            // const isAuthenticated=response.data.isAuthenticated;
            // window.localStorage.setItem('isAuthenticated', isAuthenticated)
            this.props.history.push('/dashboard')
        }).catch((error)=>{
            this.setState({
                errorMessage:error.response.data.message
            })

        });
    }
    handleChange(event){
        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }

    responseGoogle= (response)=>{
        console.log(response);
    }

    render(){
        const isAuthenticated= window.localStorage.getItem('isAuthenticated')

        if(isAuthenticated){
            return <Redirect to='/dashboard' />
        }

        

    return (
        <div>
            <Nav/>
            <div className="drppnt">
        <h2 className="heading">Login</h2>
        <div className="card">
            <div className="container">
                <form onSubmit={this.handleSubmit} className="searchform">
                    <label>Username</label><br/>
                    <input type="text" required placeholder="Username" name='username' onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type='password' required placeholder="Enter your password" name='password' onChange={this.handleChange}/>



                    <br/><button className="submitbutton">Log in</button>

                    <div>Or, Signin with Google</div>
                    
                    <GoogleLogin
    clientId="281552851493-ef6skro3kbqs1e52gcv2vd9uj4e6ssr2.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
    theme='dark'
  />
                </form>
                <p>

                </p>{this.state.errorMessage}

            </div>

        </div>

    </div>

    <script src='https://apis.google.com/js/platform.js' async defer></script>
        </div>

        
    )
    }
}

export default Signin;