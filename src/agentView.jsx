import React, { Component } from 'react';
import * as myConst from './helper/Constant';
const URL = myConst.HTTP_URL;
class agentView extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.customerId);
        this.state ={        
          agentId:props.match.params.agentId
        }
        this.fetchAgent(this.state.agentId);
  }
  //fething agent detail
  checkState(parameter)
  {
    if(parameter)
    {
      return parameter
    }
    else{
      return null
    }
  }
  convertDate(data){
    if(date!=='')
    {
    var date = new Date(data);
    return((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
    }
    return null;
 
  }
  async fetchAgent(agentId) {
     
    try{
      let response = await fetch(URL+'agent-by-id?agentId='+agentId, {
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
          console.log(data.agent)
          console.log(data.agent[0].firstName); 
          //setting state

          this.setState({
            account_name:data.agent[0].account_name,
            account_number:data.agent[0].account_number,
            address1:data.agent[0].address1,
            address2:data.agent[0].address2,
            address3:data.agent[0].address3,
            address4:data.agent[0].address4,
            agentStartDate:data.agent[0].agentStartDate,
            bank_name:data.agent[0].bank_name,
            cellPhone:data.agent[0].cellPhone,
            city:data.agent[0].city,
            city1:data.agent[0].city1,
            country:data.agent[0].country,
            companyName:data.agent[0].companyName,
            dob:data.agent[0].dob,
            email:data.agent[0].email,
            firstName:data.agent[0].firstName,
            created_at:data.agent[0].created_at,
            lastName:data.agent[0].lastName,
            state:data.agent[0].state,
            state1:data.agent[0].state1,
            spouseFirstName:data.agent[0].spouseFirstName,
            zip:data.agent[0].zip,
            zip1: data.agent[0].zip1,
           })
        }
       
       
        
       
  } catch(error){
    console.log(error);
  }
}
    render() {
        return (
            <div style={{width: '100%'}}>
              <div className="container">
                <div className="col-lg-12">
                <div className="form_bg">
             <div className="header_part">
                 <h2>Agent Summary</h2>
                 {console.log(this.state.zip1)}
             </div>
             <div className="form_body">
             <div className="px-lg-2 pt-0">
             
             <form style={{color: '#757575'}}>
                                <div className="summary">
                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Name</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{this.state.firstName?this.state.firstName:''}{this.state.firstName?this.state.lastName:''}</span> 

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Type</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Individual</span>

                                    <div classname="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Level</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">1</span>     
                                </div>

                                <div className="head">
                                    <div className="card bg-light text-dark">
                                        <div className="card-body">Agent Information</div>
                                    </div>
                                </div>

                                  <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Personal Information</h4>
                                  </div>
                                  
                                  <div className="form-row px-2 pt-3">
                                    <label htmlFor="dob" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Date of Birth</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.convertDate(this.state.dob)}</span>

                                    <label htmlFor="mobileno" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Mobile Number</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.state.cellPhone?this.state.cellPhone:''}</span>
                                  </div>
                                  <div className="form-row px-2 pb-4">
                                    <label htmlFor="email" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Email Address</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.email)}</span>
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
                                      <label htmlFor="country" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Billing Address Country</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.country)}</span>

                                      <label htmlFor="caddress1" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Billing Address 1</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.address1)}</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="caddress2" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Billing Address 2</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.address2)}</span>

                                      <label htmlFor="city" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">City</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.city)}</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="state" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">State</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.state)}</span>

                                      <label htmlFor="zip" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Zip Code</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.zip)}</span>
                                   </div>

                                   <div className="subHead pt-3 px-2">
                                      <h4 classname="text-dark">Mailing Information</h4>
                                    </div>

                                    <div className="form-row px-2 pt-3">
                                      <label htmlFor="country" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Mailing Address Country</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.country)}</span>

                                      <label htmlFor="caddress1" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Mailing Address 1</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.address3)}</span>
                                   </div>

                                   <div className="form-row px-2">
                                      <label htmlFor="caddress2" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Mailing Address 2</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.address4)}</span>

                                      <label htmlFor="city" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">City</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.city1)}</span>
                                   </div>

                                   <div className="form-row px-2 pb-4">
                                      <label htmlFor="state" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">State</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.state1)}</span>

                                      <label htmlFor="zip" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Zip Code</label>
                                      <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.zip1)}</span>
                                   </div>                                   

                                   <div className="head">
                                    <div className="card text-dark bg-light">
                                      <div className="card-body">Payment Summary</div>
                                    </div>
                                 </div>

                              <div className="form-row px-2 pt-3">
                                <label htmlFor="paymenttype" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Method of Payment</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Check</span>

                                <label htmlFor="pdate" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Bank Name</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.bank_name)}</span>
                              </div>

                              <div className="form-row px-2 pb-4">
                                <label htmlFor="pdate" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Account Name</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.account_name)}</span>

                                <label htmlFor="pdate" className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">Account Number</label>
                                <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3 font-weight-bold">{this.checkState(this.state.account_number)}</span>
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

export default agentView;