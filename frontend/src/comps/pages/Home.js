import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//Pages
import Portfolio from '../common/Portfolio';
import Team from './Team';
class Home extends Component{

    render(){
        return(
            <div>
                <Header 
                    title="Welcome to Donocord!"
                    subtitle="Where We Make Donations Simple"
                    buttonText="Tell Me More"
                    link='/about'
                    showButton={true}
                    image={image}

                />

                <Portfolio />
                <Team />
            </div>
            
        );
    }
}

export default Home;