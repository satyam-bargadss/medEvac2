import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import InputLabel from '@material-ui/core/InputLabel';
 import { MDBInput } from "mdbreact";
 import * as myConst from './helper/Constant';
 import ReactPhoneInput from 'react-phone-input-2';
 const URL = myConst.HTTP_URL;

class ClientEdit extends Component {
    constructor(props) {
        super(props);
        console.log(props);
       console.log(props.match.params.customerId);
        this.state ={        
          customerId:props.match.params.customerId
        }
        this.fetchUser(this.state.customerId);
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
              //console.log(data.customer[0].firstName); 
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
      convertDate(data){
        if(date!=='')
        {
        var date = new Date(data);
        return((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
        }
        return null;
     
      }
      handleChange = (e) => {
           this.setState({
                    [e.target.name]: e.target.value,
            }
     )
     // console.log(this.state);               
 }
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="container">
                <div className="col-lg-12">
                <div className="form_bg">
                    <div className="header_part">
                        <h2>Edit Client Application</h2>
                    </div>
                <div className="form_body">
                    <div className="px-lg-2 pt-0">
                        <form style={{color: '#757575'}}>
                            <div className="summary">
                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Client Name</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{this.state.firstName +' '+this.state.LastName}</span> 

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Client Type</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{ this.state.type?this.state.type:'' }</span>

                                    <div classname="clearfix"></div>

                                    <label htmlFor="membershipplan" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Membership Plan</label>
                                    <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{this.state.planName?this.state.planName:''}</span>

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

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <input type="date" name="dob" required value={this.state.DOB}
                                                     onChange={e => this.handleChange(e)} 
                                                 />
                                                    <label htmlFor="Dob">Date Of Birth *</label>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                          <InputLabel class="custom_class" htmlFor="phone">Primary Phone Number* </InputLabel>
                                            <ReactPhoneInput
                                            inputExtraProps={{
                                                name: 'phone',
                                                required: true                                                
                                              }}
                                            defaultCountry="us"
                                            value={this.state.cellPhone}
                                            onChange={phone => this.setState({phone})}
                                            
                                            />
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                    <div className="col">
                                        <div classname="md-form">
                                        <InputLabel class="custom_class" htmlFor="phone">Alternate Phone Number* </InputLabel>
                                            <ReactPhoneInput
                                            inputExtraProps={{
                                                name: 'phone2',
                                                required: true                                                
                                              }}
                                            defaultCountry="us"
                                            value={this.state.mobile2}
                                            onChange={phone2 => this.setState({phone2})}
                                            /> 
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div classname="md-form">
                                            <MDBInput autoComplete="off" label="Email Address*" type="email" value={this.state.email?this.state.email:' '} name="email" onChange={e => this.handleChange(e)} />
                                        </div>
                                    </div>
                                  </div>

                                  <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Family Information</h4>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Spouse Name" name="spousename" />
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                            <MDBInput  autoComplete="off" label="Dependant Name" type="text" name="DependantName" />
                                          </div>
                                      </div>
                                  </div>

                                  <div className="head">
                                    <div className="card text-dark bg-light">
                                        <div className="card-body">Account Information</div>
                                    </div>
                                  </div>

                                  <div className="subHead pt-3 px-2">
                                      <h4 classname="text-dark">Billing Information</h4>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <InputLabel class="custom_class" htmlFor="country">Country* </InputLabel>
                                              <Select  id="country"
                                              value={this.state.country}                                               
                                              name="country"
                                              onChange={this.handleChange} 
                                              placeholder='US' 
                                              required                         
                                              >
                                                  <MenuItem value="US" >
                                                      US
                                                  </MenuItem>
                                                  <MenuItem value={'Bahamas'}>Bahamas</MenuItem>
                                                  <MenuItem value={'Barbados'}>Barbados</MenuItem>
                                                  <MenuItem value={'Jamaica'}>Jamaica</MenuItem>
                                                  <MenuItem value={'Antigua'}>Antigua</MenuItem>
                                                  <MenuItem value={'TrinidadandTobago'}>Trinidad and Tobago</MenuItem>
                                                  <MenuItem value={'Dominicanrepublic'}>Dominican Republic</MenuItem>
                                              </Select>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                            <MDBInput autoComplete="off" label="Client Address 1*" name="address1" value={this.state.address1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                             <MDBInput autoComplete="off"  label="Client Address 2 (Optional)" name="address2" value={this.state.address2} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="City*" name='city' value={this.state.city} onChange={e => this.handleChange(e)} required/> 
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  autoComplete="off" label="State*" value={this.state.state_s} onChange={e => this.handleChange(e)} name='state_s' required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  type="number" label="Zip Code*" value={this.state.zipcode} onChange={e => this.handleChange(e)} name='zipcode' required/>                                             
                                          </div>
                                      </div>
                                  </div>

                                  <div className="subHead pt-3 px-2">
                                      <h4 classname="text-dark">Mailing Information</h4>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                            <InputLabel htmlFor="country">Country* </InputLabel>
                                              <Select id="country"                                               
                                              name="country"
                                              placeholder='US' 
                                              required                               
                                              >
                                                  <MenuItem value="US" >
                                                      US
                                                  </MenuItem>
                                                  <MenuItem value={'Bahamas'}>Bahamas</MenuItem>
                                                  <MenuItem value={'Barbados'}>Barbados</MenuItem>
                                                  <MenuItem value={'Jamaica'}>Jamaica</MenuItem>
                                                  <MenuItem value={'Antigua'}>Antigua</MenuItem>
                                                  <MenuItem value={'TrinidadandTobago'}>Trinidad and Tobago</MenuItem>
                                                  <MenuItem value={'Dominicanrepublic'}>Dominican Republic</MenuItem>
                                              </Select>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                            <MDBInput autoComplete="off" label="Client Address 1*" value={this.state.address1} onChange={e => this.handleChange(e)} name="address1" required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                             <MDBInput autoComplete="off"  label="Client Address 2 (Optional)" value={this.state.address2} onChange={e => this.handleChange(e)} name="address2"/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="City*" value={this.state.city} onChange={e => this.handleChange(e)} name='city' required/> 
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  autoComplete="off" label="State*" value={this.state.state_s} onChange={e => this.handleChange(e)} name='state_s' required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  type="number" label="Zip Code*" value={this.state.zipcode} onChange={e => this.handleChange(e)} name='zipcode' required/>                                             
                                          </div>
                                      </div>
                                  </div>

                                  <div className="head">
                                    <div className="card text-dark bg-light">
                                        <div className="card-body">Membership</div>
                                    </div>
                                 </div>

                                <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Plan Information</h4>
                                </div>

                                <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">        
                                              <InputLabel htmlFor="age-simple">Plan</InputLabel>
                                              <Select
                                                  name='plan'             
                                                  >
                                                 <MenuItem ></MenuItem>)
                                                 
                                              </Select>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">  
                                              <MDBInput autoComplete="off"  label="Company, Government or Group Name" name="companyname" />  
                                          </div>
                                      </div>
                                 </div>

                                 <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Agent Information</h4>
                                 </div>

                                 <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                             <MDBInput  autoComplete="off" label="Group Code*" name='planid'/>              
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                            <InputLabel htmlFor="select-agent">Select Agent</InputLabel>
                                            <Select
                                                label='Select Agent'
                                                name="selectedAgentId"
                                            >
                                                <MenuItem>Please Select</MenuItem>
                                                <MenuItem></MenuItem>)                                        
                                            </Select>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Agent Information</h4>
                                 </div>

                                 <div className="form-row px-2">
                                    <div className="col">
                                        <div className="md-form">
                                           <MDBInput  autoComplete="off" label="Payment Type" name='payment-type' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="md-form">
                                           <MDBInput  autoComplete="off" label="Payment Date" name='pdate' />
                                        </div>
                                    </div>
                                 </div>

                                 <div className="form-row px-2">
                                    <div className="col">
                                        <div className="md-form">
                                           <MDBInput  autoComplete="off" label="Mode of Payment" name='paymentmode' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="md-form">
                                           &nbsp;
                                        </div>
                                    </div>
                                 </div>

                                 <div className="buttons text-center">
                                  <button className="btn btn-rounded my-4 waves-effect" type="submit">Save</button>
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

export default ClientEdit;