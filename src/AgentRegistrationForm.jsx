import React, { Component } from 'react';
import { MDBInput } from "mdbreact";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from "react-datepicker";
import MenuItem from '@material-ui/core/MenuItem';
//import Select from '@material-ui/core/Select';
//import Select from '@material/react-select';
import ReactPhoneInput from 'react-phone-input-2';
import Select, {Option} from '@material/react-select';
import FormControl from '@material-ui/core/FormControl';
import * as myConst from './helper/Constant';

import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const URL = myConst.HTTP_URL;
class AgentRegistrationForm extends Component {


    constructor(props) {
        super(props);
     
       
        this.state = {isPreviewSave: false,
                      isActive:false

                     };
     
    }
    
    handleChange = (e) => {

        this.setState({
                [e.target.name]: e.target.value
        })
       
       
        console.log(e.target.value.length);
        console.log(e.target.value);
    }
    onSubmit1 = (event)=>{
        event.preventDefault();
        console.log(this.state);
        this.setState((preState) =>({
            isPreviewSave:true
        }))  


    }
    onSubmit2 = async(event)=>{
        event.preventDefault();
        console.log(this.state);

        //sending data
        try{
            let response = await fetch(URL+'agent-register', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
            
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                        'Content-Type': 'application/json',
                        
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                //redirect: 'follow', // manual, *follow, error
                //referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(this.state), // body data type must match "Content-Type" header
            })
            let data = await response.json()

            console.log(data);
           // return false;
        if(data.status ==200)
        {
        setTimeout(()=>{
           this.props.history.push('/thanks');
           this.props.history.push({
            pathname: '/agent',
            state: { message: 'sucess'}
          })
       }, 1000)
        }
   }
    catch(error){
        console.log(error);
      }
        //this.setState({isPreview:true});
    }
    sameAsContactHandler = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :'';
        console.log(value);
        const name = target.name;
    
        this.setState({
          [name]: value
        })
        if(value === true){
         this.setState({country1:this.state.country,
            maddress1:this.state.billingaddress1,
            maddress2:this.state.billingaddress2,
            city1:this.state.city,
            state_s1:this.state.state_s,
            zip:this.state.zipcode
           })
        }else{
            this.setState({country1:'',
                maddress1:'',
                maddress2:'',
                city1:'',
                state_s1:'',
                zip:''
               }) 
        }
     }
     cancelHandler= () => {
        confirmAlert({
          title: '',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => window.history.back()
            },
            {
              label: 'No',
              onClick: () => document.location.reload(true)
            }
          ]
        });
      };
    render() {
             console.log(this.state.isPreviewSave);
           
             console.log(this.state);
            if(this.state.isPreviewSave==false)
            {
        return (
             
            <div style={{width: '100%'}}>
               {console.log(this.state.isPreview)} 
               {this.state.sameAsContactInformation} 
                <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <div className="form_bg">
                   <div className="header_part">
                       <h2>Agent Application</h2>
                   </div>
                   <div className="form_body">
                   <div className="px-lg-2 pt-0">
                   
                   <form style={{color: '#757575'}} onSubmit={this.onSubmit1}>
                       <div className="head">
                            <div className="card bg-light text-dark">
                                    <div className="card-body">Personal Information</div>
                            </div>
                       </div>
                       <br/>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                     <MDBInput label="First Name*" name="firstname" onChange={this.handleChange} value={this.state.firstname} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Last Name*" name="lastname" onChange={this.handleChange} value={this.state.lastname} required/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <input type="date" name="agenDateOfBirth" onChange={this.handleChange} value={this.state.agenDateOfBirth} className="form-control"/>
                                                    <label htmlFor="agentDateOfBirth">Date of Birth</label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    {/*<MDBInput label="Mobile No.*" type="number" name="mobilenumber" onChange={this.handleChange} value={this.state.mobilenumber} required/>*/}
                                                    <InputLabel class="custom_class" htmlFor="phone">Primary Phone Number* </InputLabel>
                                                    <ReactPhoneInput
                                                        inputExtraProps={{
                                                            name: 'phone',
                                                            required: true                                                
                                                        }}
                                                        defaultCountry="us"
                                                        value={this.state.phone}
                                                        onChange={phone => this.setState({phone})}
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
                                                        name: 'phone1',
                                                        required: true                                                
                                                    }}
                                                    defaultCountry="us"
                                                    value={this.state.phone1}
                                                    onChange={phone1 => this.setState({phone1})}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Email Address*" type="email"  onChange={this.handleChange} name="email" value={this.state.email}  required/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Set Your Password*" name="password" type="password" onChange={this.handleChange} value={this.state.password}  required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Agent Level'
                                                    value={this.state.agentLevel}
                                                    name="agentLevel"
                                                    onChange={this.handleChange}
                                                    >
                                                        <Option value={1}>1</Option>
                                                        <Option value={2}>2</Option>
                                                        <Option value={3}>3</Option>
                                                        <Option value={4}>4</Option>
                                                        <Option value={5}>5</Option>
                                                        <Option value={6}>6</Option>
                                                        <Option value={7}>7</Option>
                                                        <Option value={8}>8</Option>
                                                        <Option value={9}>9</Option>
                                                        <Option value={10}>10</Option>
                                                        <Option value={11}>11</Option>
                                                        <Option value={12}>12</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                <Select
                                                    label='Agent Status'
                                                    value={this.state.isActive}
                                                    name="isActive"
                                                    onChange={this.handleChange}
                                                    >
                                                        <Option value={0}>Active</Option>
                                                        <Option value={1}>Inactive</Option>
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
                                    <br/>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Country *'
                                                    name="country1"
                                                    value={this.state.country1}
                                                    onChange={this.handleChange}
                                                    >
                                                         <Option value={'US'}>US</Option>
                                                        <Option value={'Bahamas'}>Bahamas</Option>
                                                        <Option value={'Bahamas'}>Barbados</Option>
                                                        <Option value={'Barbados'}>Barbados</Option>
                                                        <Option value={'Jamaica'}>Jamaica</Option>
                                                        <Option value={'Antigua'}>Antigua</Option>
                                                        <Option value={'Trinidad and Tobago'}>Trinidad and Tobago</Option>
                                                        <Option value={'Dominican Republic'}>Dominican Republic</Option>                                           
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
                                                    <MDBInput label="Billing Address 1*" name="billingaddress1"  onChange={this.handleChange}  value={this.state.billingaddress1} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Billing Address 2 (Optional)"  onChange={this.handleChange} value={this.state.billingaddress2}  name="billingaddress2"/> 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="City*" name='city'  onChange={this.handleChange} value={this.state.city} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="State*" name='state_s'  onChange={this.handleChange} value={this.state.state_s}  required/>                                              
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Zip Code*" name='zipcode' type="number" onChange={this.handleChange} value={this.state.zipcode} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="subHead px-2">
                                            <div >
                                                <input name="sameAsContactInformation"
                                            type="checkbox" checked={this.state.sameAsContactInformation}
                                            onChange={this.sameAsContactHandler} />&nbsp;&nbsp;Same as Billing Address
                                               {/*<label className="custom-control-label" for="defaultUnchecked">Same as Billing Address</label>*/}
                                                </div>
                                            <h4><strong>Mailing Address</strong></h4>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Country *'
                                                    name="country1"
                                                    value={this.state.country1}
                                                    onChange={this.handleChange}
                                                    >
                                                         <Option value={'US'}>US</Option>
                                                        <Option value={'Bahamas'}>Bahamas</Option>
                                                        <Option value={'Bahamas'}>Barbados</Option>
                                                        <Option value={'Barbados'}>Barbados</Option>
                                                        <Option value={'Jamaica'}>Jamaica</Option>
                                                        <Option value={'Antigua'}>Antigua</Option>
                                                        <Option value={'Trinidad and Tobago'}>Trinidad and Tobago</Option>
                                                        <Option value={'Dominican Republic'}>Dominican Republic</Option>                                           
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
                                                    <MDBInput label="Mailing Address 1*" name="maddress1"  onChange={this.handleChange} value={this.state.maddress1} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Mailing Address 2 (Optional)" name="maddress2"  onChange={this.handleChange} value={this.state.maddress2}/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="City*" name='city1'  onChange={this.handleChange} value={this.state.city1} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="State*" name='state_s1'  onChange={this.handleChange}  value={this.state.state_s1} required/>                                              
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Zip*" name='zip' type="number"  onChange={this.handleChange}  value={this.state.zip}  required/>
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
                                    <br/>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Choose Payment Method'
                                                    name="paymentMethod"
                                                    value={this.state.paymentMethod}
                                                    onChange={this.handleChange}
                                                    >
                                                        <Option value={'check'}>Check</Option>
                                                        <Option value={'Deposit'}>Direct Deposit</Option>
                                                        <Option value={'Other'}>Other</Option>
                                                                                                 
                                                    </Select>
                                                    </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    &nbsp;{/*<MDBInput label="Bank Name" name="bankname"  onChange={this.handleChange} value={this.state.bankname}/>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div class="md-form">
                                                    {/*<MDBInput label="Account Name" name="accountname"  onChange={this.handleChange} value={this.state.accountname} /> */}            
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    {/*<MDBInput label="Account No." name="accountnumber"  onChange={this.handleChange} value={this.state.accountnumber}/>*/}
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
                                        <button className="btn btn-rounded my-4 waves-effect" onClick={this.cancelHandler} >Cancel</button>
                                        <button className="btn btn-rounded my-4 waves-effect" >Preview & Edit</button>
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
     else{
        return (
            <div style={{width: '100%'}}>
                {console.log(this.state.isPreview)}
                <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <div className="form_bg">
                   <div className="header_part">
                       <h2>Agent Application preview</h2>
                   </div>
                   <div className="form_body">
                   <div className="px-lg-2 pt-0">
                   
                   <form style={{color: '#757575'}} onSubmit={this.onSubmit2}>
                       <div className="head">
                            <div className="card bg-light text-dark">
                                    <div className="card-body">Personal Information</div>
                            </div>
                       </div>
                       <br/>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                     <MDBInput label="First Name*" name="firstname" onChange={this.handleChange} value={this.state.firstname} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Last Name*" name="lastname" onChange={this.handleChange} value={this.state.lastname} required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <input type="date" name="agenDateOfBirth" onChange={this.handleChange} value={this.state.agenDateOfBirth} className="form-control"/>
                                                    <label htmlFor="agentDateOfBirth">Date of Birth</label>
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
                                                        value={this.state.phone}
                                                        onChange={phone => this.setState({phone})}
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
                                                        name: 'phone1',
                                                        required: true                                                
                                                    }}
                                                    defaultCountry="us"
                                                    value={this.state.phone1}
                                                    onChange={phone1 => this.setState({phone1})}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                <MDBInput label="Email Address*" type="email"  onChange={this.handleChange} name="email" value={this.state.email}  required/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Agent Level'
                                                    value={this.state.agentLevel}
                                                    name="agentLevel"
                                                    onChange={this.handleChange}
                                                    >
                                                        <Option value={1}>1</Option>
                                                        <Option value={2}>2</Option>
                                                        <Option value={3}>3</Option>
                                                        <Option value={4}>4</Option>
                                                        <Option value={5}>5</Option>
                                                        <Option value={6}>6</Option>
                                                        <Option value={7}>7</Option>
                                                        <Option value={8}>8</Option>
                                                        <Option value={9}>9</Option>
                                                        <Option value={10}>10</Option>
                                                        <Option value={11}>11</Option>
                                                        <Option value={12}>12</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Agent Status'
                                                    value={this.state.isActive}
                                                    name="isActive"
                                                    onChange={this.handleChange}
                                                    >
                                                        <Option value='{pomsky}'>Active</Option>
                                                        <Option value={'Inactive'}>Inactive</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>

                                    <div className="head">
                                        <div className="card text-dark bg-light">
                                            <div className="card-body">Contact Information</div>
                                        </div>
                                    </div>
                                    <br/>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Country'
                                                    name="country1"

                                                    value={this.state.country1}
                                                    onChange={this.handleChange}
                                                    >
                                                        <Option value='pomsky'>Bahamas</Option>
                                                        <Option value={'Bahamas'}>Barbados</Option>
                                                        <Option value={'Barbados'}>Barbados</Option>
                                                        <Option value={'Jamaica'}>Jamaica</Option>
                                                        <Option value={'Antigua'}>Antigua</Option>
                                                        <Option value={'Trinidad and Tobago'}>Trinidad and Tobago</Option>
                                                        <Option value={'Dominican Republic'}>Dominican Republic</Option>                                           
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
                                                    <MDBInput label="Billing Address 1" name="billingaddress1"  onChange={this.handleChange}  value={this.state.billingaddress1} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Billing Address 2 (Optional)"  onChange={this.handleChange} value={this.state.billingaddress2}  name="billingaddress2"/> 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="City*" name='city'  onChange={this.handleChange} value={this.state.city} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="State*" name='state_s'  onChange={this.handleChange} value={this.state.state_s}  required/>                                              
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Zip Code*" name='zipcode' type="number" onChange={this.handleChange} value={this.state.zipcode} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="subHead px-2">
                                              <div>
                                                <input  name="sameAsContactInformation"
                                            type="checkbox" id="defaultUnchecked" checked={this.state.sameAsContactInformation}
                                            onChange={this.sameAsContactHandler}/>&nbsp;&nbsp;Same as Billing Address
                                                {/*<label className="custom-control-label" for="defaultUnchecked">Same as Billing Address</label>*/}
                                            </div>
                                            <h4><strong>Mailing Address</strong></h4>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Country'
                                                    name="country1"

                                                    value={this.state.country1}
                                                    onChange={this.handleChange}
                                                    >
                                                        <Option value='pomsky'>Bahamas</Option>
                                                        <Option value={'Bahamas'}>Barbados</Option>
                                                        <Option value={'Barbados'}>Barbados</Option>
                                                        <Option value={'Jamaica'}>Jamaica</Option>
                                                        <Option value={'Antigua'}>Antigua</Option>
                                                        <Option value={'Trinidad and Tobago'}>Trinidad and Tobago</Option>
                                                        <Option value={'Dominican Republic'}>Dominican Republic</Option>                                           
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
                                                    <MDBInput label="Mailing Address 1" name="maddress1"  onChange={this.handleChange} value={this.state.maddress1} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Mailing Address 2 (Optional)" name="maddress2"  onChange={this.handleChange} value={this.state.maddress2} />
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="City*" name='city1'  onChange={this.handleChange} value={this.state.city1} required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="State*" name='state_s1'  onChange={this.handleChange}  value={this.state.state_s1} required/>                                              
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Zip*" name='zip' type="number"  onChange={this.handleChange}  value={this.state.zip}  required/>
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
                                    <br/>
                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <Select
                                                    label='Choose Country'
                                                    name="paymentMethod"
                                                    value={this.state.paymentMethod}
                                                    onChange={this.handleChange}
                                                    >
                                                        <Option value={'check'}>Check</Option>
                                                        <Option value={'Deposit'}>Deposit</Option>
                                                                                                 
                                                    </Select>
                                                    </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    {/*<MDBInput label="Bank Name" name="bankname"  onChange={this.handleChange} value={this.state.bankname}/>*/}
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
                                        <button className="btn btn-rounded my-4 waves-effect" onClick={this.cancelHandler} >Cancel</button>
                                       
                                        <button className="btn btn-rounded my-4 waves-effect" >Submit</button>
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
}

export default AgentRegistrationForm;
