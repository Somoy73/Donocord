import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import DIV from '../css/div.css';
import tab from '../css/table.css';
import img1 from '../images/picture.jpg';
import '../css/tables2.css';
import '../css/search.css';
export default class drugrehab extends Component{
    constructor(props){
      super(props)
      this.state= {
      members: [],
      message: '',
      sq: ''
    };
  }
  Search = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4007/users/search?q=${this.state.sq}`)
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
    //   this.state.message
    //   ? <div>
        
    //       <div className="divC"><h1 className="bg-text">{this.state.message}</h1>
    //       </div>

    //     </div>
    //     :
        <div className="divXX">
        <form onSubmit={e => this.Search(e)}>
            <input type="text" name="search" placeholder="Search.."
            value={this.state.sq}
            onChange={e => this.setState({sq: e.target.value})}
            />                 
        </form>
            <div className="table100">
                <table className="" id="customers">
                    <thead>
                        <tr>
                            <th>Organization Name</th>
                            <th>Organization Type</th>
                            <th>Start Date</th>
                            <th>Ownership</th>
                            <th>Involvement Category</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.members.map(member =>
                        <tr key={member.Organization_id}>
                        <td>{member.Organization_name} </td>
                        <td>{member.Organization_type}</td>
                        <td>{member.Start_Date}</td>
                        <td>{member.Ownership}</td>
                        <td>{member.Involvement_type}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <br/>
        </div>
    );
  }
}

