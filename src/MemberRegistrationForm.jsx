import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { MDBInput } from "mdbreact";
import {  Form} from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class MemberRegistrationForm extends Component {
    constructor(props) {
        super(props);
        console.log(props) ;
        this.state = {
         key: 'home',
       };
       this.state = {
         startDate: new Date(),
         isSpouse:false
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleChange2 = this.handleChange2.bind(this);
    }
     handleChange2(event) {
        this.setState(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
      }
    handleSpouse = ()=>{
        this.setState((state) => ({
            isSpouse: !this.state.isSpouse 
          }));
         console.log(this.state.isSpouse); 
     }
     
    spouseField = ()=>{
        return(
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <div class="form-row">
                    <div class="col">
                        <div class="md-form">
                            <input type="text" id="customerRegisterFormSpouseFirstName"class="form-control"/>
                            <label for="customerRegisterFormSpouseFirstName">Spouse First Name</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="md-form">
                            <input type="text" id="customerRegisterFormSpouseLastName" class="form-control"/>
                            <label for="customerRegisterFormSpouseLastName">Spouse Last Name</label>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <div class="md-form">
                            <input type="date" id="customerRegisterFormDob1" class="form-control"/>
                            <label for="customerRegisterFormDob1">Date of Birth</label>
                        </div>
                    </div>
                    <div class="col">
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
        );
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }
      componentDidMount()
      {
    
      var room = 1;
      const education_fields = () => {
          room++;
          var objTo = document.getElementById('education_fields')
          var divtest = document.createElement("div");
          divtest.setAttribute("class", "col removeclass"+room);
          var rdiv = 'removeclass'+room;
          divtest.innerHTML = '<div class="form-row"><div class="col"> <div class="md-form"><input type="text" id="customerRegisterFormDependantFirstName" class="form-control"><label for="customerRegisterFormDependantFirstName">Dependant First Name</label></div></div><div class="col"><div class="md-form"> <input type="text" id="customerRegisterFormDependantLastName" class="form-control"><label for="customerRegisterFormDependantLastName">Dependant Last Name</label></div></div></div><div class="form-row"><div class="col"><div class="md-form"> <input type="date" id="customerRegisterFormDob2" class="form-control"><label for="customerRegisterFormDob2">Date of Birth</label></div></div><div class="col text-center"><div class="md-form"><div class="input-group-btn"> <button class="btn btn-danger my-2" type="button" onclick="remove_education_fields('+ room +');"> <i class="fa fa-minus" aria-hidden="true"></i> </button></div></div></div><div class="clear"></div>';
          
          objTo.appendChild(divtest)
      }
    
      }
    render() {
        return (
            <div style={{width: '100%'}}>
                
            <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           <div className="form_bg">
               <div className="header_part">
                   <h2>Customer Registration Form</h2>
               </div>
               <div className="form_body">
               <div class="px-lg-2 pt-0">
            <Tabs
id="controlled-tab-example"
activeKey={this.state.key}
onSelect={key => this.setState({ key })}
>
<Tab eventKey="home" title="Basic Information">
<form class="text-center" style={{color: '#757575'}}>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <Select
                                                value='US'
                                                onChange={this.handleChange2}                                               
                                                >
                                                    <MenuItem value="us">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>South America</MenuItem>
                                                    <MenuItem value={30}>South America</MenuItem>
                                                    <MenuItem value={20}>Caribbean Island</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <MDBInput label="City*" required/>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <MDBInput label="State*" required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <MDBInput label="Zip Code*" required/>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/*<div class="bs-example">
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-header" id="headingOne">
                                                    <h2 class="mb-0">
                                                        <button type="button" onClick = {this.handleSpouse}class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">Spouse Information <i class="fa fa-plus"></i></button>									
                                                    </h2>
                                                </div>
                                                {this.isSpouse==true?this.spouseField:''}
                                            </div>
                                          
                                            <div class="card">
                                                <div class="card-header" id="headingTwo">
                                                    <h2 class="mb-0">
                                                        <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo">Dependant Information <i class="fa fa-plus"></i></button>
                                                    </h2>
                                                </div>
                                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <div id="education_fields">
                            
                                                        </div>
                                                        <div class="form-row">
                                                            <div class="col">
                                                                <div class="md-form">
                                                                    <input type="text" id="customerRegisterFormDependantFirstName" class="form-control"/>
                                                                    <label for="customerRegisterFormDependantFirstName">Dependant First Name</label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="md-form">
                                                                    <input type="text" id="customerRegisterFormDependantLastName" class="form-control"/>
                                                                    <label for="customerRegisterFormDependantLastName">Dependant Last Name</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-row">
                                                            <div class="col">
                                                                <div class="md-form">
                                                                    <input type="date" id="customerRegisterFormDob2" class="form-control"/>
                                                                    <label for="customerRegisterFormDob2">Date of Birth</label>
                                                                </div>
                                                            </div>
                                                            <div class="col text-center">
                                                                <button class="btn btn-info my-2" type="button"  onclick="education_fields();"> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>*/}
                                    <button class="btn btn-rounded my-4 waves-effect" type="submit">Next</button>
                                </form>
</Tab>
<Tab eventKey="profile" title="Personal Information">
<form class="text-center" style={{color: '#757575'}}>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <Select
                                                    value='US'
                                                    onChange={this.handleChange2}                                               
                                                    >
                                                    <MenuItem value="us">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Individual</MenuItem>
                                                    <MenuItem value={20}>Corporate</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <MDBInput label="First Name*" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <MDBInput label="Last Name*" required/>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                    <DatePicker
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChange}
                                                   />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <MDBInput label="Company Name*" required/>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <MDBInput label="Mobile No.*" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-rounded my-4 waves-effect" type="submit">Next</button>								
                                </form>
</Tab>
<Tab eventKey="third" title="Family Information">
     <form class="text-center" style={{color: '#757575'}}>
                                    <div class="form-row">
                                        <div class="bs-example">
                                            <div class="accordion" id="accordionExample">
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h2 class="mb-0">
                                                            <button type="button" onClick = {this.handleSpouse}class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">Spouse Information <i class="fa fa-plus"></i></button>									
                                                        </h2>
                                                    </div>
                                                    {this.isSpouse==true?this.spouseField:''}
                                                </div>
                                            
                                                <div class="card">
                                                    <div class="card-header" id="headingTwo">
                                                        <h2 class="mb-0">
                                                            <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo">Dependant Information <i class="fa fa-plus"></i></button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <div id="education_fields">
                                
                                                            </div>
                                                            <div class="form-row">
                                                                <div class="col">
                                                                    <div class="md-form">
                                                                        <input type="text" id="customerRegisterFormDependantFirstName" class="form-control"/>
                                                                        <label for="customerRegisterFormDependantFirstName">Dependant First Name</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="md-form">
                                                                        <input type="text" id="customerRegisterFormDependantLastName" class="form-control"/>
                                                                        <label for="customerRegisterFormDependantLastName">Dependant Last Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-row">
                                                                <div class="col">
                                                                    <div class="md-form">
                                                                        <input type="date" id="customerRegisterFormDob2" class="form-control"/>
                                                                        <label for="customerRegisterFormDob2">Date of Birth</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col text-center">
                                                                    <button class="btn btn-info my-2" type="button"  onclick="education_fields();"> <i class="fa fa-plus" aria-hidden="true"></i> </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-rounded my-4 waves-effect" type="submit">Next</button>
                                </form>
</Tab>
<Tab eventKey="fourth" title="Membership">
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <Select
                                                    value='US'
                                                    onChange={this.handleChange2}                                               
                                                    >
                                                    <MenuItem value="us">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Individual</MenuItem>
                                                    <MenuItem value={20}>Corporate</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <Select
                                                    value='US'
                                                    onChange={this.handleChange2}                                               
                                                    >
                                                    <MenuItem value="us">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Annual Base Plan</MenuItem>
                                                    <MenuItem value={20}>Monthly Base Plan</MenuItem>
                                                    <MenuItem value={30}>Annual Premium Plan</MenuItem>
                                                    <MenuItem value={40}>Monthly Premium Plan</MenuItem>
                                                    <MenuItem value={50}>Annual International Plan</MenuItem>
                                                    <MenuItem value={60}>Monthly International Plan</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <Select
                                                    value='US'
                                                    onChange={this.handleChange2}                                               
                                                    >
                                                    <MenuItem value="us">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>$1,000</MenuItem>
                                                    <MenuItem value={20}>$83.33</MenuItem>
                                                    <MenuItem value={30}>$2,500</MenuItem>
                                                    <MenuItem value={40}>$208.33</MenuItem>
                                                    <MenuItem value={50}>$750.00</MenuItem>
                                                    <MenuItem value={60}>$62.50</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-rounded my-4 waves-effect" type="submit">Next</button>

     {/*<div class="form-row">
                                    <div class="mem_inf">
                                        <div class="head">
                                            <h3>Member Info</h3>
                                        </div>
                                        <p><strong>Name:</strong> John Doe</p>
                                        <p><strong>Address:</strong> 1720 Poplar Street, Charleston, West Virginia, Zip Code: 25362</p>
                                        <p><strong>Contact No:</strong> 720-131-5698</p>
                                    </div>
                                    
                                    <div class="bill_inf">
                                        <div class="head">
                                            <h3>Billing Address</h3>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                <div class="bill_add">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-6 col-md-7 col-lg-7 pr-0">
                                                            <p>My billing address is same as:</p>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                                                            <label id="img_category_label"class="field"for="img_category" data-value="">
                                                                <div id="img_category"class="psuedo_select"name="img_category">
                                                                    <span class="selected"></span>
                                                                    <ul id="img_category_options"class="options">
                                                                        <li class="option" data-value="Residence">Residence</li>
                                                                        <li class="option" data-value="mailing">Mailing</li>
                                                                        <li class="option" data-value="others">Others</li>
                                                                    </ul>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                <div class="bill_add">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                                                            <p>Change your plan:</p>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pl-0">
                                                            <label id="img_category_label"class="field"for="img_category" data-value="">
                                                                <div id="img_category"class="psuedo_select"name="img_category">
                                                                    <span class="selected"></span>
                                                                    <ul id="img_category_options"class="options">
                                                                        <li class="option" data-value="Monthly">Monthly</li>
                                                                        <li class="option" data-value="Yearly">Yearly</li>
                                                                        <li class="option" data-value="5 Years Plan">5 Years Plan</li>
                                                                    </ul>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-6 col-md-1 col-lg-1 pl-0">
                                                            <a href="#" class="edit"><i class="fa fa-pencil-square" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="card_inf">
                                        <div class="head">
                                            <h3>Credit Card Information</h3>
                                        </div>
                                        <form class="text-center" style={{color: '#757575'}}>
                                            <div class="form-row">
                                                <div class="col">
                                                    <div class="md-form">
                                                        <input type="number" id="customerRegisterFormCardNumber" class="form-control"/>
                                                        <label for="customerRegisterFormCardNumber">Card Number</label>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="md-form">
                                                        <input type="text" id="customerRegisterFormCardName" class="form-control"/>
                                                        <label for="customerRegisterFormCardName">Full Name on Card</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                                    <div class="md-form">
                                                        <label id="img_category_label"class="field"for="img_category"data-value="">
                                                            <span>Expiry Month</span>
                                                            <div id="img_category"class="psuedo_select"name="img_category">
                                                                <span class="selected"></span>
                                                                <ul id="img_category_options"class="options">
                                                                    <li class="option" data-value="01">01</li>
                                                                    <li class="option" data-value="02">02</li>
                                                                    <li class="option" data-value="03">03</li>
                                                                    <li class="option" data-value="04">04</li>
                                                                    <li class="option" data-value="05">05</li>
                                                                    <li class="option" data-value="06">06</li>
                                                                    <li class="option" data-value="07">07</li>
                                                                    <li class="option" data-value="08">08</li>
                                                                    <li class="option" data-value="09">09</li>
                                                                    <li class="option" data-value="10">10</li>
                                                                    <li class="option" data-value="11">11</li>
                                                                    <li class="option" data-value="12">12</li>
                                                                </ul>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                                    <div class="md-form">
                                                        <label id="img_category_label"class="field"for="img_category"data-value="">
                                                            <span>Expiry Year</span>
                                                            <div id="img_category"class="psuedo_select"name="img_category">
                                                                <span class="selected"></span>
                                                                <ul id="img_category_options"class="options">
                                                                    <li class="option" data-value="2019">2019</li>
                                                                    <li class="option" data-value="2020">2020</li>
                                                                    <li class="option" data-value="2021">2021</li>
                                                                    <li class="option" data-value="2022">2022</li>
                                                                    <li class="option" data-value="2023">2023</li>
                                                                    <li class="option" data-value="2024">2024</li>
                                                                    <li class="option" data-value="2025">2025</li>
                                                                    <li class="option" data-value="2026">2026</li>
                                                                    <li class="option" data-value="2027">2027</li>
                                                                    <li class="option" data-value="2028">2028</li>
                                                                    <li class="option" data-value="2029">2029</li>
                                                                    <li class="option" data-value="2030">2030</li>
                                                                </ul>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                                                    <div class="md-form">
                                                        <input type="number" id="customerRegisterFormCvvNumber" class="form-control"/>
                                                        <label for="customerRegisterFormCvvNumber">CVV</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn btn-rounded my-4 waves-effect" type="submit">Back</button>
                                            <button class="btn btn-rounded my-4 waves-effect" type="submit">Next</button>
                                        </form>
                                    </div>
                                </div>*/}
</Tab>
<Tab eventKey="fifth" title="Payment">
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
</Tab>
<Tab eventKey="sixth" title="Success">
    <div class="form-row">
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