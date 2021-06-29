import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../comps/css/search.css';
class PageWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            flag: window.localStorage.getItem('loginFlag'),
            searchQ: ''
        }
        console.log(this.state.flag);
    }
    componentDidMount(){
        this.setState({flag: window.localStorage.getItem('loginFlag')});
        //console.log(this.state.flag);
    }
    render(){
        return(
            //Navigation//
            this.state.flag? 
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">Donocord</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/portfolio"><p style={{fontSize:25}}>Portfolio</p></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/about"><p style={{fontSize:25}}>About</p></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/search"><p style={{fontSize:25}}>Search</p></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger"  to="/logout"><p style={{fontSize:25}}>Log Out</p></Link>
                            </li>
                            
                        </ul>
                    </div>
                    </div>

                </nav>
                {this.props.children};
            </div> 
            :
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">Donocord</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/portfolio"><p style={{fontSize:25}}>Portfolio</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/about"><p style={{fontSize:25}}>About</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/search"><p style={{fontSize:25}}>Search</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/login"><p style={{fontSize:25}}>Sign up/in</p></Link>
                        </li>
                        
                    </ul>
                </div>
                </div>

            </nav>
            {this.props.children};
        </div>
        );
    }
}

export default PageWrapper;
{/* <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/contact"><p style={{fontSize:25}}>Contact</p></Link>
                        </li> */}
                        // <li className="nav-item">
                        //     <Link className="nav-link js-scroll-trigger" to="/team"><p style={{fontSize:25}}>Team</p></Link>
                        // </li>