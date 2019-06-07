import React, { Component } from 'react';

import $ from 'jquery';
import button from '@material-ui/core/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { MDBInput } from "mdbreact";
import {  Form} from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
class CustomerRegistrationForm extends Component {

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
    }
     handleSpouse = ()=>{
        this.setState((state) => ({
            isSpouse: !this.state.isSpouse 
          }));
         console.log(this.state.isSpouse); 
     }
     
   
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }

    componentDidMount()
    {
 
   
    }
    render() {
        return (
            <div>
                
            <div className="container">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 offset-sm-3 offset-md-3 offset-lg-4">
                <div className="logo">
                    <img src="images/logo.png" alt="Global Medevac" class="img-fluid"/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 offset-md-1 offset-lg-1">
           <div className="form_bg">
               <div className="header_part">
                   <h2>Member Registration Form</h2>
               </div>
               <div className="form_body">
            <Tabs
id="controlled-tab-example"
activeKey={this.state.key}
onSelect={key => this.setState({ key })}
>
<Tab eventKey="home" title="Personal Information">
<form class="text-center" style={{color: '#757575'}}>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                 
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <MDBInput label="Last Name*" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                            <DatePicker
                                                selected={this.state.startDate}
                                               onChange={this.handleChange}
                                            />

                                            </div>
                                        </div>
                                        <div class="col">
                                            &nbsp;
                                        </div>
                                    </div>
                                    
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
                                    <button class="btn btn-rounded my-4 waves-effect" type="submit">Next</button>
                                </form>
</Tab>
<Tab eventKey="profile" title="Profile">
<form class="text-center" style={{color: '#757575'}}>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                          
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="text" id="customerRegisterFormCity" class="form-control" required/>
                                                <label for="customerRegisterFormCity">City<span>*</span></label>
                                                <span ng-show="frm1.n6.$error.required"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="md-form">
                                        <input type="text" id="customerRegisterFormAddress1" class="form-control" required/>
                                        <label for="customerRegisterFormAddress1">Address 1<span>*</span></label>
                                        <span ng-show="frm1.n4.$error.required"></span>
                                    </div>
                                    <div class="md-form">
                                        <input type="text" id="customerRegisterFormAddress2" class="form-control" required/>
                                        <label for="customerRegisterFormAddress2">Address 2<span>*</span></label>
                                        <span ng-show="frm1.n5.$error.required"></span>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="text" id="customerRegisterFormCity" class="form-control" required/>
                                                <label for="customerRegisterFormCity">City<span>*</span></label>
                                                <span ng-show="frm1.n6.$error.required"></span>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="text" id="customerRegisterFormCountry" class="form-control"/>
                                                <label for="customerRegisterFormCity">Country</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="text" id="customerRegisterFormFirstName" class="form-control"/>
                                                <label for="customerRegisterFormLocation">Location</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="text" id="customerRegisterFormLastName" class="form-control"/>
                                                <label for="customerRegisterFormZipCode">Zip Code<span>*</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="text" id="customerRegisterFormFirstName" class="form-control" required/>
                                                <label for="customerRegisterFormCellPhone">Cell Phone<span>*</span></label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="text" id="customerRegisterFormLastName" class="form-control"/>
                                                <label for="customerRegisterFormHomePhone">Home Phone</label>
                                            </div>
                                        </div>
                                    </div>
                                                            
                                    <div class="form-row">
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="text" id="customerRegisterFormUserName" class="form-control" required/>
                                                <label for="customerRegisterFormUserName">User Name<span>*</span></label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="md-form">
                                                <input type="password" id="customerRegisterFormPassword" class="form-control" required/>
                                                <label for="customerRegisterFormPassword">Password<span>*</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-rounded my-4 waves-effect" type="submit">Next</button>								
                                </form>
</Tab>
<Tab eventKey="third" title="Third">
     <form class="text-center" style={{color: '#757575'}}>
                                    <div class="form-row">
                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <div class="plan light">
                                                <h2>Monthly Plan</h2>
                                                <ul>
                                                    <li>Emergency Air Transportation</li>
                                                    <li>Helicopter Transportation</li>
                                                    <li>Ground Ambulance Transportation</li>
                                                    <li>Repatriation / Recuperation</li>
                                                    <li>Return Transportation</li>
                                                    <li>Escort Transportation</li>
                                                    <li>Non-injury transportation</li>
                                                    <li>Minor Children / Grandchildren Return</li>
                                                    <li>Organ Retrieval</li>
                                                    <li>Organ Recipient Transportation</li>
                                                    <li>Vehicle Return</li>
                                                    <li>Mortal Remains Transport</li>
                                                    <li>Worldwide Coverage</li>
                                                    <li>Pet Return</li>
                                                </ul>
                                                <button class="btn btn-rounded waves-effect" type="submit">Buy Plan</button>	
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <div class="plan medium">
                                                <h2>Yearly Plan</h2>
                                                <ul>
                                                    <li>Emergency Air Transportation</li>
                                                    <li>Helicopter Transportation</li>
                                                    <li>Ground Ambulance Transportation</li>
                                                    <li>Repatriation / Recuperation</li>
                                                    <li>Return Transportation</li>
                                                    <li>Escort Transportation</li>
                                                    <li>Non-injury transportation</li>
                                                    <li>Minor Children / Grandchildren Return</li>
                                                    <li>Organ Retrieval</li>
                                                    <li>Organ Recipient Transportation</li>
                                                    <li>Vehicle Return</li>
                                                    <li>Mortal Remains Transport</li>
                                                    <li>Worldwide Coverage</li>
                                                    <li>Pet Return</li>
                                                </ul>
                                                <button class="btn btn-rounded waves-effect" type="submit">Buy Plan</button>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <div class="plan dark">
                                                <h2>5 Years Plan</h2>
                                                <ul>
                                                    <li>Emergency Air Transportation</li>
                                                    <li>Helicopter Transportation</li>
                                                    <li>Ground Ambulance Transportation</li>
                                                    <li>Repatriation / Recuperation</li>
                                                    <li>Return Transportation</li>
                                                    <li>Escort Transportation</li>
                                                    <li>Non-injury transportation</li>
                                                    <li>Minor Children / Grandchildren Return</li>
                                                    <li>Organ Retrieval</li>
                                                    <li>Organ Recipient Transportation</li>
                                                    <li>Vehicle Return</li>
                                                    <li>Mortal Remains Transport</li>
                                                    <li>Worldwide Coverage</li>
                                                    <li>Pet Return</li>
                                                </ul>
                                                <button class="btn btn-rounded waves-effect" type="submit">Buy Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
</Tab>
<Tab eventKey="fourth" title="Fourth">
     <div class="form-row">
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
                                </div>
</Tab>
<Tab eventKey="fifth" title="Fifth">
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
        )
    }
}

export default CustomerRegistrationForm;