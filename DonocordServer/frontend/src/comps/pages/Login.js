import React, { useState, Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../css/Login.css";
import { Redirect } from 'react-router-dom'
//files
import img from '../assets/img/loginbg.jpg';

class Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      Email: '',
      Password: '',
      msg: '',
      login: false
    };
    //this.routeChange = this.routeChange.bind(this);
  }
  validateForm = () =>{
    return this.state.Email.length > 0 && this.state.Password.length > 0;
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  loginUser = (e) =>{
      e.preventDefault();

      var data = {
          email: this.state.Email,
          password: this.state.Password
      }
      console.log(data)
      fetch(`/users/check?e=${data.email}&p=${data.password}`, {
          method: 'GET'
      }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(data) {
          console.log(data)    

          if(data == "success"){
            this.setState({msg: "You have logged in"});
            const flag = true;
            
          }

          console.log('TOKEN RCVD', data.token, ' ',data.flag,'user name ',data.name, 'user email ', data.email);
          if(data.token!=null){
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('loginFlag', data.flag);
            window.localStorage.setItem('user_name',data.name);
            window.localStorage.setItem('user_email',data.email);
            alert('Dear '+data.name+', You have successfully Logged in. Welcome Back!');
            window.location.reload();
          }
          
      }).catch(function(err) {
          console.log(err)
      });
      //if(window.localStorage.getItem('loginFlag')){this.routeChange()}
  }

  render(){
    return(
      window.localStorage.getItem('loginFlag')?  <Redirect to={'/'} />:
      <div>
          <header className="masthead" style={{backgroundImage: `url(${img})`}}>
          <div className="Login">
              <form onSubmit={e => this.loginUser(e)}>
                  <FormGroup controlId="email" bsSize="large">
                  <FormLabel><h4>Email</h4></FormLabel>
                  <FormControl
                      autoFocus
                      type="email"
                      value={this.state.Email}
                      onChange={e => this.setState({Email: e.target.value})}
                  />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                  <FormLabel><h4>Password</h4></FormLabel>
                  <FormControl
                      value={this.state.Password}
                      onChange={e => this.setState({Password: e.target.value})}
                      type="password"
                  />
                  </FormGroup>
                  <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                  Login
                  </Button>
              </form>
              <a href='/register'>Don't have an Account? Click here to register</a>
          </div></header>
      </div>
    );
  }
  
}
export default Login;