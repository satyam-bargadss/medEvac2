import React, { Component , useState, useEffect } from 'react';
import { HashRouter as Router, Route,NavLink,Redirect} from "react-router-dom";
import {CardElement, injectStripe} from 'react-stripe-elements';
import {StripeProvider} from 'react-stripe-elements';



class MembershipCart extends Component {
    constructor() {
        super();
        this.state = {stripe: null};
      }
      handleSubmit = (ev) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();
        var stripe = require('stripe')('sk_test_mthUsnTu0U27rTTGnXd3dwbF00hQeXxfHL');

        const customer = stripe.customers.create({
            email: 'foo-customer@example.com',
  }).then((customer) => {
    return stripe.customers.createSource(customer.id, {
      source: 'tok_visa',
    });
  })
  .then((source) => {
    return stripe.charges.create({
      amount: 1600,
      currency: 'usd',
      customer: source.customer,
    });
  })
  .then((charge) => {
    // New charge created on a new customer
  })
  .catch((err) => {
    // Deal with an error
  });

        
        // Do something with created customer object
        console.log(customer.id);
      };
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="container">
                    <div className="col-lg-12">
                        <div className="form_bg">
                            <div className="header_part">
                                <h2>Membership Cart</h2>
                            </div>
                            <div className="form_body">
                                <div className="px-lg-2 pt-0">
                                    <div className="form-row px-2 pt-3">
                                        <label htmlFor="membershipfees" className="col-xs-6 col-sm-9 col-md-9 col-lg-9 font-weight-bold">Membership Fees</label>
                                        <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">$ 260</span>
                                    </div>
                                    <div className="form-row px-2 pt-3">
                                        <label htmlFor="initiationfees" className="col-xs-6 col-sm-9 col-md-9 col-lg-9 font-weight-bold">Initiation Fees</label>
                                        <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">$ 5</span>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="form-row px-2">
                                        <label htmlFor="totalpayment" className="col-xs-6 col-sm-9 col-md-9 col-lg-9 font-weight-bold">Total Payment</label>
                                        <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">$ 265</span>
                                    </div>
                                <div className="buttons text-center pt-3">
                                   <form onSubmit={this.handleSubmit}>
                                     <button className="btn btn-rounded my-4 waves-effect">Payment</button>
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

export default MembershipCart;