import React, { Component,Fragment } from 'react';
import { HashRouter as Router, Route
   ,NavLink,Redirect,Link} from "react-router-dom";
import { MDBDataTable } from 'mdbreact';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Modal from 'react-responsive-modal';
import  './css/material-dashboard.css';
import * as myConst from './helper/Constant';
import Switch from 'react-toggle-switch';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'reactstrap';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const URL = myConst.HTTP_URL;
	
class CustomerManagement extends Component {
constructor(props) {
  super(props);
 
  this.state = {
    switched: false,
    open:false,
    numberOfcustomers:'',
    activeUsers:'',
    inActiveUsers:'',
    usCustomber:'',
    internationalCustomber:'',
    columns:[
      {
        label: 'Client ID',
        field: 'customerId',
        sort: 'desc',
        width: 150
      },
      {
        label: 'First Name',
        field: 'firstName',
       
        width: 150
      },
      {
        label: 'Last Name',
        field: 'LastName',
       
        width: 150
      },
      {
        label: 'DOB',
        field: 'DOB',
      
        width: 270
      },
      {
        label: 'Country',
        field: 'country',
        
        width: 200
      },
      {
        label: 'Group Code',
        field: 'groupCode',
        width: 200
      },
      {
        label: 'Action',
        field: 'action',
        width: 200
      },
    ]
  };
}

onOpenModal = () => {
  
 this.setState({ open: true });
 
  

 
}
onCloseModal = () => {
  this.setState({ open: false });
};
/*
toggleSwitch = () => {
  this.setState(prevState => {
    return {
      switched: !prevState.switched
    };
  });
};
*/
async fetchUser(username,assa,aasss) {
     
  try{
    let response = await fetch(URL+'customber', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          
          // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    
      let data = await response.json()
    
     // console.log(data.customers.customers);
     // return await  data.customers;
      this.setState(()=>({
        rows:data.customers,
        activeUsers:data.activeUsers,
        inActiveUsers:data.inActiveUsers,
        usCustomber:data.usCustomber,
        internationalCustomber:data.internationalCustomber,
        totalCustomers:data.totalCustomers
      }))
     
     // console.log('hi');
      const newrows =  this.state.rows.map((row) => {

        return {...row, action: 
        <React.Fragment>
          <Link data-toggle="tooltip" title="View" to={`/MemberView/${row.customerId}`}><i class="material-icons">visibility</i></Link>
          <a data-toggle="tooltip" title="Claim" onClick={() => this.onOpenModal(row.agentId,row.firstName,row.lastName)}><i className="material-icons">monetization_on</i></a>
          <Link data-toggle="tooltip" title="Edit" to={''}><i class="material-icons">edit</i></Link>
        </React.Fragment>};
    });
    this.setState({rows: newrows });   
     
} catch(error){
  console.log(error);
}
//end Api calling

}
componentDidMount(){

 let rows =  this.fetchUser();
 console.log(rows);
 this.setState(()=>({
      rows:rows,
     
 }))
  
}
	
    render() {
         

         let data={
          columns: this.state.columns,
           rows:this.state.rows
         }
         const { open } = this.state;
        return (
           
     
      <div class="content" style={{width: '100%'}}>
        {console.log(data)}
        
		<div class="container-fluid">
				<div class="col-md-12">
					<div class="buttons ml-3" style={{overflow:'hidden'}}>
          <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/member-registration"  activeClassName=" active">
                  <span>Add Client</span>
                </NavLink>
						<a href="#" class="btn btn-info pull-left mb-4">Import Clients</a>
						<a href="#" class="btn btn-info pull-left mb-4">Contacts</a>
					</div>
				</div>
		</div>
    <br/>
		<div class="container-fluid">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header card-header-primary">
						  <h4 class="card-title pull-left ">Clients Summary</h4>
						</div>
						<div class="card-body">
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.totalCustomers}</h3>
								<span class="text-dark">Total Clients</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.activeUsers}</h3>
								<span class="text-success">Active Clients</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.inActiveUsers}</h3>
								<span class="text-danger">Inactive Clients</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.usCustomber}</h3>
								<span class="text-info">US Clients</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.internationalCustomber}</h3>
								<span class="text-danger">International Clients</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left">
								<h3 class="bold">0</h3>
								<span class="text-danger">Upcoming Renewals</span>
							</div>
						</div>
					</div>
				</div>
		</div>
    <br/><br/>
        <div class="container-fluid">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title pull-left ">Client Management</h4>
                </div>
                <div class="card-body">
				   <table border="0" cellspacing="5" cellpadding="5">
						<tr>
							<td className="date">Date:</td>
							<td><input type="date" name="start_date" id="start_date" class="form-control" /></td>
							<td><input type="date" name="end_date" id="end_date" class="form-control" /></td>
              <td className="select">
                  <Select>
                    <MenuItem value={'memberid'}>Client ID</MenuItem>
                    <MenuItem value={'firstname'}>First Name</MenuItem>
                    <MenuItem value={'lastname'}>Last Name</MenuItem>
                    <MenuItem value={'dob'}>DOB</MenuItem>
                    <MenuItem value={'country'}>Country</MenuItem>
                  </Select>
              </td>
							<td><button class="btn btn-rounded  waves-effect" type="submit">Filter</button></td>
						</tr>
				   </table>
					 <MDBDataTable
          striped
           hover
           data={data}
            />
                </div>
              </div>
            </div>
        </div>
        {console.log(this.state.data)}

        <Modal className="modal" open={open} onClose={this.onCloseModal} center>
              <div className="header_part">
                <h2>Client Claim</h2>
              </div>
              <div className="modalBody pt-3">
                <label htmlFor="date-time" className="col-sm-4 col-md-4 col-lg-4 pull-left">Date & Time</label>
                <div className="col-sm-8 col-md-8 col-lg-8 pull-left">06/22/2019 10:41AM</div>
                <div className="clearfix"></div>
                <label htmlFor="date-time" className="col-sm-4 col-md-4 col-lg-4 pull-left">Member ID</label>
                <div className="col-sm-8 col-md-8 col-lg-8 pull-left">INDBAR001</div>
                <div className="clearfix"></div>
                <label htmlFor="date-time" className="col-sm-4 col-md-4 col-lg-4 pull-left">Member Name</label>
                <div className="col-sm-8 col-md-8 col-lg-8 pull-left">Satyam Singh</div>
                <div className="clearfix"></div>
                <form onSubmit={this.handleSelectedManager}>  
                <label htmlFor="message" className="col-sm-4 col-md-4 col-lg-4 pull-left">Write Your Message</label>
                <div className="col-sm-8 col-md-8 col-lg-8 pull-left">
                  <textarea placeholder="Write your message here" name="message" className="form-control"></textarea>
                </div>
                <div className="clearfix"></div><br/>
                <label htmlFor="selectmanager" className="col-sm-4 col-md-4 col-lg-4 pull-left">Upload Document</label>
                <div className="col-sm-8 col-md-8 col-lg-8 pull-left"><input type="file" name="myFile"/></div>
                <div className="clearfix"></div><br/><br/>
                <div className="buttons text-center">
                    <button className="btn btn-rounded my-4 waves-effect">Submit</button>
                </div>
                 </form>
              </div>
        </Modal>
      </div>
        );
    }
}

export default CustomerManagement;