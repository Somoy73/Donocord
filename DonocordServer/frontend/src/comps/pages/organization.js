import React, {Component} from 'react';
import Modal from 'react-modal';
import { Button, FormGroup, FormControl, FormLabel,Form } from "react-bootstrap";
//import DIV from '../css/div.css';
import '../css/modal.css';
import '../css/tables2.css';
export default class organization extends Component{
    constructor(props){
      super(props)
      this.state= {
      members: [],
      org_name: '',
      org_type: '',
      msg: '',
      id: '',
      sq: ''
    };
    //console.log('org ',org_name,' type ',org_type);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  openModal(member) {
    this.setState({
        modalIsOpen: true,
        org_name: member.Organization_name,
        org_type: member.Organization_type,
        id: member.Organization_id
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
        id: member.Organization_id
    }
    fetch("/users/deleteOrg", {
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
      name: this.state.org_name,
      type: this.state.org_type,
      id: this.state.id
    }
    fetch("/users/orgedit", {
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

    fetch(`http://localhost:4007/users/organisation?t=${t}`)
      .then(res => res.json())
      .then(members => this.setState({ members: members }, ()=> console.log("Success")))
      .catch(() => {
        this.setState({
          message: 'You need to be logged in to access this page.'
        });
      });
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
      this.state.message
      ? <div>
        
          <div className="divC"><h1 className="bg-text">{this.state.message}</h1>
          </div>

        </div>
        :
        
        <div className="divXX"> 
            <form onSubmit={e => this.Search(e)}>
                <input type="text" name="search" placeholder="Search.."
                value={this.state.sq}
                onChange={e => this.setState({sq: e.target.value})}
                />                 
            </form>
            <div className="">
                <table className="" id="customers">
                    <thead>
                        <tr>
                            <th>Organization Name</th>
                            <th>Organization Type</th>
                            <th>Ownership</th>
                            <th>Involvement Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.members.map(member =>
                        <tr key={member.Organization_id}>
                        <td>{member.Organization_name} </td>
                        <td>{member.Organization_type}</td>
                        <td>{member.Ownership}</td>
                        <td>{member.Involvement_type}</td>
                        <td><a onClick={() => this.openModal(member)}>Edit</a>|<a onClick={() => this.deleteMember(member)}>Delete</a></td>
                        </tr>
                    )}
                    <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="modal"
                            className="modal-main" >
                            <label>
                            Organization Name:
                            <input
                                name="Org Name"
                                type="text"
                                value={this.state.org_name}
                                onChange={e => this.setState({org_name: e.target.value})} />
                            </label>
                            <br />
                            <label>
                            Organization Type:
                            <input
                                name="Org Type"
                                type="text"
                                value={this.state.org_type}
                                onChange={e => this.setState({org_type: e.target.value})} />
                            </label>
                            <br />
                            <div className="submit-section">
                            <Button block bsSize="large" onClick={e => this.handleEdit(e)} type="submit">
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
