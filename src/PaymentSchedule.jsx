import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import { MDBDataTable } from 'mdbreact';
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import * as myConst from './helper/Constant';
 import Switch from 'react-toggle-switch';
const URL = myConst.HTTP_URL

class PaymentSchedule extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
          columns: [
            {
              label: 'Serial No.',
              field: 'slNo',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Client Name',
              field: 'clientName',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Client Type',
              field: 'clienType',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Membership Plan',
              field: 'memPlan',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Fees',
              field: 'fees',
              sort: 'asc',
              width: 300
            },
            {
                label: 'Group Code',
                field: 'groupCode',
                sort: 'asc',
                width: 300
            },
            {
                label: 'New Comm',
                field: 'newComm',
                sort: 'asc',
                width: 300
            },
            {
                label: 'ChargeBack Comm',
                field: 'chargeback',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Override Comm',
                field: 'override',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Renewal Comm',
                field: 'renewal',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Total Comm',
                field: 'total',
                sort: 'asc',
                width: 300
            },
            {
                label: '1% Interest on Advance',
                field: 'interest',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Earned Comm',
                field: 'earnedComm',
                sort: 'asc',
                width: 300
            }
          ],
          rows: [
            {
              slNo:'001',
              clientName: 'Ranjit Pradhan',
              clienType: 'Family',
              memPlan:'Monthly',
              fees:'37.5',
              groupCode:'USBAR001',
              newComm:'',
              chargeback:'15',
              override:'7.5',
              renewal:'',
              total:'22.5',
              interest:'0.075',
              earnedComm:'22.425'
            },
            {
                slNo:'002',
                clientName: 'Steven Finn',
                clienType: 'Corporate',
                memPlan:'Monthly',
                fees:'24.75',
                groupCode:'USBAR005',
                newComm:'',
                chargeback:'9.9',
                override:'4.95',
                renewal:'',
                total:'14.85',
                interest:'0.15',
                earnedComm:'14.70'
              },
              {
                slNo:'003',
                clientName: 'Shane Bond',
                clienType: 'Government',
                memPlan:'Annual',
                fees:'474',
                groupCode:'USBAR006',
                newComm:'189.6',
                chargeback:'',
                override:'94.8',
                renewal:'',
                total:'94.8',
                interest:'0.95',
                earnedComm:'93.85'
              },
              {
                slNo:'004',
                clientName: 'Chris Reid',
                clienType: 'Family',
                memPlan:'Monthly',
                fees:'24.75',
                groupCode:'USBAR009',
                newComm:'',
                chargeback:'9.9',
                override:'4.95',
                renewal:'',
                total:'14.85',
                interest:'0.15',
                earnedComm:'14.70'
              },
              {
                slNo:'005',
                clientName: 'Ronty Martin',
                clienType: 'Individual',
                memPlan:'Annual',
                fees:'297',
                groupCode:'USBAR007',
                newComm:'118.80',
                chargeback:'',
                override:'59.40',
                renewal:'',
                total:'59.40',
                interest:'0.594',
                earnedComm:'58.806'
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
                      <h4 className="card-title pull-left ">Due Commission Status</h4>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h3>Global Medevac</h3>
                            <h5>Address: Texus</h5>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-left">
                                <div className="row">
                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Name:</label>
                                    <span className="col-xs-6 col-sm-9 col-md-9 col-lg-9">Simon Tyler</span>

                                    <div class="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Agent Level:</label>
                                    <span className="col-xs-6 col-sm-9 col-md-9 col-lg-9">1</span>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-right text-right">
                                <label htmlFor="period" className="col-xs-6 col-sm-3 col-md-3 col-lg-3">Period:</label>
                                <span className="col-xs-6 col-sm-9 col-md-9 col-lg-9">&nbsp;</span>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="table-responsive">
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
            </div>
        );
    }
}

export default PaymentSchedule;