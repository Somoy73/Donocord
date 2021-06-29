import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//Pages
class Logout extends Component{
    componentDidMount(){
        if(window.localStorage.getItem('loginFlag')!=null){
            window.localStorage.removeItem('loginFlag');
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user_name');
            window.localStorage.removeItem('user_email');
            window.localStorage.setItem('adminFlag',null);
            window.location.reload();
        }
    }
    render(){
        return(
            <div>
                <Header 
                    title="Thank You For Being With Us."
                    subtitle="We hope to see you again."
                    buttonText="Go Back To Home"
                    link='/'
                    showButton={true}
                    image={image}

                />

            
            </div>
            
        );
    }
}

export default Logout;