import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
class Contact extends Component{
    
    constructor(props){
        super(props);

        this.state ={
            name: '',
            email: '',
            phone: '',
            message: ''
        };
    }
    sendMessage = (e) =>{
        var data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.phone,
            message: this.state.message
        }
        console.log(data)
        fetch("/users/comment", {
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
        }).catch(function(err) {
            console.log(err)
        });
 
    }
 
    render(){
        return(
            <div>
                 <section className="page-section" id="contact">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Contact With Donocord to Learn and Enquire about Any Queries You have.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input 
                                    className="form-control" 
                                    id="name" type="text" placeholder="Your Name *" 
                                    required="required" data-validation-required-message="Please enter your name."
                                    value={this.state.name}
                                    onChange={e => this.setState({name: e.target.value})}
                                    />
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" 
                                    id="email" 
                                    type="email" placeholder="Your Email *" required="required" 
                                    data-validation-required-message="Please enter your email address."
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}
                                    />
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" 
                                    id="phone" type="tel" placeholder="Your Phone *" 
                                    required="required" data-validation-required-message="Please enter your phone number."
                                    value={this.state.phone}
                                    onChange={e => this.setState({phone: e.target.value})}
                                    />
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" 
                                    id="message" placeholder="Your Message *" 
                                    required="required" data-validation-required-message="Please enter a message."
                                    value={this.state.message}
                                    onChange={e=> this.setState({message: e.target.value})}
                                    />
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <Button block bsSize="large"  onClick={e => this.sendMessage(e)} type="submit">
                                Send Message
                            </Button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Contact;