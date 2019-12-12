import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel,Form } from "react-bootstrap";
import "../css/Login.css";
//import '../css/register.css'
import img from "../assets/img/loginbg.jpg"
export default class Project extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
        UserName: '',
        UserEmail: '',
        UserPassword: '',
        msg: ''
        }
    }
    validateForm =() => {
        return this.state.UserEmail.length > 0 && this.state.UserPassword.length > 0;
    }
    registerUser = (e) =>{
        e.preventDefault();
        var data = {
            name: this.state.UserName,
            email: this.state.UserEmail,
            password: this.state.UserPassword
        }
        console.log(data)
        fetch("/users/new", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data == "success"){
               this.setState({msg: "Thanks for registering"});  
            }
            alert("Thanks for registering!");
            window.location.reload();
        }).catch(function(err) {
            console.log(err)
        });
 
    }
 
    render() {
        return (          
            <div>
                <header className="masthead" style={{backgroundImage: `url(${img})`}}>
                <div className="Login"><form className="Login Form">
                    <label>
                    User Name:
                    <input
                        name="UserName"
                        type="text"
                        value={this.state.UserName}
                        onChange={e => this.setState({UserName: e.target.value})} />
                    </label>
                    <br />
                    <label>
                    Email   :
                    <input
                        name="UserEmail"
                        type="text"
                        value={this.state.UserEmail}
                        onChange={e => this.setState({UserEmail: e.target.value})} />
                    </label>
                    <br />
                    <label>
                    Password: 
                    <input
                        name="UserPassword"
                        type="password"
                        value={this.state.UserPassword}
                        onChange={e => this.setState({UserPassword: e.target.value})} />
                    </label>
                    <Button block bsSize="large" disabled={!this.validateForm()} onClick={e => this.registerUser(e)} type="submit">
                    Register
                    </Button>
                </form>
                </div></header>
                <a href='/login'>Already have an Account? Click here to login</a>
            </div> 

        );
  }
}

 