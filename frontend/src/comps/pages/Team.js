import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//files
import img1 from '../assets/img/team/somoy.jpg';
import img2 from '../assets/img/team/nafis.jpg';
import TeamProfile from '../common/TeamProfile';

const team = [
    {name: 'Somoy Subandhu Barua', role: 'Lead Developer', image: img1, fblink: 'https://www.facebook.com/somoy6'},
    //{name: '', role: '', image: '', fblink: ''},
    {name: 'Nafis Mostafa', role: 'Kamla', image: img2, fblink: 'https://www.facebook.com/nafis.mostafa'}

];

class Team extends Component{

    render(){
        return(
            <section class="bg-light page-section" id="team">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted"></h3>
                    </div>
                </div>
                <div class="row">
                    {team.map((item,index) =>{
                                return <TeamProfile {...item} key={index}/>
                    })}
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                    <p class="large text-muted">We are Both from CSE370 Sec-02 (Fall 19)</p>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}
export default Team;