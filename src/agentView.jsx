import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import * as myConst from './helper/Constant';
 import Switch from 'react-toggle-switch'

class agentView extends Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="form_bg">
             <div className="header_part">
                 <h2>View Agent Application</h2>
             </div>
             <div className="form_body">
             <div className="px-lg-2 pt-0">
             
             <form style={{color: '#757575'}}  onSubmit={this.handleSubmit2}>
                                <div className="head">
                                    <div className="card bg-light text-dark">
                                            <div className="card-body">Personal Information</div>
                                    </div>
                                </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                               <label htmlFor="firstname">First Name</label>
                                               <p>John</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                                <label htmlFor="lastname">Last Name</label>
                                                <p>Doe</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                            <label htmlFor="dob">Date of Birth</label>
                                            <p>23/06/1983</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="mobileno">Mobile Number</label>
                                              <p>+91 9876543210</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="email">Email Address</label>
                                              <p>abcd@gmail.com</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="password">Set Your Password</label>
                                              <p>xxxxxxxx</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="approval">Agent Approval</label>
                                              <p>Approved</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>

                                    <div className="head">
                                        <div className="card text-dark bg-light">
                                            <div className="card-body">Contact Information</div>
                                        </div>
                                    </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                                <label htmlFor="country">Country</label>
                                                <p>US</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="baddress1">Billing Address 1</label>
                                              <p>gegegegej gegegnen</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="baddress2">Billing Address 2</label>
                                              <p>fgegee gghgb g3gf fgw3gg</p>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="city">City</label>
                                              <p>gegheg</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="state">State</label>
                                              <p>gegegeg</p>                                              
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="zip">Zip Code</label>
                                              <p>712311</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="country">Country</label>
                                              <p>US</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="maddress1">Mailing Address 1</label>
                                              <p>gbrsylk8l8l</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="maddress2">Mailing Address 2</label>
                                              <p>uilhukkfjktS</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                            <label htmlFor="city">City</label>
                                            <p>gegheg</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                            <label htmlFor="state">State</label>
                                            <p>gegegeg</p>                                              
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                            <label htmlFor="zip">Zip Code</label>
                                            <p>712311</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              &nbsp;                                            
                                          </div>
                                      </div>
                                  </div>                                    

                              <div className="head">
                                  <div className="card text-dark bg-light">
                                      <div className="card-body">Billing Information</div>
                                  </div>
                              </div>
 
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">       
                                              <label htmlFor="method">Method of Payment</label>
                                              <p>Check</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="mode">Payment Mode</label>
                                              <p>One Time</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">       
                                              <label htmlFor="bankname">Bank Name</label>
                                              <p>SBI</p>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                            <label htmlFor="accountname">Account Name</label>
                                            <p>Savings</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <label htmlFor="accountnumber">Account Number</label>
                                              <p>12345678911</p>             
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>

                              <div className="buttons text-center">
                                  <button className="btn btn-rounded my-4 waves-effect">Close</button>
                              </div>    
                          </form>

                   
</div>
</div>
</div>
            </div>
        );
    }
}

export default agentView;