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
            key: 2,
            isPreviewSave: false
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
       this.handleSubmit2 = this.handleSubmit2.bind(this);
       this.handleChange2 = this.handleChange2.bind(this);
      
       this.handleSubmit = this.handleSubmit.bind(this);
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
                dependentFields.push(<div className="card-body" key={i}>
               
                <div className="form-row px-2">
                    <div className="col">
                        <div className="md-form">
                            <MDBInput type="text" label={`Dependant First Name${i}`}name={`customerRegisterFormDependantFirstName${i}`} value={this.state.customerRegisterFormDependantFirstNamei} onChange={e => this.handleChange(e)} className="form-control"/>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="md-form">
                            <MDBInput label={`Dependant Last Name${i}`} type="text" name={`customerRegisterFormDependantLastName${i}`}  value={this.state.customerRegisterFormDependantLastNamei} onChange={e => this.handleChange(e)} className="form-control"/>

                        </div>
                    </div>
                </div>
                <div className="form-row px-2">
                    <div className="col">
                        <div className="md-form">
                            <input type="date" name={`customerRegisterFormDob${i}`}   value={this.state.customerRegisterFormDobi} onChange={e => this.handleChange(e)} className="form-control"/>
                            <label htmlFor="customerRegisterFormDob2">Date of Birth{i}</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="md-form">
                            &nbsp;
                        </div>
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
          
            handleSubmit(event) {
               event.preventDefault();
               this.setState((preState) =>({
                isPreviewSave:true
            }))  
              
               /*
               console.log(this.state);
               //return false
               
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
                    body: JSON.stringify(this.state), // body data type must match "Content-Type" header
                })
                let data = await response.json()

                console.log(data);
            console.log(this.state);
            console.log('hi');
           // return false;
            //this.handleTab(6);
           
        }
        catch(error){
            console.log(error);
          }
           */
           }
         async  handleSubmit2(event) {
             event.preventDefault();
            console.log(this.state);
            //return false
            
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
                 body: JSON.stringify(this.state), // body data type must match "Content-Type" header
             })
             let data = await response.json()

             console.log(data);
         if(data.status ==200)
         {
         setTimeout(()=>{
            this.props.history.push('/thanks');
        }, 1000)
         }
    }
     catch(error){
         console.log(error);
       }
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
              dependentFields.push(<div className="card-body">
              <div id="education_fields">

              </div>
              <div className="form-row px-2">
                  <div className="col">
                      <div className="md-form">
                          <input type="text" key={i} id="customerRegisterFormDependantFirstName" className="form-control"/>
                          <label htmlFor="customerRegisterFormDependantFirstName">Dependant First Name{i}</label>
                      </div>
                  </div>
                  <div className="col">
                      <div className="md-form">
                          <input type="text" key={i} id="customerRegisterFormDependantLastName" className="form-control"/>
                          <label htmlFor="customerRegisterFormDependantLastName">Dependant Last Name{i}</label>
                      </div>
                  </div>
              </div>
              <div className="form-row px-2">
                  <div className="col">
                      <div className="md-form">
                          <input type="date" key={i}  id="customerRegisterFormDob2" className="form-control"/>
                          <label htmlFor="customerRegisterFormDob2">Date of Birth{i}</label>
                      </div>
                  </div>
                  <div className="col text-center">
                      <button className="btn btn-info my-2" type="button"  onClick={this.addDependent}> <i className="fa fa-plus" aria-hidden="true"></i> </button>
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
             {!this.state.isPreviewSave?
             <div className="form_bg">
             <div className="header_part">
                 <h2>Member Application</h2>
             </div>
             <div className="form_body">
             <div className="px-lg-2 pt-0">
             
             <form style={{color: '#757575'}}  onSubmit={this.handleSubmit}>
                 <div className="head">
                      <div className="card bg-light text-dark">
                              <div className="card-body">Personal Information</div>
                      </div>
                 </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                               <MDBInput label="First Name*" name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                          <MDBInput label="Last Name*" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                                  <input type="date" name="dob" value={this.state.dob}
                                                     onChange={e => this.handleChange(e)}
                                                    
                                                 />
                                        <label htmlFor="Dob">Date Of Birth</label>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput type="number" label="Mobile No.*" name="mobilenumber" value={this.state.mobilenumber} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          {/*<MDBInput label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>*/}
                                              <MDBInput label="Email Address*" type="email" name="email" required value={this.state.email} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Set Your Password*" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
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
                                           
                                              <Select id="country"
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
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Member Address 1" name="address1" value={this.state.address1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Member Address 2 (Optional)" name="address2" value={this.state.address2} onChange={e => this.handleChange(e)}/> 
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="form-row px-2">
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

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>
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
                                          <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                                          <label className="custom-control-label" for="defaultUnchecked">Same as Member Address</label>
                                      </div>
                                      <h4><strong>Mailing Address</strong></h4>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Mailing Address 1" name="maddress1" value={this.state.maddress1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Mailing Address 2 (Optional)" name="maddress2" value={this.state.maddress2} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="City*" name='city1' value={this.state.city1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="State*" name='state_s1' value={this.state.state_s1} onChange={e => this.handleChange(e)}required/>                                              
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Zip*" name='zip' value={this.state.zip} onChange={e => this.handleChange(e)}required/>
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
                                          <div className="card-body">Family Information</div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Spouse Name*" name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <input type="date" name="spouseDateOfBirth"
                                                      value={this.state.spouseDateOfBirth}    
                                                      onChange={this.handleChange}
                                                 />
                                              <label htmlFor="spouseDateOfBirth">Spouse Date Of Birth</label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
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
                                                              <div className="form-row px-2">
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput label="Dependant First Name" type="text" name="customerRegisterFormDependantFirstName" value={this.state.customerRegisterFormDependantFirstName} onChange={e => this.handleChange(e)} />
                                                                       
                                                                     </div>
                                                                 </div>
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput label="Dependant Last Name" type="text" name="customerRegisterFormDependantLastName" value={this.state.customerRegisterFormDependantLastName} onChange={e => this.handleChange(e)} />
                                                                         
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className="form-row px-2">
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput label="Date of Birth" type="date" id="customerRegisterFormDob2"/>
                                                                       
                                                                     </div>
                                                                 </div>
                                                                 <div className="col">
                                                                    <div className="md-form">
                                                                        &nbsp;
                                                                    </div>
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

                              <div className="head">
                                  <div className="card text-dark bg-light">
                                      <div className="card-body">Membership</div>
                                  </div>
                              </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              {/*<MDBInput label="Group Code*" name='planid'onChange={this.handleChange} required/>*/}         
                                              <InputLabel htmlFor="age-simple">Plan </InputLabel>
                                              <Select
                                                  id="plan"
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
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Membership Fees" name="fees"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <InputLabel htmlFor="age-simple">Plan Type</InputLabel>
                                              <Select
                                                  id="plantype"
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
                                              <MDBInput label="Company Name*" name="companyname" value={this.state.companyname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Group Code*" name='planid'onChange={this.handleChange} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Writing Agent" name="writingagent" value ={this.state.writingagent} onChange={this.handleChange}/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Agent Manager" name="agentmanager" value ={this.state.agentmanager} onChange={this.handleChange}/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>
                    

                              <div className="buttons text-center">
                                  <button className="btn btn-rounded my-4 waves-effect">Cancel</button>
                                  <button className="btn btn-rounded my-4 waves-effect" type="submit">Preview & Edit</button>
                                
                              </div>    
                          </form>

                   
</div>
</div>
</div>: <div className="form_bg">
             <div className="header_part">
                 <h2>Preview Member Application</h2>
             </div>
             <div className="form_body">
             <div className="px-lg-2 pt-0">
             
             <form style={{color: '#757575'}}  onSubmit={this.handleSubmit2}>
                 <div className="head">
                      <div className="card bg-light text-dark">
                              <div className="card-body">Personal Information</div>
                      </div>
                 </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                               <MDBInput label="First Name*" name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                          <MDBInput label="Last Name*" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                                  <input type="date" name="dob" value={this.state.dob}
                                                     onChange={e => this.handleChange(e)}
                                                    
                                                 />
                                        <label htmlFor="Dob">Date Of Birth</label>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput type="number" label="Mobile No.*" name="mobilenumber" value={this.state.mobilenumber} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          {/*<MDBInput label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>*/}
                                              <MDBInput label="Email Address*" type="email" name="email" required value={this.state.email} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Set Your Password*" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
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
                                           
                                              <Select id="country"
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
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Member Address 1" name="address1" value={this.state.address1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Member Address 2 (Optional)" name="address2" value={this.state.address2} onChange={e => this.handleChange(e)}/> 
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="form-row px-2">
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

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>
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
                                          <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                                          <label className="custom-control-label" for="defaultUnchecked">Same as Member Address</label>
                                      </div>
                                      <h4><strong>Mailing Address</strong></h4>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Mailing Address 1" name="maddress1" value={this.state.maddress1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Mailing Address 2 (Optional)" name="maddress2" value={this.state.maddress2} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="City*" name='city1' value={this.state.city1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="State*" name='state_s1' value={this.state.state_s1} onChange={e => this.handleChange(e)}required/>                                              
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Zip*" name='zip' value={this.state.zip} onChange={e => this.handleChange(e)}required/>
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
                                          <div className="card-body">Family Information</div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Spouse Name*" name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <input type="date" name="spouseDateOfBirth"
                                                      value={this.state.spouseDateOfBirth}    
                                                      onChange={this.handleChange}
                                                 />
                                              <label htmlFor="spouseDateOfBirth">Spouse Date Of Birth</label>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
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
                                                              <div className="form-row px-2">
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput label="Dependant First Name" type="text" name="customerRegisterFormDependantFirstName" value={this.state.customerRegisterFormDependantFirstName} onChange={e => this.handleChange(e)} />
                                                                       
                                                                     </div>
                                                                 </div>
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput label="Dependant Last Name" type="text" name="customerRegisterFormDependantLastName" value={this.state.customerRegisterFormDependantLastName} onChange={e => this.handleChange(e)} />
                                                                         
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className="form-row px-2">
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput label="Date of Birth" type="date" id="customerRegisterFormDob2"/>
                                                                       
                                                                     </div>
                                                                 </div>
                                                                 <div className="col">
                                                                    <div className="md-form">
                                                                        &nbsp;
                                                                    </div>
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

                              <div className="head">
                                  <div className="card text-dark bg-light">
                                      <div className="card-body">Membership</div>
                                  </div>
                              </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              {/*<MDBInput label="Group Code*" name='planid'onChange={this.handleChange} required/>*/}         
                                              <InputLabel htmlFor="age-simple">Plan </InputLabel>
                                              <Select
                                                  id="plan"
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
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Membership Fees" name="fees"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <InputLabel htmlFor="age-simple">Plan Type</InputLabel>
                                              <Select
                                                  id="plantype"
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
                                              <MDBInput label="Company Name*" name="companyname" value={this.state.companyname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Group Code*" name='planid'onChange={this.handleChange} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Writing Agent" name="writingagent" value ={this.state.writingagent} onChange={this.handleChange}/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput label="Agent Manager" name="agentmanager" value ={this.state.agentmanager} onChange={this.handleChange}/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>
                    

                              <div className="buttons text-center">
                                  <button className="btn btn-rounded my-4 waves-effect">Cancel</button>
                                  
                                  <button className="btn btn-rounded my-4 waves-effect" type="submit">Save & Payment</button>
                              </div>    
                          </form>

                   
</div>
</div>
</div>}
           



</div>
</div>
    </div>
        )
    }
}

export default MemberRegistrationForm;