import React, { Component ,Fragment , useState, useEffect } from 'react';
import { MDBContainer, MDBInput } from "mdbreact";
import DatePicker from "react-datepicker";

import withStyles from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import * as myConst from './helper/Constant';
import { HashRouter as Router, Route,NavLink,Redirect} from "react-router-dom";
import {CardElement, injectStripe} from 'react-stripe-elements';

//import {StripeProvider} from 'react-stripe-elements';

//import StripeCheckout from 'react-stripe-elements';


//var stripe = require('stripe-client')('pk_test_LKGmXM8PPcatPCogw1yUb5Pz00M5lR5LUy');

const URL = myConst.HTTP_URL;

class MembershipCart extends Component {
    constructor(props) {
       super(props);
        //console.log(props.match.params.customerId);
        this.state = {
          customerId:props.match.params.customerId,
          checked:false,
          selected:false,
        };
        //this.submit = this.submit.bind(this);
        {/*this.checkIt = this.checkIt.bind(this);
        this.unCheckIt = this.unCheckIt.bind(this);
        this.handleChange = this.handleChange.bind(this);*/}
        this.getUserTotalAmount();
      }
    
async  getUserTotalAmount() {
        //return false
        try{
           let response = await fetch(URL+'customer-membership-payment/'+this.state.customerId, {
               method: 'GET', // *GET, POST, PUT, DELETE, etc.
           
               cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
               //credentials: 'same-origin', // include, *same-origin, omit
               headers: {
                       'Content-Type': 'application/json',
                       
                       // 'Content-Type': 'application/x-www-form-urlencoded',
               }
               //redirect: 'follow', // manual, *follow, error
               //referrer: 'no-referrer', // no-referrer, *client
             // body data type must match "Content-Type" header
           })
           let data = await response.json()
   
           //console.log(data);
       if(data.status ==200)
       {
         
        this.setState({
          fees: data.total_amount[0].feeAmount,
          initiatonFee: data.total_amount[0].initiatonFee,
          total_cart_Fee: data.total_amount[0].total_amount,
          firstName:data.total_amount[0].firstName,
          lastName:data.total_amount[0].LastName,
          email:data.total_amount[0].email,
          planName:data.total_amount[0].planName,
          frequency:data.total_amount[0].frequency
        });
         
         
          console.log(this.state.options);
       }
   }
   catch(error){
       console.log(error);
     }
  }

  onToken = (token) => {
      fetch('/save-stripe-token', {
        method: 'POST',
        body: JSON.stringify(token), 
      }).then(response => {
        response.json().then(data => { 
          alert(`We are in business, ${data.email}`);
        });
      });
  }

