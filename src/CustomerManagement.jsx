import React, { Component,Fragment } from 'react';
import { HashRouter as Router, Route
   ,NavLink,Redirect} from "react-router-dom";
import { MDBDataTable } from 'mdbreact';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import  './css/material-dashboard.css';
import * as myConst from './helper/Constant';
import Switch from 'react-toggle-switch'
const URL = myConst.HTTP_URL;
	
class CustomerManagement extends Component {
constructor(props) {
  super(props);
  console.log(props);
  this.state = {
    switched: false,
    numberOfcustomers:'',
    activeUsers:'',
    inActiveUsers:'',
    usCustomber:'',
    internationalCustomber:'',
    columns:[
      {
        label: 'Member ID',
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
        label: 'Created at',
        field: 'created_at',
     
        width: 200

      },
      {
        label: 'Group Code',
        field: 'groupCode',
        width: 200
      }
    ]
  };
}
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
        return (
           
     
      <div class="content" style={{width: '100%'}}>
        {console.log(data)}
        
		<div class="container-fluid">
				<div class="col-md-12">
					<div class="buttons ml-3" style={{overflow:'hidden'}}>
          <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/member-registration"  activeClassName=" active">
                  <span>Add Member</span>
                </NavLink>
						<a href="#" class="btn btn-info pull-left mb-4">Import Members</a>
						<a href="#" class="btn btn-info pull-left mb-4">Contacts</a>
					</div>
				</div>
		</div>
    <br/>
		<div class="container-fluid">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header card-header-primary">
						  <h4 class="card-title pull-left ">Members Summary</h4>
						</div>
						<div class="card-body">
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.totalCustomers}</h3>
								<span class="text-dark">Total Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.activeUsers}</h3>
								<span class="text-success">Active Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.inActiveUsers}</h3>
								<span class="text-danger">Inactive Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.usCustomber}</h3>
								<span class="text-info">US Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">{this.state.internationalCustomber}</h3>
								<span class="text-danger">International Members</span>
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
                  <h4 class="card-title pull-left ">Member Management</h4>
                </div>
                <div class="card-body">
				   <table border="0" cellspacing="5" cellpadding="5">
						<tr>
							<td className="date">Date:</td>
							<td><input type="date" name="start_date" id="start_date" class="form-control" /></td>
							<td><input type="date" name="end_date" id="end_date" class="form-control" /></td>
              <td className="select">
                  <Select>
                    <MenuItem value={'memberid'}>Member ID</MenuItem>
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
      </div>
        );
    }
}

export default CustomerManagement;