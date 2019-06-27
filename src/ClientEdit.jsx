import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import * as myConst from './helper/Constant';

class ClientEdit extends Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="form_bg">
                    <div className="header_part">
                        <h2>Edit Client Application</h2>
                    </div>
                </div>
                <div className="form_body">
                    <div className="px-lg-2 pt-0">
                        <form style={{color: '#757575'}}>
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

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                                  <input type="date" name="dob" required value={this.state.dob}
                                                     onChange={e => this.handleChange(e)}
                                                    
                                                 />
                                        <label htmlFor="Dob">Date Of Birth *</label>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" type="number" label="Primary Mobile Number*" name="mobilenumber" value={this.state.mobilenumber} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                    <div className="col">
                                        <div classname="md-form">
                                            <MDBInput autoComplete="off" type="number" label="Alternate Mobile Number" name="alternatemobilenumber" value={this.state.alternatemobilenumber} onChange={e => this.handleChange(e)}/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div classname="md-form">
                                            <MDBInput autoComplete="off" label="Email Address*" type="email" name="email" required value={this.state.email} onChange={e => this.handleChange(e)}/>
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
                                            <InputLabel htmlFor="country">Country* </InputLabel>
                                              <Select id="country"
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
                                              <MDBInput  autoComplete="off" label="State*" name='state_s' value={this.state.state_s} onChange={e => this.handleChange(e)}required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  type="number" label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>                                             
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
                                              <MDBInput  autoComplete="off" label="State*" name='state_s' value={this.state.state_s} onChange={e => this.handleChange(e)}required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  type="number" label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>                                             
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
                                                 
                                                  value={this.state.plan}
                                                  name='plan'
                                                  onChange={this. onChangeMemberPlanHandler}    
                                                  inputProps={{
                                                    id: 'plan-required',
                                                  }}           
                                                  >
                                                 
                                                  {this.state.planOption? this.state.planOption.map((row2) => <MenuItem key={row2.planId} value={row2.planId}>{row2.planName}</MenuItem>) :''}
                                                 
                                              </Select>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">  
                                              <MDBInput autoComplete="off"  label="Company, Government or Group Name" name="companyname" value={this.state.companyname} onChange={e => this.handleChange(e)}/>  
                                          </div>
                                      </div>
                                 </div>

                                 <div className="subHead pt-3 px-2">
                                    <h4 classname="text-dark">Agent Information</h4>
                                 </div>

                                 <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                             <MDBInput  autoComplete="off" label="Group Code*" name='planid'onChange={this.handleChange}/>              
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                            <InputLabel htmlFor="select-agent">Select Agent</InputLabel>
                                            <Select
                                                    label='Select Agent'
                                                    name="selectedAgentId"
                                                    value={this.state.selectedAgentId}
                                                   
                                                    onChange={this.onChangeAgentHandler}
                                                    >
                                                         <MenuItem value='' disabled selected>Please Select</MenuItem>
                                                         {this.state.options.map((row1) => <MenuItem key={row1.agentId} value={row1.agentId}>{row1.firstName+" "+row1.lastName}</MenuItem>)}                                         
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
                                           <MDBInput  autoComplete="off" label="Payment Type" name='payment-type' onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="md-form">
                                           <MDBInput  autoComplete="off" label="Payment Date" name='pdate' onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                 </div>

                                 <div className="form-row px-2">
                                    <div className="col">
                                        <div className="md-form">
                                           <MDBInput  autoComplete="off" label="Mode of Payment" name='paymentmode' onChange={this.handleChange}/>
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
        );
    }
}

export default ClientEdit;