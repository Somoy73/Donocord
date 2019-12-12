import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
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

    fetch(`http://localhost:4007/users/org?t=${t}`)
      .then(res => res.json())
      .then(members => this.setState({ members: members }, ()=> console.log("Success")))
      .catch(() => {
        this.setState({
          message: 'You need to be logged in to access this page.'
        });
      });
  }
  render(){
    let optionItems = this.state.members.map((members) =>
                <option key={members.type}>{members.type}</option>
            );
    return (
      this.state.message
      ? <div>
        
          <div className="divC"><h1 className="bg-text">{this.state.message}</h1>
          </div>

        </div>
        :
        <div className="container" style={{marginTop: 200}}>
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <Select>{optionItems}</Select>
            </div>
            <div className="col-md-4"></div>
            </div>
        </div>
        
    );
  }
}

