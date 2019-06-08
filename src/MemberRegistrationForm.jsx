import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { MDBInput } from "mdbreact";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from "react-datepicker";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import * as myConst from './helper/Constant';

const URL = myConst.HTTP_URL;
class MemberRegistrationForm extends Component {
    constructor(props) {
        super(props);
        console.log(props) ;
        this.state = {
            key: 2
          };
       this.state = {
         startDate: new Date(),
         isDependent:false,
         addDependentByOne:'0',
         country:'USA',
         type:'',
         plan:'',
         amount:''
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleChange2 = this.handleChange2.bind(this);
       this.submitStep4 = this.submitStep4.bind(this);
    }
    handleTab(key) {
       // alert('selected ' + key);
        this.setState({key});
      }
     handleChange2(event) {
        this.setState(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
      }
    handleDepentent = ()=>{
        this.setState((preState) => ({
            isSpouse: !preState.isSpouse 
          }));
         console.log(this.state.isSpouse); 
     }
     addDependent = ()=>{
        
                 this.setState((preState) =>({
                     addDependentByOne: preState + 1
                 }),() =>{
                     console.log(this.state.addDependentByOne)
                 })            
            }

             dependentField =() =>{
              var dependentFields = [];
              for(let i=1; i<=3; i++)
              {
                dependentFields.push(<div class="card-body">
                <div id="education_fields">

                </div>
                <div class="form-row">
                    <div class="col">
                        <div class="md-form">
                            <input type="text" id="customerRegisterFormDependantFirstName" class="form-control"/>
                            <label htmlFor="customerRegisterFormDependantFirstName">Dependant First Name{i}</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="md-form">
                            <input type="text" id="customerRegisterFormDependantLastName" class="form-control"/>
                            <label htmlFor="customerRegisterFormDependantLastName">Dependant Last Name{i}</label>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <div class="md-form">
                            <input type="date" id="customerRegisterFormDob2" class="form-control"/>
                            <label htmlFor="customerRegisterFormDob2">Date of Birth{i}</label>
                        </div>
                    </div>
                    <div class="col text-center">
                        <button class="btn btn-info my-2" type="button"  onClick={this.addDependent}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                    </div>
                </div>
            </div>);
              }
              return(dependentFields);
             }
           
   
    
             handleChange = (e) => {

                this.setState({
                        [e.target.name]: e.target.value
                })
               
                console.log(e.target.value.length);
                console.log(e.target.value);
            }
            submitStep1 = (event) =>{
                //return false;
                event.preventDefault();
                 console.log(event);
                  this.handleTab(2);
                
                
                
            }
            submitStep2 = (event) =>{
                //return false;
                event.preventDefault();
                 console.log(event);
                  this.handleTab(3);
                
                
                
            }
            submitStep3 = (event) =>{
              
                console.log('hi');
                event.preventDefault();
                console.log(this.state);
                this.handleTab(4);
            }
            submitStep4 (event){
                event.preventDefault();
                //console.log(this.state);
              // let formData = await this.state;
               //console.log(formData);
                //return false;
               // event.preventDefault();
                const formCustomber = {
                      state: this.state.state_s,
                      city:this.state.city,
                      amount:this.state.amount,
                      plan:this.state.plan,
                      planid:this.state.planid,
                      type:this.state.type,
                      zipcode:this.state.zipcode,
                      companyname:this.state.companyname,
                      firstname:this.state.firstname,
                      mobilenumber:this.state.mobilenumber,
                      spousename:this.state.spousename

                  }
                    this.handleTab(6);
                  /*
                try{
                    let response = await fetch(URL+'customber', {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    
                        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                        //credentials: 'same-origin', // include, *same-origin, omit
                        headers: {
                                'Content-Type': 'application/json',
                                
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        //redirect: 'follow', // manual, *follow, error
                        //referrer: 'no-referrer', // no-referrer, *client
                        body: JSON.stringify(formData), // body data type must match "Content-Type" header
                    })
                    let data = await response.json()

                    console.log(data);
                console.log(this.state);
                console.log('hi');
                return false;
                //this.handleTab(6);
            }
            catch(error){
                console.log(error);
              }
              */
        }
      componentDidMount()
      {
        this.setState({
            country: 'USA',
        })
        let dependentField =() =>{
            var dependentFields = [];
            for(let i=1; i<this.state.addDependentByOne; i++)
            {
              dependentFields.push(<div class="card-body">
              <div id="education_fields">

              </div>
              <div class="form-row">
                  <div class="col">
                      <div class="md-form">
                          <input type="text" id="customerRegisterFormDependantFirstName" class="form-control"/>
                          <label htmlFor="customerRegisterFormDependantFirstName">Dependant First Name{i}</label>
                      </div>
                  </div>
                  <div class="col">
                      <div class="md-form">
                          <input type="text" id="customerRegisterFormDependantLastName" class="form-control"/>
                          <label htmlFor="customerRegisterFormDependantLastName">Dependant Last Name{i}</label>
                      </div>
                  </div>
              </div>
              <div class="form-row">
                  <div class="col">
                      <div class="md-form">
                          <input type="date" id="customerRegisterFormDob2" class="form-control"/>
                          <label htmlFor="customerRegisterFormDob2">Date of Birth{i}</label>
                      </div>
                  </div>
                  <div class="col text-center">
                      <button class="btn btn-info my-2" type="button"  onClick={this.addDependent}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                  </div>
              </div>
          </div>);
            }
            return(dependentFields);
           }
        
      }
    
    render() {
      
        return (
            <div style={{width: '100%'}}>
                
            <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           <div className="form_bg">
               <div className="header_part">
                   <h2>Member Registration Form</h2>
               </div>
               <div className="form_body">
               <div className="px-lg-2 pt-0">
            <Tabs
id="controlled-tab-example"
activeKey={this.state.key}
onSelect={key => this.setState({ key })}
>
<Tab eventKey={1} activeKey={this.state.key}   title="Basic Information">
<form className="text-center" style={{color: '#757575'}} >
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                            <InputLabel htmlFor="amount-pic">Country</InputLabel>
                                                <Select
                                                value={this.state.country}                                               
                                                name="country"
                                                onChange={this.handleChange} 
                                                placeholder='US' 
                                                                               
                                                >
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
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <MDBInput label="City*" name='city' value={this.state.city} onChange={e => this.handleChange(e)} required/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <MDBInput label="State*" name='state_s' value={this.state.state_s} onChange={e => this.handleChange(e)}required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <MDBInput label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                    <button className="btn btn-rounded my-4 waves-effect" onClick={this.submitStep1}>Next</button> 
                                </form>
</Tab>
<Tab eventKey={2} title="Personal Information">
<form className="text-center" style={{color: '#757575'}}>
                                    <div className="form-row">
                                        <div className="col">
                                            <div class="md-form">
                                            <InputLabel htmlFor="age-simple">Type</InputLabel>
                                                <Select
                                                    value={this.state.type}
                                                    onChange={this.handleChange}
                                                    name='type'                                               
                                                    >
                                                    <MenuItem value="us">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Individual</MenuItem>
                                                    <MenuItem value={20}>Corporate</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <MDBInput label="First Name*" name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <MDBInput label="Last Name*" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} required/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                    <DatePicker
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChange}
                                                   />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <MDBInput label="Company Name*" name="companyname" value={this.state.companyname} onChange={e => this.handleChange(e)} required/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <MDBInput label="Mobile No.*" name="mobilenumber" value={this.state.mobilenumber} onChange={e => this.handleChange(e)} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-rounded my-4 waves-effect" onClick={this.submitStep2} >Next</button>								
                                </form>
</Tab>
<Tab eventKey={3} title="Family Information">
  
     <form className="text-center" style={{color: '#757575'}}>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <MDBInput label="Spouse Name*" name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} required/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <DatePicker
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChange}
                                                   />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                            <div className="bs-example">
                                                <div className="accordion" id="accordionExample">
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                         
                                                            <h2 className="mb-0">
                                                                <button type="button" className="btn btn-link collapsed" onClick = {this.handleDepentent}>Dependant Information <i className={this.state.isSpouse?"fa fa-minus":"fa fa-plus"}></i></button>
                                                            </h2>
                                                        </div>
                                                              {this.state.isSpouse?<div className="card-body">
                                                                <div id="education_fields">
                                    
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="col">
                                                                        <div className="md-form">
                                                                            <input type="text" id="customerRegisterFormDependantFirstName" class="form-control"/>
                                                                            <label htmlFor="customerRegisterFormDependantFirstName">Dependant First Name</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="md-form">
                                                                            <input type="text" id="customerRegisterFormDependantLastName" class="form-control"/>
                                                                            <label htmlFor="customerRegisterFormDependantLastName">Dependant Last Name</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="col">
                                                                        <div className="md-form">
                                                                            <input type="date" id="customerRegisterFormDob2" classn="form-control"/>
                                                                            <label htmlFor="customerRegisterFormDob2">Date of Birth</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col text-center">
                                                                        <button class="btn btn-info my-2" type="button"  onClick={this.addDependent}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                                                                    </div>
                                                                </div>
                                                            </div>:
                                                              ''
                                                              }
                                                             {this.state.isSpouse ? this.dependentField():''}              
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <button class="btn btn-rounded my-4 waves-effect" onClick={this.submitStep3} >Next</button>
                                </form>
</Tab>
<Tab eventKey={4} title="Membership">
                        <form class="text-center" style={{color: '#757575'}}>            
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                            <MDBInput label="Group Code*" name='planid'onChange={this.handleChange} required/>
                                                
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                            <InputLabel htmlFor="amount-pic">Plan</InputLabel>
                                                <Select
                                                    value={this.state.plan}
                                                    name='plan'
                                                    onChange={this.handleChange}                                               
                                                    >
                                                    <MenuItem value={'Annual Base Plan'}>Annual Base Plan</MenuItem>
                                                    <MenuItem value={'Monthly Base Plan'}>Monthly Base Plan</MenuItem>
                                                    <MenuItem value={'Annual Premium Plan'}>Annual Premium Plan</MenuItem>
                                                    <MenuItem value={'Monthly Premium Plan'}>Monthly Premium Plan</MenuItem>
                                                    <MenuItem value={'Annual International Plan'}>Annual International Plan</MenuItem>
                                                    <MenuItem value={'Monthly International Plan'}>Monthly International Plan</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                            <InputLabel htmlFor="amount-pic">Amount</InputLabel>
                                                <Select
                                                    value={this.state.amount}
                                                    name='amount'
                                                    onChange={this.handleChange}                                               
                                                    >
                                                  
