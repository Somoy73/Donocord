import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import DIV from '../css/div.css';
import tab from '../css/table.css';
import img1 from '../images/picture.jpg';
export default class child extends Component{
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

    fetch(`http://localhost:4007/users/victim?t=${t}`)
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
                            <th>Person Name</th>
                            <th>Age</th>
                            <th>Financial Status</th>
                            <th>Organization Name</th>
                            <th>Organization Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.members.map(member =>
                        <tr key={member.vn}>
                        <td>{member.vn} </td>
                        <td>{member.va}</td>
                        <td>{member.vf}</td>
                        <td>{member.name}</td>
                        <td>{member.type}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <br/>
                 <Link to='/oldhome'>
                    <Button renderAs="button">
                        <span>Click to go Back</span>
                    </Button>
                </Link>
        </div></div></div></div>
    );
  }
}

