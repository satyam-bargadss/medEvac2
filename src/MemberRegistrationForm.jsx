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
import TextField from '@material-ui/core/TextField';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'reactstrap';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactPhoneInput from 'react-phone-input-2';

const URL = myConst.HTTP_URL;
class MemberRegistrationForm extends Component {
    constructor(props) {
        super(props);
        console.log(props) ;
      
            //this.getManagerByIdName(this.state.selectedAgentId);
        
      
        this.state = {
            key: 2,
            isPreviewSave: false,
            sameAsContactInformation:true
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
         fees:'',
         selectedManagerId:''
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit2 = this.handleSubmit2.bind(this);
       this.handleChange2 = this.handleChange2.bind(this);
      
       this.handleSubmit = this.handleSubmit.bind(this);
      this.getUsedrByIdName();
    }
    
    
      
        
        //return false
        onChangeAgentHandler =(e)=>{
            this.setState({
                [e.target.name]: e.target.value},()=>{
                    console.log(this.state.selectedAgentId)
                    return this.getManagerByIdName(this.state.selectedAgentId);
                  })
        }
        onChangeMemberPlanHandler =(e)=>{
            this.setState({
                [e.target.name]: e.target.value},()=>{
                    console.log(this.state.plan)
                    console.log(this.state.type);
                    return this.getPlanDetailId(this.state.plan,this.state.type);
                    //getManagerByIdName
                  })
        }

        //get Plan Detail
        async getPlanDetailId(currentPlanId,currentclientType) {
      
        
            //return false
          
            try{
             let response = await fetch(URL+'get-plan-detail?currentPlanId='+currentPlanId+'&clientType='+currentclientType, {
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
      
             console.log(data);
         if(data.status ==200)
         {
           
          await  this.setState({plan_detail: data.plan_detail});
          if(this.state.plan_detail[0].familyFee)
          {
            this.setState({fees: data.plan_detail[0].familyFee});
          }
          else{
            this.setState({fees: data.plan_detail[0].fee});
          }
         
          this.setState({frequency: data.plan_detail[0].frequency});
          this.setState({initiationFee: data.plan_detail[0].initiatonFee});
          console.log(this.state.plan_detail);
          /*
          var newArray = [];    
          for(let i=0;i<this.state.agentManager.length;i++)
          {
            console.log(this.state.agentManager[i].agentId);
            newArray.push({id:this.state.agentManager[i].agentId, name:this.state.agentManager[i].firstName + ' '+this.state.agentManager[i].lastName})
           
          }
          console.log(newArray);
         
          this.setState({ manager: newArray });
          //this.setState(preState=>{})
          // console.log(this.state.manager);
            */
         }
       
      }
      catch(error){
         console.log(error);
       }
       
          
      } 
        //end Get Plan Detail
        async getManagerByIdName(currentAgentId) {
      
        
            //return false
          
            try{
             let response = await fetch(URL+'manager-by-agent?currentAgent='+currentAgentId, {
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
           
          await  this.setState({agentManager: data.agentManager});
          console.log(this.state.agentManager);
          /*
          var newArray = [];    
          for(let i=0;i<this.state.agentManager.length;i++)
          {
            console.log(this.state.agentManager[i].agentId);
            newArray.push({id:this.state.agentManager[i].agentId, name:this.state.agentManager[i].firstName + ' '+this.state.agentManager[i].lastName})
           
          }
          console.log(newArray);
         
          this.setState({ manager: newArray });
          //this.setState(preState=>{})
          // console.log(this.state.manager);
            */
         }
       
      }
      catch(error){
         console.log(error);
       }
       
          
      } 
      async  getPlanByIdName() {
      
        
        //return false
        
        try{
         let response = await fetch(URL+'get-plan', {
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
 
         console.log(data.planDetails);
     if(data.status ==200)
     {
       console.log(data.planDetails);
       this.setState({planOption: data.planDetails})
       
        console.log(this.state.planOption);
     }
 }
 catch(error){
     console.log(error);
   }
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
     handleDepentent1 = ()=>{
        this.setState((preState) => ({
            isFamily: !preState.isFamily 
          }));
         //console.log(this.state.isFamily); 
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
             dependentField1 =() =>{
                var dependentFields1 = [];
                 dependentFields1.push(
                    <div class="card-body" key="wife1">
                            <div className="form-row px-2">
                                <div className="col">
                                    <div className="md-form">
                                        <MDBInput autoComplete="off"  label="Spouse Name" required={this.state.type =='isFamily' ?'required':''} name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input type="date" name="familyDateOfBirth"
                                                value={this.state.familyDateOfBirth}    
                                                onChange={this.handleChange}
                                                required={ this.state.type =='isFamily' ?'required':''}
                                            />
                                        <label htmlFor="DateOfBirth">Spouse Date Of Birth</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                  );
                console.log('Tirtha');
                return(dependentFields1);
               }
               
               notsameAsContactHandler = (sameasValue)=>{
                if(sameasValue === true){
                    console.log(sameasValue)
                    return false
                    this.setState({country1:this.state.country,
                       maddress1:this.state.address1,
                       maddress2:this.state.address2,
                       city1:this.state.city,
                       state_s1:this.state.state_s,
                       zip:this.state.zipcode
                      })
                   }//end of same as contact information checked     
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
                    maddress1:this.state.address1,
                    maddress2:this.state.address2,
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
                /* alert('cvcgfgfg');
                const checkBoxValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                console.log(checkBoxValue);
                this.setState({sameAsContactInformation:checkBoxValue})
                */
             }
    
             handleChange = (e) => {
                   {/*console.log(e.target);
                    if(e.target.name === "country" && e.target.value!="US"){
                    var stateInput=document.getElementByClassName('state_input');
                    stateInput.style.display="block";
                    var state_option1=document.getElementByClassName('state_option1');
                    state_option1.style.display="block";
                    var state_option=document.getElementByClassName('state_option');
                    state_option.style.display="block";
                  }*/}
                this.setState({
                        [e.target.name]: e.target.value,
                }
                )
                // console.log(this.state);               
            }
            
            handleSubmit(event) {
               event.preventDefault();
               this.setState((preState) =>({
                isPreviewSave:true
            }));
            window.scrollTo(0, 0);  
           }
         async  handleSubmit2(event) {
             event.preventDefault();
            console.log(this.state);
            //return false
            
            try{
             let response = await fetch(URL+'customber-registration', {
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
         this.getManagerByIdName(this.state.selectedAgentId);
         this.getManagerByIdName();
         this.getPlanByIdName();
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

           let dependentField1 =() =>{
            var dependentFields1 = [];
                 dependentFields1.push(
                        <div class="card-body">
                            <div className="form-row px-2">
                                <div className="col">
                                    <div className="md-form">
                                        <MDBInput autoComplete="off"  label="Spouse Name" required={ this.state.type =='isFamily' ?'required':''} name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input type="date" name="familyDateOfBirth"
                                                value={this.state.familyDateOfBirth}    
                                                onChange={this.handleChange}
                                                required={ this.state.type =='isFamily' ?'required':''}
                                            />
                                        <label htmlFor="DateOfBirth">Spouse Date Of Birth</label>
                                    </div>
                                </div>
                            </div>
                        </div>);
             console.log('Pradosh');
            return(dependentFields1);
            
           }   
           

           
      }
    
    render() { 
              
        return (
            <div style={{width: '100%'}}>
              {this.state.sameAsContactInformation}  
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
                                          {/*<PhoneInput
                                                placeholder="Primary Phone Number"
                                                value={this.state.phone}
                                                onChange={ phone => this.setState({phone})} 
                                          />*/}
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
                                              {/*<MDBInput autoComplete="off" type="number" label="Primary Phone Number*" name="mobilenumber" value={this.state.mobilenumber} onChange={e => this.handleChange(e)} required/>*/}
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                    <div className="col">
                                        <div className="md-form">
                                            {/*<MDBInput autoComplete="off" type="number" label="Alternate Phone Number" name="alternatemobilenumber" value={this.state.alternatemobilenumber} onChange={e => this.handleChange(e)}/>
                                            <PhoneInput
                                                placeholder="Alternate Phone Number"
                                                value={ this.state.phone }
                                                onChange={ phone1 => this.setState({ phone1 }) } 
                                            />*/}
                                            <InputLabel class="custom_class" htmlFor="phone">Alternate Phone Number </InputLabel>
                                            <ReactPhoneInput
                                            inputExtraProps={{
                                                name: 'alternatemobilenumber',
                                                required: true                                                
                                              }}
                                            defaultCountry="us"
                                            value={this.state.phone1}
                                            onChange={phone1 => this.setState({phone1})}
                                            required/>
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
                                              &nbsp;
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off" label="Client Address 1*" name="address1" value={this.state.address1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Client Address 2 (Optional)" name="address2" value={this.state.address2} onChange={e => this.handleChange(e)}/> 
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
                                                <MDBInput className="state_input"  autoComplete="off" label="State*" name='state_s' value={this.state.state_s} onChange={e => this.handleChange(e)} required/>                                        
                                              {/*<InputLabel className="state_option1" htmlFor="state">State* </InputLabel>
                                              <Select className="state_option" value={this.state.state_s}                                               
                                              name="state_s"
                                              onChange={this.handleChange} 
                                              required                               
                                              >
                                                  
                                                    <MenuItem value="AL">Alabama (AL)</MenuItem>
                                                    <MenuItem value="AK">Alaska (AK)</MenuItem>
                                                    <MenuItem value="AZ">Arizona (AZ)</MenuItem>
                                                    <MenuItem value="AR">Arkansas (AR)</MenuItem>
                                                    <MenuItem value="CA">California (CA)</MenuItem>
                                                    <MenuItem value="CO">Colorado (CO)</MenuItem>
                                                    <MenuItem value="CT">Connecticut (CT)</MenuItem>
                                                    <MenuItem value="DE">Delaware (DE)</MenuItem>
                                                    <MenuItem value="DC">District Of Columbia (DC)</MenuItem>
                                                    <MenuItem value="FL">Florida (FL)</MenuItem>
                                                    <MenuItem value="GA">Georgia (GA)</MenuItem>
                                                    <MenuItem value="HI">Hawaii (HI)</MenuItem>
                                                    <MenuItem value="ID">Idaho (ID)</MenuItem>
                                                    <MenuItem value="IL">Illinois (IL)</MenuItem>
                                                    <MenuItem value="IN">Indiana (IN)</MenuItem>
                                                    <MenuItem value="IA">Iowa (IA)</MenuItem>
                                                    <MenuItem value="KS">Kansas (KS)</MenuItem>
                                                    <MenuItem value="KY">Kentucky (KY)</MenuItem>
                                                    <MenuItem value="LA">Louisiana (LA)</MenuItem>
                                                    <MenuItem value="ME">Maine (ME)</MenuItem>
                                                    <MenuItem value="MD">Maryland (MD)</MenuItem>
                                                    <MenuItem value="MA">Massachusetts (MA)</MenuItem>
                                                    <MenuItem value="MI">Michigan (MI)</MenuItem>
                                                    <MenuItem value="MN">Minnesota (MN)</MenuItem>
                                                    <MenuItem value="MS">Mississippi (MS)</MenuItem>
                                                    <MenuItem value="MO">Missouri (MO)</MenuItem>
                                                    <MenuItem value="MT">Montana (MT)</MenuItem>
                                                    <MenuItem value="NE">Nebraska (NE)</MenuItem>
                                                    <MenuItem value="NV">Nevada (NV)</MenuItem>
                                                    <MenuItem value="NH">New Hampshire (NH)</MenuItem>
                                                    <MenuItem value="NJ">New Jersey (NJ)</MenuItem>
                                                    <MenuItem value="NM">New Mexico (NM)</MenuItem>
                                                    <MenuItem value="NY">New York (NY)</MenuItem>
                                                    <MenuItem value="NC">North Carolina (NC)</MenuItem>
                                                    <MenuItem value="ND">North Dakota (ND)</MenuItem>
                                                    <MenuItem value="OH">Ohio (OH)</MenuItem>
                                                    <MenuItem value="OK">Oklahoma (OK)</MenuItem>
                                                    <MenuItem value="OR">Oregon (OR)</MenuItem>
                                                    <MenuItem value="PA">Pennsylvania (PA)</MenuItem>
                                                    <MenuItem value="RI">Rhode Island (RI)</MenuItem>
                                                    <MenuItem value="SC">South Carolina (SC)</MenuItem>
                                                    <MenuItem value="SD">South Dakota (SD)</MenuItem>
                                                    <MenuItem value="TN">Tennessee (TN)</MenuItem>
                                                    <MenuItem value="TX">Texas (TX)</MenuItem>
                                                    <MenuItem value="UT">Utah (UT)</MenuItem>
                                                    <MenuItem value="VT">Vermont</MenuItem>
                                                    <MenuItem value="VA">Virginia</MenuItem>
                                                    <MenuItem value="WA">Washington</MenuItem>
                                                    <MenuItem value="WV">West Virginia</MenuItem>
                                                    <MenuItem value="WI">Wisconsin</MenuItem>
                                                    <MenuItem value="WY">Wyoming</MenuItem>
                                            </Select>*/}
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
                                      <div className="">
                                         {/*
                                               <input type="checkbox" className="custom-control-input"
                                               name="sameAsContactInformation"  
                                               checked={this.state.sameAsContactInformation}
                                               onChange={this.sameAsContactHandler}/>
                                              <label className="custom-control-label" for="defaultUnchecked">Same  Client Address</label>
                                              */
                                         }
                                         <input
                                        
                                          name="sameAsContactInformation"
                                            type="checkbox"
                                            checked={this.state.sameAsContactInformation}
                                            onChange={this.sameAsContactHandler} />&nbsp;&nbsp;Same as Client Address
                                             {/*<label className="custom-control-label" HTMLfor="defaultUnchecked">Same as Client Address</label>*/}
                                      </div>
                                      <h4><strong>Mailing Address</strong></h4>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                            <InputLabel class="custom_class" htmlFor="country">Country* </InputLabel>
                                              <Select id="country1"
                                              value={this.state.country1}                                               
                                              name="country1"
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
                                  {/*<div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Spouse Name" required={ this.state.type =='Family' ?'required':''} name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} />
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <input type="date" name="spouseDateOfBirth"
                                                      value={this.state.spouseDateOfBirth}    
                                                      onChange={this.handleChange}
                                                      required={ this.state.type =='Family' ?'required':''}
                                                 />
                                              <label htmlFor="spouseDateOfBirth">Spouse Date Of Birth</label>
                                          </div>
                                      </div>
                                  </div>*/}
                                  <div className="form-row px-2">
                                          <div className="bs-example">
                                              <div className="accordion" id="accordionExample">
                                                  <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h2 class="mb-0">
                                                        <button type="button" class="btn btn-link waves-effect waves-light collapsed" onClick = {this.handleDepentent1}>Spouse Information <i className={this.state.isFamily?"fa fa-minus":"fa fa-plus"}></i></button>
                                                       </h2>  
                                                    </div>
                                                    {/*<div id="collapseOne" class="collapse" aria-labelledby="headingOne">*/}
                                                    {this.state.isFamily? <div class="card-body">
                                                            <div className="form-row px-2">
                                                                <div className="col">
                                                                    <div className="md-form">
                                                                        <MDBInput autoComplete="off"  label="Spouse Name" required={this.state.type =='isFamily' ?'required':''} name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="md-form">
                                                                        <input type="date" name="familyDateOfBirth"
                                                                                value={this.state.familyDateOfBirth}    
                                                                                onChange={this.handleChange}
                                                                                required={ this.state.type =='isFamily' ?'required':''}
                                                                            />
                                                                        <label htmlFor="DateOfBirth">Spouse Date Of Birth</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>:''}
                                                        {/*this.state.isFamily ? this.dependentField1():''*/}   
                                                    </div>
                                                {/*</div>*/}
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
                                                           {/*this.state.isSpouse ? this.dependentField():''*/}              
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
                                          <InputLabel class="custom_class" htmlFor="age-simple">Membership Type*</InputLabel>
                                              <Select
                                                  id="plantype"
                                                  value={this.state.type}
                                                  onChange={this.handleChange}
                                                  name='type'  
                                                  required                                             
                                                  >
                                                  <MenuItem value="Individual" selected>
                                                    Individual
                                                  </MenuItem>
                                                  <MenuItem value="Family">Family</MenuItem>
                                                  <MenuItem value="Corporate">Corporate</MenuItem>
                                                  <MenuItem value="Government">Government</MenuItem>
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
                                              <InputLabel class="custom_class" htmlFor="age-simple">Membership Plan* </InputLabel>
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
                                              <MDBInput autoComplete="off" readOnly value={this.state.fees}   label="Membership Fees" name="fees"/>
                                          </div>
                                      </div>
                                      </div>
                                      <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">  
                                              {/*<MDBInput autoComplete="off" readOnly value={this.state.frequency}   label="Frequency " name="frequency"/>*/}
                                             
                                              <MDBInput
                                                autoComplete="off" 
                                                readOnly
                                                label="Frequency"
                                                value={this.state.frequency}
                                                  onChange={this.handleChange}
                                                  name='frequency'  
                                                  required   
                                                  />                                            
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">  
                                              <MDBInput autoComplete="off" readOnly value={this.state.initiationFee}   label="Initiation Fees" name="initiationFee"/>
                                          </div>
                                      </div>
                                      </div>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                                <MDBInput autoComplete="off"  label="Company, Government or Group Name" name="companyname" value={this.state.companyname} onChange={e => this.handleChange(e)}/>               
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                          <MDBInput  autoComplete="off" label="Group Code*" name='planid'onChange={this.handleChange} required/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                          <InputLabel class="custom_class" htmlFor="select-agent">Select Agent</InputLabel>
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
                                      <div className="col">
                                          <div className="md-form">
                                              {/*<MDBInput autoComplete="off"  label="Writing Agent*" name="writingagent" value ={this.state.writingagent} onChange={this.handleChange} required/>*/}
                                                <InputLabel class="custom_class" htmlFor="select-manager">Select Manager</InputLabel>
                                                <Select
                                                    label='Select Manager'
                                                    name="selectedManagerId"
                                                    value={this.state.selectedManagerId}
                                                   
                                                    onChange={this.handleChange}
                                                    >
                                                       {this.state.agentManager? this.state.agentManager.map((row2) => <MenuItem key={row2.agentId} value={row2.agentId}>{row2.firstName+" "+row2.lastName}</MenuItem>) :''}
                                                                                               
                                                </Select>
                                                    {console.log(this.state.agentManager)}
                                                   
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

                                              {/*<MDBInput autoComplete="off" type="number" label="Primary Phone Number*" name="mobilenumber" value={this.state.phone}  onChange={e => this.handleChange(e)} required/>*/}
                                              <ReactPhoneInput
                                            inputExtraProps={{
                                                name: 'mobilenumber',
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
                                            {/*<MDBInput autoComplete="off" type="number" label="Alternate Phone Number*" name="alternatemobilenumber" value={this.state.alternatemobilenumber} onChange={e => this.handleChange(e)}/> */}
                                            <ReactPhoneInput
                                            inputExtraProps={{
                                                name: 'alternatemobilenumber',
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
                                          <InputLabel class="custom_class" htmlFor="country">Country* </InputLabel>
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
                                              <MDBInput autoComplete="off" label="Client Address 1*" name="address1" value={this.state.address1} onChange={e => this.handleChange(e)} required/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Client Address 2 (Optional)" name="address2" value={this.state.address2} onChange={e => this.handleChange(e)}/> 
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
                                      <div className="">
                                         {/*
                                               <input type="checkbox" className="custom-control-input"
                                               name="sameAsContactInformation"  
                                               checked={this.state.sameAsContactInformation}
                                               onChange={this.sameAsContactHandler}/>
                                              <label className="custom-control-label" for="defaultUnchecked">Same  Client Address</label>
                                              */
                                         }
                                         <input
                                        
                                          name="sameAsContactInformation"
                                            type="checkbox"
                                            checked={this.state.sameAsContactInformation}
                                            onChange={this.sameAsContactHandler} />&nbsp;&nbsp;Same as Client Address
                                             {/*<label className="custom-control-label" HTMLfor="defaultUnchecked">Same as Client Address</label>*/}
                                      </div>
                                      <h4><strong>Mailing Address</strong></h4>
                                  </div>
                                  <br/>
                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                            <InputLabel class="custom_class" htmlFor="country">Country* </InputLabel>
                                              <Select id="country"
                                              value={this.state.country1}                                               
                                              name="country1"
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

                                  {/*<div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Spouse Name" required={ this.state.type =='Family' ?'required':''} name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} />
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <input type="date" name="spouseDateOfBirth"
                                                      value={this.state.spouseDateOfBirth}    
                                                      onChange={this.handleChange}
                                                      required={ this.state.type =='Family' ?'required':''}
                                                 />
                                              <label htmlFor="spouseDateOfBirth">Spouse Date Of Birth</label>
                                          </div>
                                      </div>
                                  </div>*/}
                                  <div className="form-row px-2">
                                          <div className="bs-example">
                                              <div className="accordion" id="accordionExample">
                                              <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h2 class="mb-0">
                                                        <button type="button" class="btn btn-link waves-effect waves-light collapsed" onClick = {this.handleDepentent1}>Spouse Information <i className={this.state.isFamily?"fa fa-minus":"fa fa-plus"}></i></button>
                                                       </h2>  
                                                    </div>
                                                    {/*<div id="collapseOne" class="collapse" aria-labelledby="headingOne">*/}
                                                    {this.state.isFamily? <div class="card-body">
                                                            <div className="form-row px-2">
                                                                <div className="col">
                                                                    <div className="md-form">
                                                                        <MDBInput autoComplete="off"  label="Spouse Name" required={ this.state.type =='isFamily' ?'required':''} name="spousename" value={this.state.spousename} onChange={e => this.handleChange(e)} />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="md-form">
                                                                        <input type="date" name="familyDateOfBirth"
                                                                                value={this.state.familyDateOfBirth}    
                                                                                onChange={this.handleChange}
                                                                                required={ this.state.type =='isFamily' ?'required':''}
                                                                            />
                                                                        <label htmlFor="DateOfBirth">Spouse Date Of Birth</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>:''}
                                                        {/*this.state.isFamily ? this.dependentField1():''*/}   
                                                    </div>
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
                                          <InputLabel class="custom_class" htmlFor="age-simple">Membership Type*</InputLabel>
                                              <Select
                                                  id="plantype"
                                                  value={this.state.type}
                                                  onChange={this.handleChange}
                                                  name='type'  
                                                  required                                             
                                                  >
                                                  <MenuItem value="Individual" selected>
                                                      <em>Individual</em>
                                                  </MenuItem>
                                                  <MenuItem value="Family">Family</MenuItem>
                                                  <MenuItem value="Corporate">Corporate</MenuItem>
                                                  <MenuItem value="Government">Government</MenuItem>
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
                                              <InputLabel class="custom_class" htmlFor="age-simple">Membership Plan* </InputLabel>
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
                                              <MDBInput autoComplete="off"  name="fees" readOnly value={this.state.fees}   label="Membership Fees"/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                  <div className="col">
                                          <div className="md-form">  
                                              <MDBInput autoComplete="off" readOnly value={this.state.frequency}   label="Frequency" name="frequency"/>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">  
                                              <MDBInput autoComplete="off" readOnly value={this.state.initiationFee}   label="InitiationFee" name="initiationFee"/>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-row px-2">
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput autoComplete="off"  label="Company, Government or Group Name" name="companyname" value={this.state.companyname} onChange={e => this.handleChange(e)}/>             
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="md-form">
                                              <MDBInput  autoComplete="off" label="Group Code*" name='planid'onChange={this.handleChange} value={this.state.planid} required/>
                                          </div>
                                      </div>
                                  </div>


                                  <div className="form-row px-2">
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
                                      <div className="col">
                                          <div className="md-form">
                                              {/*<MDBInput autoComplete="off"  label="Writing Agent*" name="writingagent" value ={this.state.writingagent} onChange={this.handleChange} required/>*/}
                                              <InputLabel htmlFor="select-manager">Select Manager</InputLabel>
                                              <Select
                                                    label='Select Manager'
                                                    name="selectedManagerId"
                                                    value={this.state.selectedManagerId}
                                                   
                                                    onChange={this.handleChange}
                                                    >
                                                       {this.state.agentManager? this.state.agentManager.map((row2) => <MenuItem key={row2.agentId} value={row2.agentId}>{row2.firstName+" "+row2.lastName}</MenuItem>) :''}
                                                                                               
                                                    </Select>
                                                    {console.log(this.state.agentManager)}
                                                   
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