import React, { Component } from 'react';
import { MDBInput } from "mdbreact";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from "react-datepicker";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { MDBDataTable } from 'mdbreact';
import FormControl from '@material-ui/core/FormControl';
import * as myConst from './helper/Constant';

class plans extends Component {
    constructor(props) {
        super(props);
        
      }
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="container">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="form_bg">
                            <div className="header_part">
                                <h2>Plan Master</h2>
                            </div>
                            <div className="form_body">
                                <div className="px-lg-2 pt-0">
                                    <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Plan Name*" name="planname" required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    &nbsp;
                                                </div>
                                            </div>
                                    </div>
                                        
                                        <div className="head">
                                            <div className="card bg-light text-dark">
                                                <div className="card-body">List of Services</div>
                                            </div>
                                        </div>

                                        <div className="servicelist px-2">
                                          <div className="form-row">
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                              <div className="custom-control custom-checkbox">
                                                <input type="checkbox" name="" class="custom-control-input" id="defaultUnchecked" value=""/>
                                                <label className="custom-control-label pl-3" htmlFor="defaultUnchecked">Select All</label>
                                              </div>
                                            </div>
                                          </div>
                                          <hr/>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked1"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Medical Evacuationand Emergency Air Transportation</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked2"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Helicopter Transportation</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked3"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Ground Ambulance Transportation</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked4"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Medical Repatriation</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked5"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Return Transportation</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked6"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Visitor Transportion</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked7"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Escort Transportation</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked8"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Minor Children / Grandchildren Return</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked9"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Vehicle Return</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked10"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Mortal Remains Transport</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked11"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Organ Retrieval</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked12"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Organ Recipient Transportation</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked13"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Travel Expense</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked14"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Transportation to Rehabilitation Centers and Hospice settings</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked15"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Worldwide Coverage</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked16"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Pet Return</span>
                                            </div>
                                          </div>
                                          <div className="form-row">
                                            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 pb-2">
                                              <div className="custom-control custom-checkbox pr-2">
                                                <input type="checkbox" className="custom-control-input" id="defaultUnchecked17"/>
                                                <label className="custom-control-label" htmlFor="defaultUnchecked">&nbsp;</label>
                                              </div>
                                              <span>Global Medevac Concierge Service</span>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-row px-2">
                                            <div className="col">
                                                <div className="md-form">
                                                    <MDBInput label="Plan Fees*" name="planfees" required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="md-form">
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="buttons text-center">
                                    <button className="btn btn-rounded my-4 waves-effect" type="submit">Cancel</button>
                                    <button className="btn btn-rounded my-4 waves-effect" type="submit">Submit</button>
                                </div>  
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default plans;