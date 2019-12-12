import React, {Component} from 'react';
import Modal from 'react-modal';
import { Button, FormGroup, FormControl, FormLabel,Form } from "react-bootstrap";
import DIV from '../css/div.css';
import '../css/modal.css';
export default class Registered extends Component{
    constructor(props){
      super(props)
      this.state= {
      members: [],
      name: '',
      email: '',
      msg: '',
      id: ''
    };
    console.log('Is Admin '+this.state.admin);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  validateForm =() => {
    return this.state.name.length > 0 && this.state.email.length > 0;
  }
  openModal(member) {
    this.setState({
        modalIsOpen: true,
        name: member.name,
        email: member.email,
        id: member.id
    });
  }
  closeModal() {
    this.setState({
        modalIsOpen: false
    });
    window.location.reload();
  }
  deleteMember(member){
    var data = {
        id: member.id
    }
    fetch("/users/delete", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
    }).then(function(data) {
        if(data === "success"){
           this.setState({msg: "User has been deleted."});  
        }
        alert("The User has been Deleted.");
        window.location.reload();
    }).catch(function(err) {
        console.log(err)
    });
}
  handleEdit = (e) =>{
    e.preventDefault();
    const t = window.localStorage.getItem('token');
    if (!t) {
      this.setState({
        message: 'You need to be logged in to access this page.'
      });
      alert('You are not authorized to view this page');
      return;
    }
    var data = {
      name: this.state.name,
      email: this.state.email,
      id: this.state.id
    }
    fetch("/users/edit", {
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
          this.setState({msg: "Data has been Edited."});  
        }
        alert('The Data has been Edited');
        //window.location.reload();
    }).catch(function(err) {
        console.log(err)
    });
  }
  componentDidMount() {
    const t = window.localStorage.getItem('token');
    if (!t) {
      this.setState({
        message: 'You need to be logged in to access this page.'
      });
      alert('You are not authorized to view this page');
      return;
    }

    fetch(`http://localhost:4007/users?t=${t}`)
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
        
        <div className="divXX"> 
        
            <div className="">
                <table className="">
                    <thead>
                        <tr>
                            <th>Member ID</th>
                            <th>Member Name</th>
                            <th>Member Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.members.map(member =>
                        <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name} </td>
                        <td>{member.email}</td>
                        <td><a onClick={() => this.openModal(member)}>Edit</a>|<a onClick={() => this.deleteMember(member)}>Delete</a></td>
                        </tr>
                    )}
                    <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="modal"
                            className="modal-main" >
                            <label>
                            Name:
                            <input
                                name="User Name"
                                type="text"
                                value={this.state.name}
                                onChange={e => this.setState({name: e.target.value})} />
                            </label>
                            <br />
                            <label>
                            Email   :
                            <input
                                name="User Email"
                                type="text"
                                placeholder="abc@abc.com"
                                value={this.state.email}
                                onChange={e => this.setState({email: e.target.value})} />
                            </label>
                            <br />
                            <div className="submit-section">
                            <Button block bsSize="large" disabled={!this.validateForm()} onClick={e => this.handleEdit(e)} type="submit">
                              Submit
                            </Button>
                            <Button block bsSize="" onClick={e => this.closeModal()} type="close">
                              Close
                            </Button>
                            </div>

                      </Modal>
                    </tbody>
                </table>
                
                
            </div>
            
        </div>
    );
  }
}


// <div className="Users">
//           <h1>Users</h1>
//           {this.state.members.map(member =>
//             <div key={member.id}>{member.name} {member.email} {member.password}</div>
//           )}
//         </div>
