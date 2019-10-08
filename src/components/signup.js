import React from 'react'
import Nav from '../components/nav'
import '../main.css';
import axios from 'axios';

class Signup extends React.Component{
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
            url:'https://bagdrop.herokuapp.com/users/signup',
            method:'POST',
            data:{
                username,
                password,
            }
        }).then((response)=>{
            this.props.history.push('/signin')
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
    return(
        <div>
        <Nav/>


        <div className="drppnt">
        <h2 className="heading">Sign Up</h2>
        <div className="card">
            <div className="container">
                <form onSubmit={this.handleSubmit} className="searchform" method='POST'>
                    <label>Username</label><br />
                    <input type="text" name='username' placeholder="Username" onChange={this.handleChange}/>
                    {/* <label>First Name</label>
                    <input type="text" name='fname' placeholder="First Name" />
                    <label>Last Name</label>
                    <input type="text" name="lname" placeholder="Last Name" />
                    <label>Email Address</label>
                    <input type="email" name='email'  placeholder="Email" />
                    <label>Confirmed Email address</label>
                    <input type="email" name='email1' placeholder="Enter email again" /> */}
                    <label>Password</label>
                    <input type='password' name='password' placeholder="Enter your password" onChange={this.handleChange}/>
                    <label><input type='radio' name='type' />Host</label>
                    <label><input type="radio" name='type' />Dropper</label> <br />


                    <br/><button className="submitbutton" type="submit">Submit</button>

                </form>
                <p>{this.state.errorMessage}</p>

            </div>

        </div>

    </div>
    </div>
    )
    }
}
export default Signup;