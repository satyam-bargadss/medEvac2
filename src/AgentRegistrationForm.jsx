import React, { Component } from 'react';
import { MDBInput } from "mdbreact";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from "react-datepicker";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import * as myConst from './helper/Constant';
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';
class AgentRegistrationForm extends Component {


    constructor(props) {
        super(props);
        
    }
    
    handleChange = (e) => {

        this.setState({
                [e.target.name]: e.target.value
        })
       
        console.log(e.target.value.length);
        console.log(e.target.value);
    }
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <div className="form_bg">
                   <div className="header_part">
                       <h2>Agent Application</h2>
                   </div>
                   <div className="form_body">
                   <div className="px-lg-2 pt-0">
                   
                   <form style={{color: '#757575'}} >
                       <div className="head">
                            <div className="card bg-light text-dark">
                                    <div className="card-body">Personal Information</div>
                            </div>
                       </div>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                     <MDBInput label="First Name*" name="firstname" required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Last Name*" name="lastname" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <input type="date" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Mobile No.*" name="mobilenumber" required/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Email Address*" name="email" required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Set Your Password*" name="password" required/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                <InputLabel htmlFor="amount-pic">Agent Approval</InputLabel>
                                                    <Select>
                                                        <MenuItem value={'approved'}>Approved</MenuItem>
                                                        <MenuItem value={'rejected'}>Rejected</MenuItem>
                                                    </Select>
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
                                                <InputLabel htmlFor="amount-pic">Billing Address Country</InputLabel>
                                                    <Select>
                                                        <MenuItem value="us" >
                                                            US
                                                        </MenuItem>
                                                        <MenuItem value={'Bahamas'}>Bahamas</MenuItem>
                                                        <MenuItem value={'Barbados'}>Barbados</MenuItem>
                                                        <MenuItem value={'jamaica'}>Jamaica</MenuItem>
                                                        <MenuItem value={'antigua'}>Antigua</MenuItem>
                                                        <MenuItem value={'trinidadandTobago'}>Trinidad and Tobago</MenuItem>
                                                        <MenuItem value={'dominicanrepublic'}>Dominican Republic</MenuItem>
                                                    </Select>
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
                                                    <MDBInput label="Billing Address 1" name="billingaddress1" required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Billing Address 2 (Optional)" name="billingaddress2"/> 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="City*" name='city' required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="State*" name='state_s' required/>                                              
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Zip Code*" name='zipcode' required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="subHead px-2">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                                                <label className="custom-control-label" for="defaultUnchecked">Same as Member Address</label>
                                            </div>
                                            <h4><strong>Mailing Address</strong></h4>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Mailing Address 1" name="maddress1" required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Mailing Address 2 (Optional)" name="maddress2" required/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="City*" name='city' required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="State*" name='state_s' required/>                                              
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Zip*" name='zip' required/>
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
                                                    <InputLabel htmlFor="method-payment">Method of Payment</InputLabel>
                                                    <Select>
                                                        <MenuItem value={'check'}>Check</MenuItem>
                                                        <MenuItem value={'direct deposit'}>Direct Deposit</MenuItem>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Bank Name" name="bankname"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div class="md-form">
                                                    <MDBInput label="Account Name" name="accountname"/>             
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Account No." name="accountnumber"/>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/*<div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Routing No." name="routingnumber"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Other Account Instructions" name="other"/>
                                                </div>
                                            </div>
                                        </div>*/}

                                    <div className="buttons text-center">
                                        <button className="btn btn-rounded my-4 waves-effect" type="submit">Cancel</button>
                                        <button className="btn btn-rounded my-4 waves-effect" type="submit">Preview & Edit</button>
                                        <button className="btn btn-rounded my-4 waves-effect" type="submit">Submit</button>
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

export default AgentRegistrationForm;
