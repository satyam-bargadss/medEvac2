import React,{Component} from 'react';

import $ from 'jquery';
import button from '@material-ui/core/Button';

class CustomerRegistrationForm extends Component {



    componentDidMount()
    {
    console.log('hellow');
    $('button').on('click',function(){
        alert('hi');
    })
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
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    $('.wizard li').click(function() {
        $(this).prevAll().addClass("completed");
         $(this).nextAll().removeClass("completed");
         $(this).addClass('active');
       });
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
    }
    render() {
        return (
            <div className="container">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 offset-sm-3 offset-md-3 offset-lg-4">
                <div className="logo">
                    <img src="images/logo3.png" alt="Global Medevac" className="img-fluid"/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 offset-md-1 offset-lg-1">
            <div className="form_bg">
                <div className="header_part">
                    <h2>Customer Registration Form</h2>		
                </div>
                <div className="form_body">
                        <div className="px-lg-2 pt-0">
                            
                            
                            <div className="tabbable">
                              <ul className="nav nav-tabs wizard">
                                <li className="active"><a href="#personal" data-toggle="tab" aria-expanded="false">Personal Information</a></li>
                                <li><a href="#contact" data-toggle="tab" aria-expanded="false">Contact Information</a></li>
                                <li><a href="#plans" data-toggle="tab" aria-expanded="false">Choose Plan</a></li>
                                <li><a href="#checkout" data-toggle="tab" aria-expanded="false">Checkout</a></li>
                                <li><a href="#confirm" data-toggle="tab" aria-expanded="true">Confirmation</a></li>
                              </ul>
                            </div>
    
                           
                            <div className="tab-content">
                              <div className="tab-pane container active" id="personal">
                                <form className="text-center" style={{color: '#757575'}}>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormFirstName1" className="form-control" required/>
                                                <label htmlFor="customerRegisterFormFirstName">First Name<span>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormLastName1" className="form-control" required/>
                                                <label htmlFor="customerRegisterFormLastName">Last Name<span>*</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="date" id="customerRegisterFormDob" className="form-control" required/>
                                                <label htmlFor="customerRegisterFormDob">Date of Birth<span>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            &nbsp;
                                        </div>
                                    </div>
                                    
                                    <div className="bs-example">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h2 className="mb-0">
                                                        <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">Spouse Information <i className="fa fa-plus"></i></button>									
                                                    </h2>
                                                </div>
                                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <div className="md-form">
                                                                    <input type="text" id="customerRegisterFormSpouseFirstName" className="form-control"/>
                                                                    <label htmlFor="customerRegisterFormSpouseFirstName">Spouse First Name</label>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="md-form">
                                                                    <input type="text" id="customerRegisterFormSpouseLastName" className="form-control"/>
                                                                    <label htmlFor="customerRegisterFormSpouseLastName">Spouse Last Name</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <div className="md-form">
                                                                    <input type="date" id="customerRegisterFormDob1" className="form-control"/>
                                                                    <label htmlFor="customerRegisterFormDob1">Date of Birth</label>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                &nbsp;
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h2 className="mb-0">
                                                        <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo">Dependant Information <i className="fa fa-plus"></i></button>
                                                    </h2>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div id="education_fields">
                              
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <div className="md-form">
                                                                    <input type="text" id="customerRegisterFormDependantFirstName" className="form-control"/>
                                                                    <label htmlFor="customerRegisterFormDependantFirstName">Dependant First Name</label>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="md-form">
                                                                    <input type="text" id="customerRegisterFormDependantLastName" className="form-control"/>
                                                                    <label htmlFor="customerRegisterFormDependantLastName">Dependant Last Name</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <div className="md-form">
                                                                    <input type="date" id="customerRegisterFormDob2" className="form-control"/>
                                                                    <label htmlFor="customerRegisterFormDob2">Date of Birth</label>
                                                                </div>
                                                            </div>
                                                            <div className="col text-center">
                                                                <button className="btn btn-info my-2" type="button"  onClick={this.education_field}> <i className="fa fa-plus" aria-hidden="true"></i> </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button variant="contained" className="btn btn-rounded my-4 waves-effect" type="submit">Next</button>
                                </form>
                              </div>
                              
                              <div className="tab-pane container fade" id="contact">
                                <form className="text-center" style={{color: '#757575'}}>
                                    <div className="md-form">
                                        <input type="text" id="customerRegisterFormAddress1" className="form-control" required/>
                                        <label htmlFor="customerRegisterFormAddress1">Address 1<span>*</span></label>
                                        <span ng-show="frm1.n4.$error.required"></span>
                                    </div>
                                    <div className="md-form">
                                        <input type="text" id="customerRegisterFormAddress2" className="form-control" required/>
                                        <label htmlFor="customerRegisterFormAddress2">Address 2<span>*</span></label>
                                        <span ng-show="frm1.n5.$error.required"></span>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormCity" className="form-control" required/>
                                                <label htmlFor="customerRegisterFormCity">City<span>*</span></label>
                                                <span ng-show="frm1.n6.$error.required"></span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormCountry" className="form-control"/>
                                                <label htmlFor="customerRegisterFormCity">Country</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormFirstName2" className="form-control"/>
                                                <label htmlFor="customerRegisterFormLocation">Location</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormLastName2" className="form-control" required/>
                                                <label htmlFor="customerRegisterFormZipCode">Zip Code<span>*</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormFirstName3" className="form-control" required/>
                                                <label htmlFor="customerRegisterFormCellPhone">Cell Phone<span>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormLastName3" className="form-control"/>
                                                <label htmlFor="customerRegisterFormHomePhone">Home Phone</label>
                                            </div>
                                        </div>
                                    </div>
                                                            
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="text" id="customerRegisterFormUserName" className="form-control" required/>
                                                <label htmlFor="customerRegisterFormUserName">User Name<span>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="md-form">
                                                <input type="password" id="customerRegisterFormPassword" className="form-control" required/>
                                                <label htmlFor="customerRegisterFormPassword">Password<span>*</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-rounded my-4 waves-effect" type="submit">Next</button>								
                                </form>
                              </div>
                              
                              
                              <div className="tab-pane container fade" id="plans">
                                <form className="text-center" style={{color:'#757575'}}>
                                    <div className="form-row">
                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <div className="plan light">
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
                                                <button className="btn btn-rounded waves-effect" type="submit">Buy Plan</button>	
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <div className="plan medium">
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
                                                <button className="btn btn-rounded waves-effect" type="submit">Buy Plan</button>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                            <div className="plan dark">
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
                                              
                                                <button className="btn btn-rounded waves-effect" type="submit">Buy Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                              </div>
                              
                              <div className="tab-pane container fade" id="checkout">
                                <div className="form-row">
                                    <div className="mem_inf">
                                        <div className="head">
                                            <h3>Member Info</h3>
                                        </div>
                                        <p><strong>Name:</strong> John Doe</p>
                                        <p><strong>Address:</strong> 1720 Poplar Street, Charleston, West Virginia, Zip Code: 25362</p>
                                        <p><strong>Contact No:</strong> 720-131-5698</p>
                                    </div>
                                    
                                    <div className="bill_inf">
                                        <div className="head">
                                            <h3>Billing Address</h3>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="bill_add">
                                                    <div className="row">
                                                        <div className="col-xs-12 col-sm-6 col-md-7 col-lg-7 pr-0">
                                                            <p>My billing address is same as:</p>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                                                            <label id="img_category_label"className="field"htmlFor="img_category" data-value="">
                                                                <div id="img_category"className="psuedo_select"name="img_category">
                                                                    <span className="selected"></span>
                                                                    <ul id="img_category_options"className="options">
                                                                        <li className="option" data-value="Residence">Residence</li>
                                                                        <li className="option" data-value="mailing">Mailing</li>
                                                                        <li className="option" data-value="others">Others</li>
                                                                    </ul>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="bill_add">
                                                    <div className="row">
                                                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                                                            <p>Change your plan:</p>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pl-0">
                                                            <label id="img_category_label"className="field"htmlFor="img_category" data-value="">
                                                                <div id="img_category"className="psuedo_select"name="img_category">
                                                                    <span className="selected"></span>
                                                                    <ul id="img_category_options"className="options">
                                                                        <li className="option" data-value="Monthly">Monthly</li>
                                                                        <li className="option" data-value="Yearly">Yearly</li>
                                                                        <li className="option" data-value="5 Years Plan">5 Years Plan</li>
                                                                    </ul>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6 col-md-1 col-lg-1 pl-0">
                                                            <a href="#" className="edit"><i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="card_inf">
                                        <div className="head">
                                            <h3>Credit Card Information</h3>
                                        </div>
                                        <form className="text-center" style={{color:'#757575'}}>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="md-form">
                                                        <input type="number" id="customerRegisterFormCardNumber" className="form-control"/>
                                                        <label htmlFor="customerRegisterFormCardNumber">Card Number</label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="md-form">
                                                        <input type="text" id="customerRegisterFormCardName" className="form-control"/>
                                                        <label htmlFor="customerRegisterFormCardName">Full Name on Card</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                                    <div className="md-form">
                                                        <label id="img_category_label"className="field"htmlFor="img_category"data-value="">
                                                            <span>Expiry Month</span>
                                                            <div id="img_category"className="psuedo_select"name="img_category">
                                                                <span className="selected"></span>
                                                                <ul id="img_category_options"className="options">
                                                                    <li className="option" data-value="01">01</li>
                                                                    <li className="option" data-value="02">02</li>
                                                                    <li className="option" data-value="03">03</li>
                                                                    <li className="option" data-value="04">04</li>
                                                                    <li className="option" data-value="05">05</li>
                                                                    <li className="option" data-value="06">06</li>
                                                                    <li className="option" data-value="07">07</li>
                                                                    <li className="option" data-value="08">08</li>
                                                                    <li className="option" data-value="09">09</li>
                                                                    <li className="option" data-value="10">10</li>
                                                                    <li className="option" data-value="11">11</li>
                                                                    <li className="option" data-value="12">12</li>
                                                                </ul>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                                    <div className="md-form">
                                                        <label id="img_category_label"className="field"htmlFor="img_category"data-value="">
                                                            <span>Expiry Year</span>
                                                            <div id="img_category"className="psuedo_select"name="img_category">
                                                                <span className="selected"></span>
                                                                <ul id="img_category_options"className="options">
                                                                    <li className="option" data-value="2019">2019</li>
                                                                    <li className="option" data-value="2020">2020</li>
                                                                    <li className="option" data-value="2021">2021</li>
                                                                    <li className="option" data-value="2022">2022</li>
                                                                    <li className="option" data-value="2023">2023</li>
                                                                    <li className="option" data-value="2024">2024</li>
                                                                    <li className="option" data-value="2025">2025</li>
                                                                    <li className="option" data-value="2026">2026</li>
                                                                    <li className="option" data-value="2027">2027</li>
                                                                    <li className="option" data-value="2028">2028</li>
                                                                    <li className="option" data-value="2029">2029</li>
                                                                    <li className="option" data-value="2030">2030</li>
                                                                </ul>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                                                    <div className="md-form">
                                                        <input type="number" id="customerRegisterFormCvvNumber" className="form-control"/>
                                                        <label htmlFor="customerRegisterFormCvvNumber">CVV</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-rounded my-4 waves-effect" type="submit">Back</button>
                                            <button className="btn btn-rounded my-4 waves-effect" type="submit">Next</button>
                                        </form>
                                    </div>
                                </div>
                              </div>
                              
                              <div className="tab-pane container fade" id="confirm">
                                <div className="form-row">
                                    <div className="payment_inf">
                                        <div className="head">
                                            <h3>Payment Info</h3>
                                        </div>
                                        <p><strong>Name on card:</strong> John Doe</p>
                                        <p><strong>Card Number:</strong> xxxx xxxx xxxx 1253</p>
                                        <p><strong>Card Expiration:</strong> 04/2022</p>
                                    </div>
                                    
                                    <div className="subscription_inf">
                                        <div className="head">
                                            <h3>Subscription Info</h3>
                                        </div>
                                        <p>You have subscribed htmlFor <strong>Monthly Plan</strong></p>
                                    </div>
                                    
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="thank_you my-4">
                                            <h3>Thank You!</h3>
                                            <p>You're now a member of our list of awesome people.</p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                            </div>
                    </div>
                </div>
                </div>
                <script type="text/javascript" src="js/jquery-3.4.0.min.js"></script>
 
            <script type="text/javascript" src="js/popper.min.js"></script>
          
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
          
            <script type="text/javascript" src="js/mdb.min.js"></script>
            <script src="js/custom-select.js"></script>
            <script src="js/index.js"></script>
            </div>
        )
    }
}

export default CustomerRegistrationForm;