                                                    <MenuItem value={1000}>$1,000</MenuItem>
                                                    <MenuItem value={83.33}>$83.33</MenuItem>
                                                    <MenuItem value={2500}>$2,500</MenuItem>
                                                    <MenuItem value={208.33}>$208.33</MenuItem>
                                                    <MenuItem value={750}>$750.00</MenuItem>
                                                    <MenuItem value={62.50}>$62.50</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                &nbsp;
                                            </div>

                                        </div>
                                    </div>
                                    <button class="btn btn-rounded my-4 waves-effect" onClick={this.submitStep4}>Next</button>
                        </form>
 
</Tab>
<Tab eventKey={5} title="Payment">
                <form class="text-center" style={{color: '#757575'}}>
   {/* <div class="form-row">
                                    <div class="payment_inf">
                                        <div class="head">
                                            <h3>Payment Info</h3>
                                        </div>
                                        <p><strong>Name on card:</strong> John Doe</p>
                                        <p><strong>Card Number:</strong> xxxx xxxx xxxx 1253</p>
                                        <p><strong>Card Expiration:</strong> 04/2022</p>
                                    </div>
                                    
                                    <div class="subscription_inf">
                                        <div class="head">
                                            <h3>Subscription Info</h3>
                                        </div>
                                        <p>You have subscribed for <strong>Monthly Plan</strong></p>
                                    </div>
                                    
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="thank_you my-4">
                                            <h3>Thank You!</h3>
                                            <p>You're now a member of our list of awesome people.</p>
                                        </div>
                                    </div>
                                </div>*/}
                                <button class="btn btn-rounded my-4 waves-effect" onClick={()=>this.handleTab("6")} type="submit">Next</button>
                            </form>
</Tab>
<Tab eventKey={6} title="Success">
                         <div class="form-row">
                                    <div class="payment_inf">
                                        <div class="head">
                                            <h3>Membership Info</h3>
                                        </div>
                                        <p><strong>firstname:{this.state.firstname}</strong> </p>
                                        <p><strong>lastname:{this.state.lastname}</strong> </p>
                                        <p><strong>country:{this.state.country}</strong> </p>
                                        <p><strong>city:{this.state.lastname}</strong> </p>
                                        <p><strong>state: {this.state.city}</strong> </p>
                                        <p><strong>mobilenumber: {this.state.mobilenumber}</strong> </p>                                       
                                        <p><strong>companyname:{this.state.companyname}</strong> </p>
                                        <p><strong>spousename: {this.state.spousename}</strong> </p>
                                        <p><strong>plan: {this.state.plan}</strong> </p>
                                        <p><strong>Group Code: {this.state.planid}</strong> </p>
                                        <p><strong>amount:{this.state.amount}</strong> </p>
                                        
                                        
                                    </div>
                                    
                                    <div class="subscription_inf">
                                        <div class="head">
                                            <h3>Subscription Info</h3>
                                        </div>
                                        <p>You have subscribed for <strong>Monthly Plan</strong></p>
                                    </div>
                                    
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="thank_you my-4">
                                            <h3>Thank You!</h3>
                                            <p>You're now a member of our list of awesome people.</p>
                                        </div>
                                    </div>
                                </div>
</Tab>
</Tabs>
</div>
</div>
</div>
</div>
</div>
    </div>
        )
    }
}

export default MemberRegistrationForm;