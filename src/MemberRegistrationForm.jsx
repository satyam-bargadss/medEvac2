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
import Select2, {Option} from '@material/react-select';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
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
         options: [],
         startDate: new Date(),
         isDependent:false,
         addDependentByOne:'0',
         country:'USA',
         type:'',
         plan:'',
         amount:'',
         fees:''
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit2 = this.handleSubmit2.bind(this);
       this.handleChange2 = this.handleChange2.bind(this);
      
       this.handleSubmit = this.handleSubmit.bind(this);
      this.getUsedrByIdName();
    }

    async  getUsedrByIdName() {
      
        
       //return false
       
       try{
        let response = await fetch(URL+'agents-byname', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
        
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                    'Content-Type': 'application/json',
                    
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            //redirect: 'follow', // manual, *follow, error
            //referrer: 'no-referrer', // no-referrer, *client
          // body data type must match "Content-Type" header
        })
        let data = await response.json()

        //console.log(data);
    if(data.status ==200)
    {
      console.log(data.AgentByIdName);
      this.setState({options: data.AgentByIdName})
      
       console.log(this.state.options);
    }
}
catch(error){
    console.log(error);
  }
     } 
  
     handleChange2(event) {
        this.setState(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
      }

    mailingAddressSame(){

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
                            <input type="date" name={`customerRegisterFormDob${i}`}  autoComplete="off" value={this.state.customerRegisterFormDobi} onChange={e => this.handleChange(e)} className="form-control"/>
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
                }
                )
                if(this.state.plan!=='')
                {
               this.setState((preState)=>({
                 fees:preState.plan
                  
               }))
            }
               console.log(this.state);
             
               
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
                          <input autoComplete="off" type="text" key={i} id="customerRegisterFormDependantFirstName" className="form-control"/>
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
                 <h2>Client Application</h2>
             </div>
             <div className="form_body">
             <div className="px-lg-2 pt-0">
             
             <form style={{color: '#757575'}}  onSubmit={this.handleSubmit}>
                                <div className="head">
                                    <div className="card bg-light text-dark">
                                            <div className="card-body">Personal Information</div>
                                    </div>
                                </div>
                                <br/>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                               <MDBInput autoComplete="off" label="First Name*" name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                          <MDBInput autoComplete="off" label="Last Name*" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
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
                                            <MDBInput autoComplete="off" type="number" label="Alternate Mobile Number" name="alternatemobilenumber" value={this.state.mobilenumber} onChange={e => this.handleChange(e)}/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div classname="md-form">
                                            <MDBInput autoComplete="off" label="Email Address*" type="email" name="email" required value={this.state.email} onChange={e => this.handleChange(e)}/>
                                        </div>
                                    </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                            <MDBInput autoComplete="off" required label="Set Your Password*" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
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
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="Member Address 1*" name="address1" value={this.state.address1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Member Address 2 (Optional)" name="address2" value={this.state.address2} onChange={e => this.handleChange(e)}/> 
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="City*" name='city' value={this.state.city} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  autoComplete="off" label="State*" name='state_s' value={this.state.state_s} onChange={e => this.handleChange(e)}required/>                                              
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  type="number" label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>
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
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="Mailing Address 1*" name="maddress1" value={this.state.maddress1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="Mailing Address 2 (Optional)" name="maddress2" value={this.state.maddress2} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="City*" required name='city1' value={this.state.city1} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="State*" required name='state_s1' value={this.state.state_s1} onChange={e => this.handleChange(e)}/>                                              
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  type="number" required autoComplete="off" label="Zip *" name='zip' value={this.state.zip} onChange={e => this.handleChange(e)}/>
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
                                    <br/>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Spouse Name" name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} />
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
                                                                         <MDBInput  autoComplete="off" label="Dependant First Name" type="text" name="customerRegisterFormDependantFirstName" value={this.state.customerRegisterFormDependantFirstName} onChange={e => this.handleChange(e)} />
                                                                       
                                                                     </div>
                                                                 </div>
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput  autoComplete="off"label="Dependant Last Name" type="text" name="customerRegisterFormDependantLastName" value={this.state.customerRegisterFormDependantLastName} onChange={e => this.handleChange(e)} />
                                                                         
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className="form-row px-2">
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput autoComplete="off" label="Date of Birth" type="date" id="customerRegisterFormDob2"/>
                                                                       
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
                                <br/>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">        
                                              <InputLabel htmlFor="age-simple">Plan* </InputLabel>
                                              <Select
                                                 
                                                  value={this.state.plan}
                                                  name='plan'
                                                  onChange={this.handleChange}    
                                                  inputProps={{
                                                    id: 'plan-required',
                                                  }}           
                                                  >
                                                  <MenuItem value={'$1000'}>Annual Base Plan</MenuItem>
                                                  <MenuItem value={'$2000'}>Monthly Base Plan</MenuItem>
                                                  <MenuItem value={'$3000'}>Annual Premium Plan</MenuItem>
                                                  <MenuItem value={'$4000'}>Monthly Premium Plan</MenuItem>
                                                  <MenuItem value={'$5000'}>Annual International Plan</MenuItem>
                                                  <MenuItem value={'$6000'}>Monthly International Plan</MenuItem>
                                              </Select>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">  
                                              <MDBInput autoComplete="off" readOnly value={this.state.fees}   label="Membership Fees" name="fees"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <InputLabel htmlFor="age-simple">Plan Type*</InputLabel>
                                              <Select
                                                  id="plantype"
                                                  value={this.state.type}
                                                  onChange={this.handleChange}
                                                  name='type'  
                                                  required                                             
                                                  >
                                                  <MenuItem value="US" selected>
                                                      <em>Individual</em>
                                                  </MenuItem>
                                                  <MenuItem value={10}>Corporate</MenuItem>
                                                  <MenuItem value={20}>Government</MenuItem>
                                              </Select>             
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Company, Government or Group Name" name="companyname" value={this.state.companyname} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  autoComplete="off" label="Group Code*" name='planid'onChange={this.handleChange} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              {/*<MDBInput autoComplete="off"  label="Writing Agent*" name="writingagent" value ={this.state.writingagent} onChange={this.handleChange} required/>*/}
                                              <Select2
                                                    label='Select Agent'
                                                    name="selectedAgentId"
                                                    value={this.state.selectedAgentId}
                                                   
                                                    onChange={this.handleChange}
                                                    >
                                                         <Option value='' disabled selected>Please Select</Option>
                                                         {this.state.options.map((row1) => <Option key={row1.agentId} value={row1.agentId}>{row1.firstName+" "+row1.lastName}</Option>)}                                         
                                                    </Select2>
                                                   
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <Select2
                                                    label='Select Manager'
                                                    name="selectedManagerId"
                                                    value={this.state.selectedManagerId}
                                                   
                                                    onChange={this.handleChange}
                                                    >
                                                         <Option value='' disabled selected>Please Select</Option>
                                                         {this.state.options.map((row1) => <Option key={row1.agentId} value={row1.agentId}>{row1.firstName+" "+row1.lastName}</Option>)}                                         
                                                    </Select2>
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
                 <h2>Preview Client Application</h2>
             </div>
             <div className="form_body">
             <div className="px-lg-2 pt-0">
             
             <form style={{color: '#757575'}}  onSubmit={this.handleSubmit2}>
                 <div className="head">
                      <div className="card bg-light text-dark">
                              <div className="card-body">Personal Information</div>
                      </div>
                 </div>
                 <br/>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                               <MDBInput autoComplete="off" label="First Name*" name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                          <MDBInput autoComplete="off" label="Last Name*" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
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
                                              <MDBInput autoComplete="off" type="number" label="Primary Phone Number*" name="mobilenumber" value={this.state.mobilenumber} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                    <div className="col">
                                      <div className="md-form">
                                            <MDBInput autoComplete="off" type="number" label="Alternate Phone Number*" name="alternatemobilenumber" value={this.state.mobilenumber} onChange={e => this.handleChange(e)}/> 
                                      </div>          
                                    </div>
                                    <div className="col">
                                        <div className="md-form">   
                                            <MDBInput autoComplete="off" label="Email Address*" type="email" name="email" required value={this.state.email} onChange={e => this.handleChange(e)}/>          
                                        </div>      
                                    </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                            <MDBInput autoComplete="off" required label="Set Your Password*" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />     
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
                                                  <MenuItem value={'jamaica'}>Jamaica</MenuItem>
                                                  <MenuItem value={'antigua'}>Antigua</MenuItem>
                                                  <MenuItem value={'TrinidadandTobago'}>Trinidad and Tobago</MenuItem>
                                                  <MenuItem value={'Dominicanrepublic'}>Dominican Republic</MenuItem>
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
                                              <MDBInput autoComplete="off" label="Member Address 1*" name="address1" value={this.state.address1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Member Address 2 (Optional)" name="address2" value={this.state.address2} onChange={e => this.handleChange(e)}/> 
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="City*" name='city' value={this.state.city} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  autoComplete="off" label="State*" name='state_s' value={this.state.state_s} onChange={e => this.handleChange(e)}required/>                                              
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  type="number" label="Zip Code*" name='zipcode' value={this.state.zipcode} onChange={e => this.handleChange(e)} required/>
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
                                  <br/>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="Mailing Address 1*" name="maddress1" value={this.state.maddress1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="Mailing Address 2 (Optional)" name="maddress2" value={this.state.maddress2} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="City*" required name='city1' value={this.state.city1} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="State*" required name='state_s1' value={this.state.state_s1} onChange={e => this.handleChange(e)}/>                                              
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  type="number" required autoComplete="off" label="Zip*" name='zip' value={this.state.zip} onChange={e => this.handleChange(e)}/>
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
                                  <br/>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Spouse Name" name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} />
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
                                                                         <MDBInput  autoComplete="off" label="Dependant First Name" type="text" name="customerRegisterFormDependantFirstName" value={this.state.customerRegisterFormDependantFirstName} onChange={e => this.handleChange(e)} />
                                                                       
                                                                     </div>
                                                                 </div>
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput  autoComplete="off"label="Dependant Last Name" type="text" name="customerRegisterFormDependantLastName" value={this.state.customerRegisterFormDependantLastName} onChange={e => this.handleChange(e)} />
                                                                         
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className="form-row px-2">
                                                                 <div className="col">
                                                                     <div className="md-form">
                                                                         <MDBInput autoComplete="off" label="Date of Birth" type="date" id="customerRegisterFormDob2"/>
                                                                       
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
                              <br/>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              {/*<MDBInput label="Group Code*" name='planid'onChange={this.handleChange} required/>*/}         
                                              <InputLabel htmlFor="age-simple">Plan* </InputLabel>
                                              <Select
                                                 
                                                 value={this.state.plan}
                                                 name='plan'
                                                 onChange={this.handleChange}    
                                                 inputProps={{
                                                   id: 'plan-required',
                                                 }}           
                                                 >
                                                 <MenuItem value={'$1000'}>Annual Base Plan</MenuItem>
                                                 <MenuItem value={'$2000'}>Monthly Base Plan</MenuItem>
                                                 <MenuItem value={'$3000'}>Annual Premium Plan</MenuItem>
                                                 <MenuItem value={'$4000'}>Monthly Premium Plan</MenuItem>
                                                 <MenuItem value={'$5000'}>Annual International Plan</MenuItem>
                                                 <MenuItem value={'$6000'}>Monthly International Plan</MenuItem>
                                             </Select>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                          <MDBInput autoComplete="off" readOnly value={this.state.fees}   label="Membership Fees" name="fees"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <InputLabel htmlFor="age-simple">Plan Type*</InputLabel>
                                              <Select
                                                  id="plantype"
                                                  value={this.state.type}
                                                  onChange={this.handleChange}
                                                  name='type'  
                                                  required                                             
                                                  >
                                                  <MenuItem value="us">
                                                      <em>Individual</em>
                                                  </MenuItem>
                                                  <MenuItem value={10}>Corporate</MenuItem>
                                                  <MenuItem value={20}>Government</MenuItem>
                                              </Select>             
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Company, Government or Group Name" name="companyname" value={this.state.companyname} onChange={e => this.handleChange(e)}/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  autoComplete="off" label="Group Code*" name='planid'onChange={this.handleChange} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              {/*<MDBInput autoComplete="off"  label="Writing Agent*" name="writingagent" value ={this.state.writingagent} onChange={this.handleChange} required/>*/}
                                              <Select2
                                                    label='Select Agent'
                                                    name="selectedAgentId"
                                                    value={this.state.selectedAgentId}
                                                   
                                                    onChange={this.handleChange}
                                                    >
                                                         <Option value='' disabled selected>Please Select</Option>
                                                         {this.state.options.map((row1) => <Option key={row1.agentId} value={row1.agentId}>{row1.firstName+" "+row1.lastName}</Option>)}                                         
                                                    </Select2>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <Select2
                                                    label='Select Manager'
                                                    name="selectedManagerId"
                                                    value={this.state.selectedManagerId}
                                                   
                                                    onChange={this.handleChange}
                                                    >
                                                         <Option value='' disabled selected>Please Select</Option>
                                                         {this.state.options.map((row1) => <Option key={row1.agentId} value={row1.agentId}>{row1.firstName+" "+row1.lastName}</Option>)}                                         
                                                    </Select2>
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