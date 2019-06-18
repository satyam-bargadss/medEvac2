import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import { MDBDataTable } from 'mdbreact';
 import  './css/material-dashboard.css';
 import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
 import * as myConst from './helper/Constant';
 import Switch from 'react-toggle-switch'

class report extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
            columns: [
              {
                label: 'Member ID',
                field: 'memberid',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Member Name',
                field: 'membername',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Plan Name',
                field: 'planname',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Plan Fees',
                field: 'fees',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Agent Name',
                field: 'agentname',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Agent Commission',
                field: 'acommission',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Manager Commission',
                field: 'mcommission',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Actions',
                field: 'actions',
                sort: 'asc',
                width: 100
              }
            ],
            rows: [
              {
                memberid:'0001',
                membername: 'Tiger Nixon',
                planname: 'Annual Base Plan',
                fees:'$6,999',
                agentname:'John Doe',
                acommission:'$2,799.60',
                mcommission:'$279.96',
                actions:''
              },
              {
                memberid:'0002',
                membername: 'Garrett Winters',
                planname: 'Monthly Base Plan',
                fees:'$1,999',
                agentname:'John Doe',
                acommission:'$599.70',
                mcommission:'$29.98',
                actions:''
              },
              {
                memberid:'0003',
                membername: 'Ashton Cox',
                planname: 'Monthly Base Plan',
                fees:'$1,999',
                agentname:'Matthew Henry',
                acommission:'$799.60',
                mcommission:'$79.60',
                actions:''
              },
              {
                memberid:'0004',
                membername: 'Cedric Kelly',
                planname: 'Monthly International Plan',
                fees:'$3,499',
                agentname:'John Doe',
                acommission:'$1,399.60',
                mcommission:'$139.96',
                actions:''
              },
              {
                memberid:'0005',
                membername: 'Airi Satou',
                planname: 'Monthly Premium Plan',
                fees:'$2,999',
                agentname:'Gary Stevens',
                acommission:'$1,499.50',
                mcommission:'$224.92',
                actions:''
              },
              {
                memberid:'0006',
                membername: 'Brielle Williamson',
                planname: 'Monthly Premium Plan',
                fees:'$2,999',
                agentname:'Paul McCarthy',
                acommission:'$1,199.60',
                mcommission:'$119.96',
                actions:''
              },
              {
                memberid:'0007',
                membername: 'Herrod Chandler',
                planname: 'Monthly Base Plan',
                fees:'$1,999',
                agentname:'David Collins',
                acommission:'$799.60',
                mcommission:'$79.96',
                actions:''
              },
              {
                memberid:'0008',
                membername: 'Rhona Davidson',
                planname: 'Annual Premium Plan',
                fees:'$9,999',
                agentname:'Paul Willey',
                acommission:'$3,999.60',
                mcommission:'$399.96',
                actions:''
              },
              {
                memberid:'0009',
                membername: 'Colleen Hurst',
                planname: 'Monthly Premium Plan',
                fees:'$2,999',
                agentname:'Paul Willey',
                acommission:'$599.80',
                mcommission:'$29.99',
                actions:''
              },
              {
                memberid:'0010',
                membername: 'Sonya Frost',
                planname: 'Monthly Premium Plan',
                fees:'$2,999',
                agentname:'Robert Williamson',
                acommission:'$599.80',
                mcommission:'$29.99',
                actions:''
              },
              {
                memberid:'0011',
                membername: 'Jena Gaines',
                planname: 'Monthly Base Plan',
                fees:'$1,999',
                agentname:'James Sean',
                acommission:'$599.70',
                mcommission:'$59.97',
                actions:''
              }
            ]}
        };
    }
    render() {
        return (
            <div style={{width: '100%'}}>
                
            <div className="container-fluid">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h4 className="card-title pull-left ">Commission Report</h4>
                    </div>
                    <div className="card-body">
                       <table border="0" cellspacing="5" cellpadding="5">
                            <tr>
                                <td className="date">Date:</td>
                                <td><input type="date" name="start_date" id="start_date" className="form-control" /></td>
                                <td><input type="date" name="end_date" id="end_date" className="form-control" /></td>
                                <td className="select">
                                    <Select>
                                        <MenuItem value={'slno'}>SL. No.</MenuItem>
                                        <MenuItem value={'level'}>Level</MenuItem>
                                        <MenuItem value={'fyc'}>FYC</MenuItem>
                                        <MenuItem value={'renewal'}>Renewal</MenuItem>
                                        <MenuItem value={'clm'}>5 Years & CLM</MenuItem>
                                    </Select>
                                </td>
                                <td><button className="btn btn-rounded  waves-effect" type="submit">Filter</button></td>
                            </tr>
                       </table>
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

export default report;