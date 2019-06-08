import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch ,NavLink,Redirect} from "react-router-dom";
import MemberRegistrationForm from './MemberRegistrationForm';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div style={{width: '100%'}}>
                 <div className="content">
		<div className="container text-center">
      {/*<h1>Welcome to Global Medevac!</h1>*/}
            <div class="col-md-12">
              <div class="buttons ml-3" style={{overflow:'hidden'}}>
                <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/member-registration"  activeClassName=" active">
                  <span>Add Member</span>
                </NavLink>
                <a href="#" class="btn btn-info pull-left mb-4">Add Agent</a>
                <a href="#" class="btn btn-info pull-left mb-4">Review Commissions</a>
                <a href="#" class="btn btn-info pull-left mb-4">See Membership Plans</a>
              </div>
            </div>
		</div>
    <br/>
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title pull-left ">Business Summary</h4>
                </div>
                <div class="card-body">
                  <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                    <h3 class="bold">0</h3>
                    <span class="text-dark">Total Members</span>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                    <h3 class="bold">0</h3>
                    <span class="text-success">Upcoming Renewals</span>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                    <h3 class="bold">0</h3>
                    <span class="text-danger">Total Agents</span>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                    <h3 class="bold">$0</h3>
                    <span class="text-info">Total Revenue</span>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                    <h3 class="bold">$0</h3>
                    <span class="text-danger">Total Commissions Paid</span>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left">
                    <h3 class="bold">$0</h3>
                    <span class="text-danger">Total Commissions Due</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
      </div> 
            </div>
            </div>
        );
    }
}

export default Dashboard;