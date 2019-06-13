import React, { Component,Fragment } from 'react';
import { HashRouter as Router, Route
   ,NavLink,Redirect} from "react-router-dom";
import { MDBDataTable } from 'mdbreact';
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
    data:  {
      columns: [
        {
          label: 'Member ID',
          field: 'customerId',
          sort: 'asc',
          width: 150
        },
        {
          label: 'First Name',
          field: 'firstName',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Last Name',
          field: 'LastName',
          sort: 'asc',
          width: 150
        },
        {
          label: 'DOB',
          field: 'DOB',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Country',
          field: 'created_at',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Actions',
          field: 'actions',
          sort: 'asc',
          width: 100
        }
      ],
      rows: [
        {
          id:'0001',
          name: 'Tiger Nixon',
          date: '2011/04/25',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2011/05/24',
          actions: ''
        },
        {
          id:'0002',
          name: 'Garrett Winters',
          date: '2011/07/25',
          plan: 'Yearly',
          amount: '$3,499',
          dater: '2012/07/24',
          actions:<Fragment><a href="#"><span class="view"></span></a>
          <a href="#"><span class="edit"></span></a>
          <Switch onClick={this.toggleSwitch} on={true}/>
          </Fragment>
        },
        {
          id:'0003',
          name: 'Ashton Cox',
          date: '2009/01/12',
          plan: 'Yearly',
          amount: '$3,499',
          dater: '2010/01/11',
          actions: ''
        },
       
        {
          id:'0020',
          name: 'Dai Rios',
          date: '2012/09/26',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2012/10/25',
          actions: ''
        }
      ]}
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
componentDidMount(){


  
}
	
    render() {
        return (
           
     
      <div class="content" style={{width: '100%'}}>
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
								<h3 class="bold">11</h3>
								<span class="text-dark">Total Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">11</h3>
								<span class="text-success">Active Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">0</h3>
								<span class="text-danger">Inactive Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">11</h3>
								<span class="text-info">Active Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">0</h3>
								<span class="text-danger">Inactive Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left">
								<h3 class="bold">1</h3>
								<span class="text-danger">Contacts Logged In Today</span>
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
							<td>Date:</td>
							<td><input type="date" name="start_date" id="start_date" class="form-control" /></td>
							<td><input type="date" name="end_date" id="end_date" class="form-control" /></td>
							<td><button class="btn btn-rounded  waves-effect" type="submit">Search</button></td>
						</tr>
				   </table>
					 <MDBDataTable
          striped
           hover
           data={this.state.data}
            />
                </div>
              </div>
            </div>
        </div>
      </div>
        );
    }
}

export default CustomerManagement;