  render() {
        return (
            <div style={{width: '100%'}}>
                <div className="container">
                    <div className="col-lg-12">
                        <div className="form_bg">
                            <div className="header_part">
                                <h2>Payment Information</h2>
                            </div>
                            <div className="form_body">
                              <div  className="col-lg-12 text-center">
                              <p>Without receiving payment your membership data inserted.</p>
                              </div>
                              
                              <form>
                                <div className="col-sm-7 col-md-7 col-lg-7 pull-left">
                                  <div className="white_box">
                                  <div className="head">
                                      <div className="card bg-light text-dark">
                                        <div className="card-body">Client Information</div>
                                      </div>
                                  </div>

                                  <div className="form-row px-3 pt-3">
                                      <label htmlFor="clientname" className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font-weight-bold">Client Name</label>
                                      <span className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font-weight-bold text-left">{(this.state.firstName ? this.state.firstName:'')+' '+(this.state.lastName ? this.state.lastName:'')}</span>
                                  </div>
                                  <div className="form-row px-3 pt-1">
                                      <label htmlFor="email" className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font-weight-bold">Email Address</label>
                                      <span className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font-weight-bold text-left">{(this.state.email ? this.state.email:'')}</span>
                                  </div>
                                  <div className="form-row px-3 pt-1">
                                      <label htmlFor="planname" className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font-weight-bold">Plan Name</label>
                                      <span className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font-weight-bold text-left">{(this.state.planName ? this.state.planName:'')}</span>
                                  </div>
                                  <div className="form-row px-3 pt-1 pb-3">
                                      <label htmlFor="frequency" className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font-weight-bold">Frequency</label>
                                      <span className="col-xs-6 col-sm-6 col-md-6 col-lg-6 font-weight-bold text-left">{(this.state.frequency ? this.state.frequency:'')}</span>
                                  </div>
                                  </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-5 pull-left">
                                    <div className="white_box">  
                                      <div className="head">
                                          <div className="card bg-light text-dark">
                                              <div className="card-body">Payment Details</div>
                                          </div>
                                      </div>

                                      <div class="custom-control custom-radio pt-3 pl-3 pr-3">
                                        <input type="radio" class="custom-control-input" id="customRadio" name="payment_type" value="yearly"/>
                                        <label class="custom-control-label" for="customRadio">Pay Annually</label>
                                      </div>

                                      <div class="custom-control custom-checkbox pt-1 pl-5 pr-3">
                                        <input type="checkbox" class="custom-control-input" id="customCheck" name="example2"/>
                                        <label class="custom-control-label" for="customCheck">Auto-renew my membership each year</label>
                                      </div>

                                      <div class="custom-control custom-radio pt-3 pl-3 pr-3">
                                        <input type="radio" class="custom-control-input" id="customRadio" name="payment_type" value="monthly"/>
                                        <label class="custom-control-label" for="customRadio1">Pay Monthly</label>
                                      </div>

                                      <h6 className="pt-1 pl-5 pr-3"><strong>Recurring Payment</strong></h6>
                                      <div class="custom-control custom-checkbox pl-5 pr-3">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1" name="example4"/>
                                        <label class="custom-control-label" for="customCheck1">Choose recurring date(2nd payment onwards)</label>
                                      </div>
                                      <div className="col-sm-12 col-md-12 col-lg-12 pl-5 pr-3">
                                        <input type="date" name="recurringdate" className="form-control"/>
                                      </div>

                                      <div className="form-row px-3 pt-4">
                                        <label htmlFor="membershipfee" className="col-xs-8 col-sm-8 col-md-8 col-lg-8 font-weight-bold">Membership Fees:</label>
                                        <span className="col-xs-4 col-sm-4 col-md-4 col-lg-4 font-weight-bold text-right">$ {this.state.fees?this.state.fees:''}</span>
                                      </div>

                                      <div className="form-row px-3">
                                        <label htmlFor="initiationfee" className="col-xs-8 col-sm-8 col-md-8 col-lg-8 font-weight-bold">Initiation Fees:</label>
                                        <span className="col-xs-4 col-sm-4 col-md-4 col-lg-4 font-weight-bold text-right">${this.state.initiatonFee?this.state.initiatonFee:'0.0'}</span>
                                      </div>

                                      <div className="form-row px-3">
                                        <label htmlFor="totalfee" className="col-xs-8 col-sm-8 col-md-8 col-lg-8 font-weight-bold text-danger">Total Due:</label>
                                        <span className="col-xs-4 col-sm-4 col-md-4 col-lg-4 font-weight-bold text-right text-danger">$ {this.state.total_cart_Fee?this.state.total_cart_Fee:''}</span>
                                      </div>

                                      <div className="buttons text-center pt-2 px-5">
                                        <button className="btn btn-rounded btn-block my-4 waves-effect" >Payment</button>
                                        {/*<StripeCheckout token={this.onToken} 
                                        label="Go Premium" //Component button text
                                        name="Business LLC" //Modal Header
                                        description="Upgrade to a premium account today."
                                        panelLabel="Go Premium" //Submit button in modal
                                        amount={999} //Amount in cents $9.99
                                        billingAddress={false}
        stripeKey="pk_test_i04T9DbYJ9vraIrG9SkKkFiS00Z3lQoTfF"/>*/}
                                      </div>
                                    </div> 
                                </div>
                                <div className="clearfix"></div>
                                </form>
                            </div>
        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MembershipCart;