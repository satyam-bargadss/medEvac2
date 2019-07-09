import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect,Link} from "react-router-dom";
 import { MDBDataTable } from 'mdbreact';
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import * as myConst from './helper/Constant';
 import Switch from 'react-toggle-switch';
 import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
const URL = myConst.HTTP_URL

class InstallmentSchedule extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
          columns: [
            {
              label: 'Installment No.',
              field: 'insNo',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Month',
              field: 'month',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Mode',
              field: 'mode',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Payment Type',
              field: 'paymentype',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Amount',
              field: 'amount',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Status',
              field: 'status',
              sort: 'asc',
              width: 300
            }
          ],
          rows: [
            {
              insNo:'001',
              month: 'January',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn rounded size="sm">Paid</MDBBtn>
            },
            {
              insNo:'002',
              month: 'February',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'003',
              month: 'March',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'004',
              month: 'April',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'005',
              month: 'May',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'006',
              month: 'June',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'007',
              month: 'July',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'008',
              month: 'August',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'009',
              month: 'September',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'010',
              month: 'October',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'011',
              month: 'November',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            },
            {
              insNo:'012',
              month: 'December',
              mode: 'monthly',
              paymentype:'Check',
              amount:'24.75',
              status:<MDBBtn color="red" rounded size="sm">Unpaid</MDBBtn>
            }
          ]}
        };
      }
    
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="buttons ml-3" style={{overflow:'hidden'}}>
                            {/*<NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/create-commission"  activeClassName=" active">
                                <span>Add Level</span>
                            </NavLink>*/}
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            <div className="container-fluid">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h4 className="card-title pull-left ">Membership Ledger</h4>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h3>Global Medevac</h3>
                            <h5>Address: Texus</h5>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 pull-left">
                                <div className="row">
                                    <label htmlFor="name" className="col-xs-6 col-sm-5 col-md-5 col-lg-5">Client Name:</label>
                                    <span className="col-xs-6 col-sm-7 col-md-7 col-lg-7">Ujjal Das</span>

                                    <div className="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-5 col-md-5 col-lg-5">Client Type:</label>
                                    <span className="col-xs-6 col-sm-7 col-md-7 col-lg-7">Individual</span>

                                    <div className="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-5 col-md-5 col-lg-5">Membership Plan:</label>
                                    <span className="col-xs-6 col-sm-7 col-md-7 col-lg-7">Monthly</span>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">  
                                <label htmlFor="period" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 period">Period</label>
                                <span className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <TextField
                                    id="date"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    />
                                </span>
                                <span className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <TextField
                                    id="date1"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    />
                                </span>
                                <span className="col-xs-4 col-sm-4 col-md-4 col-lg-4 installment">
                                    <button className="btn btn-rounded waves-effect" type="submit">Filter</button>
                                </span>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                         <MDBDataTable
                          striped
                          hover
                          data={this.state.data}
                        />
                    </div>
                  </div>
                </div>
            </div>
            </div>
        );
    }
}

export default InstallmentSchedule;
