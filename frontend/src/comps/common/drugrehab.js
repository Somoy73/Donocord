import React, {Component} from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import DIV from '../css/div.css';
import tab from '../css/table.css';
import img1 from '../images/picture.jpg';
export default class oldhome extends Component{
    constructor(props){
      super(props)
      this.state= {
      members: [],
      message: '',
      org: null,
      amount: 0,
      donName: window.localStorage.getItem('user_name'),
      donEmail: window.localStorage.getItem('user_email'),
      don_id: null,
      org_id: null
    };
    console.log(this.state.donName,' yo ', this.state.donEmail);
  }
  openModal(member) {
    this.setState({
        modalIsOpen: true,
        id: member.Organization_id
    });
  }
  closeModal() {
    this.setState({
        modalIsOpen: false
    });
    window.location.reload();
  }
  
  handleSubmit = (e) =>{
    e.preventDefault();
    let comp = this;
    var data = {
        name: this.state.org,
        amount: this.state.amount,
        donName: this.state.donName,
        donEmail: this.state.donEmail,
        donId: null,
        orgId: null
    }
    console.log(data)
    fetch("/users/donate", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data)    
        if(data == "success"){
           this.setState({msg: "Thanks for your donation"});  
        }
        alert("Thank you for your donation.");
        //comp.setState({don_id: data.donor_id});
        //data.donId = comp.state.don_id;
        console.log(data)
    }).catch(function(err) {
        console.log(err)
    });

}

  render(){
    let member = this.state.members
    let optionItems = member.map((members) =>
                <option key={members.Organization_name}>{members.Organization_name}</option>
            );
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
                <br/>
                 <Link to='/oldhomedon'>
                    <Button renderAs="button">
                        <span>Click to see Donation Amount</span>
                    </Button>
                </Link>
                <Link to='/victim' style={{marginLeft: 20}}>
                    <Button renderAs="button">
                        <span>Click to See Victim Details</span>
                    </Button>
                </Link>
                <Button style={{marginLeft: 20}} renderAs="button" onClick={() => this.openModal(member)}>DONATE!</Button>
                <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="modal"
                            className="modal-main" >
                            <form style={{marginLeft: 600}} onSubmit={e=>this.handleSubmit(e)}>
                            <label>
                              <h5>Pick The Organization You wish to Donate in:</h5>
                              <select value={this.state.value} onChange={e=> this.setState({org: e.target.value})}>
                              {optionItems}
                              </select>
                            </label>
                            <label>
                              <h5>Amount you wish to Donate:</h5>
                              <input type="text" value={this.state.value} onChange={e=>this.setState({amount: e.target.value})} />
                            </label>
                            <Button block bsSize="large" value="submit" type="submit">
                              Submit
                            </Button>
                            <Button block bsSize="" onClick={e => this.closeModal()} type="close">
                              Close
                            </Button>
                          </form>
                            <br />
                            

                      </Modal>
        </div></div></div></div></div>
    );
  }
  componentDidMount() {
    const t = window.localStorage.getItem('token');

    if (!t) {
      this.setState({
        message: 'You need to be logged in to access this page.'
      });

      return;
    }

    fetch(`http://localhost:4007/users/drugrehab?t=${t}`)
      .then(res => res.json())
      .then(members => this.setState({ members: members }, ()=> console.log("Success")))
      .catch(() => {
        this.setState({
          message: 'You need to be logged in to access this page.'
        });
      });
  }
}

