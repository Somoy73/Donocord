import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/about.jpg';
import {Link} from 'react-router-dom';


class About extends Component{
    
    render(){
        return(
            <div>
                <Header 
                    title="About Us"
                    subtitle='"Small Steps to a Great Initiative"'
                    buttonText="Tell Me More"
                    link='/services'
                    showButton={false}
                    image={image}

                />
                <section className="page-section" id="about">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Donocord is an Online Platform Where Donors can Learn more About Social Organizations.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>Drug Rehab Centers</h4>
                                <h5 className="subheading">To Create a Drug free World</h5>
                                </div>
                                <div className="timeline-body">
                                <p className="text-muted">We at Donocord Believe in the Notion of a World free of Addictive Drugs. And that is Why, We keep records of
                                Various Drug Rehabilitation centers, track of their initiatives and Thrive to Spread the Positivity. </p>
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>Old Home Rehab Centers</h4>
                                <h5 className="subheading">A New Home for The Elderly</h5>
                                </div>
                                <div className="timeline-body">
                                <p className="text-muted">The Growing Population of the Entire World will soon face a Huge backlash as a Large amount of Populace
                                accross the world will reach the age of retirement. To tackle this issue Donocord Prioritize your Valuable Donation at Old Rehab Centers</p>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>Women Empowerment</h4>
                                <h5 className="subheading">A Wise Mother, A Wise Nation</h5>
                                </div>
                                <div className="timeline-body">
                                <p className="text-muted">Donocord believes in the power of Women. This is why we keep tracks of Organizations that strive to Empower them.
                                Donors can search up various Organization that empowers women from our platform and Donate directly to them.
                                </p>
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>Child Welfare</h4>
                                <h4 className="subheading">Every Child Matters!</h4>
                                </div>
                                <div className="timeline-body">
                                <p className="text-muted"></p>
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <Link to="/register">
                                    <img className="rounded-circle img-fluid" src="img/about/5.jpg" alt=""/>
                                </Link>
                                
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default About;