import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import  './css/material-dashboard.css';
 import MenuItem from '@material-ui/core/MenuItem';
 import InputLabel from '@material-ui/core/InputLabel';
 import Select, {Option} from '@material/react-select';
 import { MDBInput } from "mdbreact";
 import * as myConst from './helper/Constant';
 import ReactPhoneInput from 'react-phone-input-2';
 const URL = myConst.HTTP_URL;

class AgentEdit extends Component {
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
                                    <form style={{color: '#757575'}}>
                                        <div className="summary">
                                            <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Name</label>
                                            <span className="col-xs-6 col-sm-3 col-md-3 col-lg-3">&nbsp;</span>

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

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <input type="date" name="DOB" required />
                                                    <label htmlFor="Dob">Date Of Birth *</label>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="md-form">
                                                <InputLabel class="custom_class" htmlFor="phone">Primary Phone Number* </InputLabel>
                                                <ReactPhoneInput
                                                        inputExtraProps={{
                                                            name: 'mobilenumber',
                                                            required: true                                                
                                                        }}
                                                        defaultCountry="us"
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
                                                    <MDBInput autoComplete="off" label="Email Address*" type="email"  name="email" />
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
                                                <InputLabel class="custom_class" htmlFor="country">Billing Address Country</InputLabel>
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
                                                    <MDBInput autoComplete="off" label="Billing Address 1" name="address1"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Billing Address 2" name="address2"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="City" name="city"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="State" name="state"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Zip Code" name="zip"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="subHead pt-3 px-2">
                                            <h4 classname="text-dark">Mailing Information</h4>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                <InputLabel class="custom_class" htmlFor="country">Mailing Address Country</InputLabel>
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
                                                    <MDBInput autoComplete="off" label="Mailing Address 1" name="address1"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Mailing Address 2" name="address2"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="City" name="city"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="State" name="state"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput autoComplete="off" label="Zip Code" name="zip"/>
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
                                                    <Select
                                                        label='Method of Payment'
                                                        name="paymentMethod"
                                                        >
                                                        <Option value={'check'}>Check</Option>
                                                        <Option value={'Deposit'}>Direct Deposit</Option>
                                                        <Option value={'Deposit'}>Other</Option>                                            
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