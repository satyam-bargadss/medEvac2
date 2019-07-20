import React, {Component} from 'react';
import {HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
import  './css/material-dashboard.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from "react-datepicker";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {MDBInput} from "mdbreact";
import * as myConst from './helper/Constant';
import ReactPhoneInput from 'react-phone-input-2';
 const URL = myConst.HTTP_URL;

class AgentEdit extends Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.customerId);
            this.state ={        
              agentId:props.match.params.agentId
            }
            this.fetchAgent(this.state.agentId);
            this.handleSubmit = this.handleSubmit.bind(this);
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
                LevelName:data.agent[0].LevelName,
                paymentMethod:data.agent[0].paymentMethod,
               })
            }
      } catch(error){
        console.log(error);
      }
    }
    async handleSubmit(event)
    {
      event.preventDefault()
       const agentPaymentData = {
        agentId:this.state.agentId,  
         dob:this.state.dob,
        cellPhone:this.state.cellPhone,
        alternatemobilenumber:this.state.alternatemobilenumber,
        email:this.state.email,
        country:this.state.country,
        country1:this.state.country1,
        zip:this.state.zip,
        zip1:this.state.zip1,
        state:this.state.state,
        state1:this.state.state1,
        address1:this.state.address1,
        address2:this.state.address2,
        address3:this.state.address3,
        address4:this.state.address4,
        city:this.state.city,
        city1:this.state.city1,
        paymentMethod:this.state.paymentMethod
       }
       console.log(agentPaymentData);
      try{
        //let response = await fetch(URL+'updatecustomer?customerId='+this.state.customerId, {
         let response = await fetch(URL+'updateagent', {    
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(agentPaymentData), // body data type must match "Content-Type" header
        });
        
          let data = await response.json()
          console.log(data);
          if(data.status == 200){
              console.log('Pradosh');
              this.props.history.push('/agent');
               //this.props.history.push('/thanks');
            }
          }
          catch(error){
            console.log(error);
          }
    }
    handleChange = (e) => {
        this.setState({
                 [e.target.name]: e.target.value,
        })              
    }
    
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="container">
                    <div className="col-lg-12">
                        <div className="form_bg">
                            <div className="header_part">
                                <h2>Edit Agent Application</h2>
                            </div>
                            <div className="form_body">
                                <div className="px-lg-2 pt-0">
                                    <form style={{color: '#757575'}} method='post' onSubmit={this.handleSubmit}>
                                        <div className="summary">
                                            <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Name</label>
                                            <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">{(this.state.firstName?this.state.firstName:'')+' '+(this.state.lastName?this.state.lastName:'')}</span>

                                            {/*<label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Type</label>
                                            <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Individual</span>*/}
                                        </div>

                                        <div className="head">
                                            <div className="card bg-light text-dark">
                                                <div className="card-body">Agent Information</div>
                                            </div>
                                        </div>

                                        <div className="subHead pt-3 px-2">
                                            <h4 classname="text-dark">Personal Information</h4>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <input type="date" name="dob" required value={this.state.dob?this.state.dob:''}
                                                     onChange={e => this.handleChange(e)}  />
                                                    <label htmlFor="dob">Date Of Birth *</label>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="md-form">
                                                <InputLabel class="custom_class" htmlFor="cellPhone">Primary Phone Number* </InputLabel>
                                                <ReactPhoneInput
                                                        defaultCountry="us"
                                                        inputExtraProps={{
                                                            name: 'cellPhone',
                                                            required: true                                                
                                                          }}
                                                        defaultCountry="us"
                                                        value={this.state.cellPhone?this.state.cellPhone:''}
                                                        onChange={cellPhone => this.setState({cellPhone})}
                                                        />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <InputLabel class="custom_class" htmlFor="phone">Alternate Phone Number </InputLabel>
                                                    <ReactPhoneInput
                                                    inputExtraProps={{
                                                        name: 'alternatemobilenumber',
                                                        required: true                                                
                                                    }}
                                                    defaultCountry="us"
                                                    /> 
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Email Address*" type="email"  name="email" value={this.state.email?this.state.email:' '} name="email" onChange={e => this.handleChange(e)} />
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
                                              <Select id="country" 
                                               value={this.state.country?this.state.country:''}
                                              onChange={this.handleChange}                                              
                                              name="country" 
                                              placeholder='US' 
                                              required                              
                                              >
                                                  <MenuItem value="US" >
                                                      US
                                                  </MenuItem>
                                                  <MenuItem value={'Bahamas'}>Bahamas</MenuItem>
                                                  <MenuItem value={'Barbados'}>Barbados</MenuItem>
                                                  <MenuItem value={'jamaica'}>Jamaica</MenuItem>
                                                  <MenuItem value={'antigua'}>Antigua</MenuItem>
                                                  <MenuItem value={'TrinidadandTobago'}>Trinidad and Tobago</MenuItem>
                                                  <MenuItem value={'Dominicanrepublic'}>Dominican Republic</MenuItem>
                                              </Select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Billing Address 1" name="address1" value={this.state.address1 ? this.state.address1 : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Billing Address 2" name="address2" value={this.state.address2 ? this.state.address2 : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="City" name="city" value={this.state.city ? this.state.city : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="State" name="state" value={this.state.state ? this.state.state : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Zip Code" name="zip" value={this.state.zip ? this.state.zip : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="subHead pt-3 px-2">
                                            <h4 classname="text-dark">Mailing Information</h4>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                <InputLabel class="custom_class" htmlFor="country">Country* </InputLabel>
                                              <Select id="country"
                                               value={this.state.country?this.state.country:''}
                                               onChange={this.handleChange}                                               
                                              name="country"
                                              placeholder='US' 
                                              required                              
                                              >
                                                  <MenuItem value="US" >
                                                      US
                                                  </MenuItem>
                                                  <MenuItem value={'Bahamas'}>Bahamas</MenuItem>
                                                  <MenuItem value={'Barbados'}>Barbados</MenuItem>
                                                  <MenuItem value={'jamaica'}>Jamaica</MenuItem>
                                                  <MenuItem value={'antigua'}>Antigua</MenuItem>
                                                  <MenuItem value={'TrinidadandTobago'}>Trinidad and Tobago</MenuItem>
                                                  <MenuItem value={'Dominicanrepublic'}>Dominican Republic</MenuItem>
                                              </Select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Mailing Address 1" name="address3" value={this.state.address3 ? this.state.address3 : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Mailing Address 2" name="address4" value={this.state.address4 ? this.state.address4 : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="City" name="city1" value={this.state.city1 ? this.state.city1 : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="State" name="state1" value={this.state.state1 ? this.state.state1 : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Zip Code" name="zip" value={this.state.zip1 ? this.state.zip1 : '' } onChange={e => this.handleChange(e)}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="head">
                                            <div className="card text-dark bg-light">
                                            <div className="card-body">Payment Summary</div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                <InputLabel class="custom_class" htmlFor="paymentmethod">Choose Payment Method </InputLabel>
                                                    <Select
                                                        label='Choose Payment Method'
                                                        name="paymentMethod"
                                                        value={this.state.paymentMethod?this.state.paymentMethod:''}
                                                        onChange={this.handleChange}  
                                                        >
                                                        <MenuItem value={'check'}>Check</MenuItem>
                                                        <MenuItem value={'Deposit'}>Direct Deposit</MenuItem>
                                                        <MenuItem value={'Other'}>Other</MenuItem>                                            
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    {/*<MDBInput autoComplete="off" label="Bank Name" name="bankname"/>*/}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    {/*<MDBInput autoComplete="off" label="Account Name" name="accountname"/>*/}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    {/*<MDBInput autoComplete="off" label="Account Number" name="accountnumber"/>*/}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="buttons text-center pt-3">
                                            <button className="btn btn-rounded my-4 waves-effect" type="submit">Update</button>
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

export default AgentEdit;