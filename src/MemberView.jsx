import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import * as myConst from './helper/Constant';
 import Switch from 'react-toggle-switch'

class MemberView extends Component {
    constructor(props) {
        super(props);
       // console.log(props);
        console.log(props.match.params.customerId); 
    }
    
    render() {
        return (
            <div style={{width: '100%'}}>
            <div className="container">
            <div class="col-lg-12">
                <div className="form_bg">
             <div className="header_part">
                 <h2>Client Summary</h2>
             </div>
             <div className="form_body">
             <div className="px-lg-2 pt-0">
             
             <form style={{color: '#757575'}}  onSubmit={this.handleSubmit2}>
                                <div className="summary">
                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Client Name</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">John Doe</span> 

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Client Type</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Individual</span>

                                    <div classname="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Membership Date</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">04/26/2019</span> 

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Renewal Date</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">05/25/2019</span>

                                    <div classname="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Name</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Josh Matthews</span>  

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Payment Received</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">$1,999</span>   
                                </div>
                                
                                <div className="head">
                                    <div className="card bg-light text-dark">
                                        <div className="card-body">Client Information</div>
                                    </div>
                                </div>

                                  <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Personal Information</h4>
                                  </div>
                                  
                                  <div className="form-row px-2 pt-3">
                                    <label htmlFor="dob" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Date of Birth</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">06/23/1983</span>

                                    <label htmlFor="mobileno" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Primary Mobile Number</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">+91 9876543210</span>
                                  </div>
                                  <div className="form-row px-2">
                                    <label htmlFor="alternatemobileno" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Alternate Mobile Number</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">+91 8080123456</span>

                                    <label htmlFor="email" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Email Address</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">abcd@gmail.com</span>
                                  </div>

                                  <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Family Information</h4>
                                  </div>

                                  <div className="form-row px-2 pt-3 pb-4">
                                    <label htmlFor="sname" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Spouse Name</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Joanna Doe</span>

                                    <label htmlFor="dname1" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Dependant Name 1</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Max Doe</span>
                                  </div>

                                    <div className="head">
                                        <div className="card text-dark bg-light">
                                            <div className="card-body">Account Information</div>
                                        </div>
                                    </div>

                                    <div className="subHead pt-3 px-2">
                                      <h4 classname="text-dark">Billing Information</h4>
                                    </div>

                                    <div className="form-row px-2 pt-3">
                                      <label htmlFor="country" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Country</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">US</span>

                                      <label htmlFor="caddress1" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Client Address 1</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">vbvjlj vkj wfwj</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="caddress2" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Client Address 2</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">vjwhwvjwhbj  jwbrnr</span>

                                      <label htmlFor="city" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">City</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Abcdefgh</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="state" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">State</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">vjwhwvjwhbj  jwbrnr</span>

                                      <label htmlFor="zip" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Zip Code</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">456987</span>
                                   </div>

                                   <div className="subHead pt-3 px-2">
                                      <h4 classname="text-dark">Mailing Information</h4>
                                    </div>

                                    <div className="form-row px-2 pt-3">
                                      <label htmlFor="country" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Country</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">US</span>

                                      <label htmlFor="caddress1" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Client Address 1</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">vbvjlj vkj wfwj</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="caddress2" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Client Address 2</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">vjwhwvjwhbj  jwbrnr</span>

                                      <label htmlFor="city" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">City</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Abcdefgh</span>
                                   </div>

                                   <div className="form-row px-2 pb-4">
                                      <label htmlFor="state" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">State</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">vjwhwvjwhbj  jwbrnr</span>

                                      <label htmlFor="zip" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Zip Code</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">456987</span>
                                   </div>                                    

                              <div className="head">
                                  <div className="card text-dark bg-light">
                                      <div className="card-body">Membership</div>
                                  </div>
                              </div>

                              <div className="subHead pt-3 px-2">
                                <h4 classname="text-dark">Plan Information</h4>
                              </div>

                              <div className="form-row px-2 pt-3">
                                <label htmlFor="plan" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Plan</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Monthly Base Plan</span>

                                <label htmlFor="plan" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Company, Government or Group Name</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Bargad Software Solutions</span>
                              </div>

                              <div className="subHead pt-3 px-2">
                                <h4 classname="text-dark">Agent Information</h4>
                              </div>

                              <div className="form-row px-2 pt-3 pb-4">
                                <label htmlFor="groupcode" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Group Code</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">IndBar101</span>

                                <label htmlFor="groupcode" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Agent Manager</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Paul McCarthy</span>
                              </div>

                                  <div className="head">
                                    <div className="card text-dark bg-light">
                                      <div className="card-body">Payment Summary</div>
                                    </div>
                                 </div>

                              <div className="form-row px-2 pt-3">
                                <label htmlFor="paymenttype" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Payment Type</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Check</span>

                                <label htmlFor="pdate" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Payment Date</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">04/26/2019</span>
                              </div>

                              <div className="form-row px-2 pb-3">
                                <label htmlFor="pdate" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Mode of Payment</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Monthly</span>
                              </div>

                              <div className="buttons text-center">
                                  <button className="btn btn-rounded my-4 waves-effect">Close</button>
                              </div>    
                          </form>

                   
</div>
</div>
</div>
</div>
            </div>
            </div>
        );
    }
}

export default MemberView;