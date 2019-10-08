import React from 'react'
import Nav from '../components/nav'
import '../main.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom'


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

                </form>
                <p>

                </p>{this.state.errorMessage}

            </div>

        </div>

    </div>


        </div>
    )
    }
}

export default Signin;