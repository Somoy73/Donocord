import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import DIV from '../css/div.css';
import tab from '../css/table.css';
import img1 from '../images/picture.jpg';
import { withRouter } from 'react-router-dom';

export default class oldhome extends Component{
    constructor(props){
      super(props)
      this.state= {
      members: [],
      message: ''
    };
    
  }
  componentDidMount() {
    const t = window.localStorage.getItem('token');

    if (!t) {
      this.setState({
        message: 'You need to be logged in to access this page.'
      });

      return;
    }

    fetch(`http://localhost:4007/users/oldhome/don?t=${t}`)
      .then(res => res.json())
      .then(members => this.setState({ members: members }, ()=> console.log("Success")))
      .catch(() => {
        this.setState({
          message: 'You need to be logged in to access this page.'
        });
      });
  }
  render(){
    return (
      this.state.message
      ? <div>
        
          <div className="divC"><h1 className="bg-text">{this.state.message}</h1>
          </div>

        </div>
        :
        
        <div className="limiter">
        <div className="bg-image"  style={{backgroundImage: `url(${img1})`}}>
        <div className="container-table100">
        <div className="wrap-table100">
            <div className="table100">
                <table className="">
                    <thead>
                        <tr>
                            <th>Organization Name</th>
                            <th>Organization Type</th>
                            <th>Total Donation Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.members.map(member =>
                        <tr key={member.Organization_id}>
                        <td>{member.name} </td>
                        <td>{member.type} </td>
                        <td>{member.amount}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <br/>
                 <Link to='/'>
                    <Button renderAs="button">
                        <span>Click to Go Back</span>
                    </Button>
                </Link>
            </div>
        </div></div></div></div>
    );
  }
  
}
