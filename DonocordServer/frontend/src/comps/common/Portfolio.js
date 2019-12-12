import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

//files
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';

const portfolio = [
    {link: '/drugrehab',title: 'Drug Rehabilitation', subtitle: '', image: img1},
    {link: '/oldhome' ,title: 'Old-Home', subtitle: '', image: img2},
    {link: '/women' ,title: 'Women Empowerment', subtitle: '', image: img3},
    {link: '/child' ,title: 'Child Welfare', subtitle: '', image: img4},
    //{title: 'Window', subtitle: 'Illustration', img: ''},
    //{title: 'Finish', subtitle: 'Illustration', img: ''},
];

class Portfolio extends Component{

    render(){
        return(
            <div>
                <section className="bg-light page-section" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Social Organizations Donocord is Interested in.</h3>
                            </div>
                        </div>
                        <div className="row">
                            {portfolio.map((item,index) =>{
                                return <PortfolioItem {...item} key={index}/>
                            })}
                        </div>
                    </div>
                   
                    
                </section>
            </div>
        );
    }
}

export default Portfolio;