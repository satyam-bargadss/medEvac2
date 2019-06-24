import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import * as myConst from './helper/Constant';
const URL = myConst.HTTP_URL;

class MemberView extends Component {
    constructor(props) {
        super(props);
       // console.log(props);
        console.log(props.match.params.customerId);
        this.state ={        
          customerId:props.match.params.customerId
        }
        this.fetchUser(this.state.customerId);
    }
    convertDate(data){
      if(date!=='')
      {
      var date = new Date(data);
      return((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
      }
      return null;
   
    }
    redirect = () => {
    
        this.setState({redirect:true})
      return this.state.redirect;
    }
    async fetchUser(customerId) {
     
      try{
        let response = await fetch(URL+'customberById?customerId='+customerId, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
        
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              
              // 'Content-Type': 'application/x-www-form-urlencoded',
          }

        })
        
          let data = await response.json()
          if(data.status==200)
          {
            console.log(data.customer)
            console.log(data.customer[0].firstName); 
             this.setState({
              frequency:data.customer[0].frequency,
              fee:data.customer[0].fee,
              familyFee:data.customer[0].familyFee,
              planName:data.customer[0].planName,
              country1:data.customer[0].country1,
              type:data.customer[0].clientType,
              mobile2:data.customer[0].mobile2,
              DOB:data.customer[0].DOB,
              Dependent2LastName:data.customer[0].Dependent2LastName,
              firstName:data.customer[0].firstName,
              LastName:data.customer[0].LastName,
              ModBy:data.customer[0].ModBy,
              address1:data.customer[0].address1,
              address2:data.customer[0].address2,
              cellPhone:data.customer[0].cellPhone,
              city:data.customer[0].city,
              city1:data.customer[0].city1,
              companyName:data.customer[0].companyName,
              dependent1DOB:data.customer[0].dependent1DOB,
              email:data.customer[0].email,
              groupCode:data.customer[0].groupCode,
              created_at:data.customer[0].created_at,
              country:data.customer[0].country,
              companyName:data.customer[0].companyName,
              mailing_address1:data.customer[0].mailing_address1,
              mailing_address2:data.customer[0].mailing_address2,
              spouseFirstName:data.customer[0].spouseFirstName,
              zip:data.customer[0].zip,
              zip1: data.customer[0].zip1,
              agentFirstName:data.customer[0].agentFirstName,
              agentLastName : data.customer[0].agentLastName ,
             })
          }
         
         
          
         
    } catch(error){
      console.log(error);
    }
    //end Api calling
    
    }
    render() {
        return (
          
            <div style={{width: '100%'}}>
               {this.state.redirect?<Redirect to='/customer-management'/>:''}
              {console.log(this.state.LastName)}
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
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{this.state.firstName+" "+this.state.LastName}</span> 

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Client Type</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{ this.state.type?this.state.type:'' }</span>

                                    <div classname="clearfix"></div>

                                    <label htmlFor="membershipplan" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Membership Plan</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3"> {this.state.planName?this.state.planName:''}</span>

                                    <label htmlFor="fees" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Membership Fees</label>
                                    {this.state.type=='family'?<span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{this.state.familyFee?this.state.familyFee:''}
                                    </span>:<span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{this.state.fee?this.state.fee:''}
                                    </span>}
                                    

                                    <div className="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Membership Date</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{this.convertDate(this.state.created_at)}</span> 

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Renewal Date</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3"></span>

                                    <div classname="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Name</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3"><p>{this.state.agentFirstName} </p><p>{this.state.agentLastName?this.state.agentLastName:''}</p></span>  

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Payment Received</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3"></span>   
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
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.convertDate(this.state.DOB)}</span>

                                    <label htmlFor="mobileno" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Primary Phone Number</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.cellPhone}</span>
                                  </div>
                                  <div className="form-row px-2">
                                    <label htmlFor="alternatemobileno" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Alternate Phone Number</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.mobile2?this.state.mobile2:''}</span>

                                    <label htmlFor="email" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Email Address</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.email?this.state.email:' '}</span>
                                  </div>

                                  <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Family Information</h4>
                                  </div>

                                  <div className="form-row px-2 pt-3 pb-4">
                                    <label htmlFor="sname" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Spouse Name</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.spouseFirstName}</span>

                                    <label htmlFor="dname1" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Dependant Name 1</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold"></span>
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
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.country?this.state.country:' '}</span>

                                      <label htmlFor="caddress1" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Client Address 1</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.address1}</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="caddress2" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Client Address 2</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.address2?this.state.address2:''}</span>

                                      <label htmlFor="city" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">City</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.city1?this.state.city1:''}</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="state" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">State</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.state1}</span>

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
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.mailing_address1?this.state.mailing_address1:''}</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="caddress2" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Client Address 2</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.mailing_address2?this.state.mailing_address2:''}</span>

                                      <label htmlFor="city" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">City</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold"></span>
                                   </div>

                                   <div className="form-row px-2 pb-4">
                                      <label htmlFor="state" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">State</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.state1?this.state1:''}</span>

                                      <label htmlFor="zip" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Zip Code</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.zip?this.state.zip:''}</span>
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
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold"></span>

                                <label htmlFor="plan" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Company, Government or Group Name</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.companyName?this.state.companyName:''}</span>
                              </div>

                              <div className="subHead pt-3 px-2">
                                <h4 classname="text-dark">Agent Information</h4>
                              </div>

                              <div className="form-row px-2 pt-3 pb-4">
                                <label htmlFor="groupcode" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Group Code</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.groupCode?this.state.groupCode:''}</span>

                                <label htmlFor="groupcode" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Agent Manager</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold"></span>
                              </div>

                                  <div className="head">
                                    <div className="card text-dark bg-light">
                                      <div className="card-body">Payment Summary</div>
                                    </div>
                                 </div>

                              <div className="form-row px-2 pt-3">
                                <label htmlFor="paymenttype" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Payment Type</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold"></span>

                                <label htmlFor="pdate" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Payment Date</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold"></span>
                              </div>

                              <div className="form-row px-2 pb-3">
                                <label htmlFor="pdate" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Mode of Payment</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold"></span>
                              </div>

                              <div className="buttons text-center">
                                  <button className="btn btn-rounded my-4 waves-effect" onClick={this.redirect}>Close</button>
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