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
        console.log(props);
        this.state = {
          switched: false,
          data:  {
            columns: [
              {
                label: 'Service Name',
                field: 'services',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Selected Services',
                field: 'selected',
                sort: 'asc',
                width: 150
              }
            ],
            rows: [
              {
                services:'Medical Evacuationand Emergency Air Transportation',
                selected: ''
              },
              {
                services:'Helicopter Transportation',
                selected: ''
              },
              {
                services:'Ground Ambulance Transportation',
                selected: ''
              },
              {
                services:'Medical Repatriation',
                selected: ''
              },
              {
                services:'Return Transportation',
                selected: ''
              },
              {
                services:'Visitor Transportion',
                selected: ''
              },
              {
                services:'Escort Transportation',
                selected: ''
              },
              {
                services:'Minor Children / Grandchildren Return',
                selected: ''
              },
              {
                services:'Vehicle Return',
                selected: ''
              },
              {
                services:'Mortal Remains Transport',
                selected: ''
              },
              {
                services:'Organ Retrieval',
                selected: ''
              },
              {
                services:'Organ Recipient Transportation',
                selected: ''
              },
              {
                services:'Travel Expense',
                selected: ''
              },
              {
                services:'Transportation to Rehabilitation Centers and Hospice settings',
                selected: ''
              },
              {
                services:'Worldwide Coverage',
                selected: ''
              },
              {
                services:'Pet Return',
                selected: ''
              },
              {
                services:'Global Medevac Concierge Service',
                selected: ''
              }
            ]}
        };
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
                                    <br/>
                                        <div class="card">
                                            <div class="card-body">
                                                <MDBDataTable
                                                striped
                                                hover
                                                data={this.state.data}
                                                />
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