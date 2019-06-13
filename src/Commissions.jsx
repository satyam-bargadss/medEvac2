import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import { MDBDataTable } from 'mdbreact';
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import * as myConst from './helper/Constant';
 import Switch from 'react-toggle-switch'
 const URL = myConst.HTTP_URL;

class Commissions extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
            columns: [
              {
                label: 'SL. No.',
                field: 'serial',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Level',
                field: 'level',
                sort: 'asc',
                width: 150
              },
              {
                label: 'FYC',
                field: 'fyc',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Renewal',
                field: 'renewal',
                sort: 'asc',
                width: 100
              },
              {
                label: '5 Years & CLM',
                field: 'clm',
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
                serial:'0001',
                level: 'Level 1',
                fyc: '40',
                renewal:'5',
                clm:'20',
                actions: ''
              },
              {
                serial:'0002',
                level: 'Level 5',
                fyc: '60',
                renewal:'9',
                clm:'26',
                actions: ''
              },
              {
                serial:'0003',
                level: 'Level 7',
                fyc: '75',
                renewal:'12',
                clm:'28',
                actions: ''
              },
              {
                serial:'0004',
                level: 'Level 5',
                fyc: '60',
                renewal:'9',
                clm:'26',
                actions: ''
              },
              {
                serial:'0005',
                level: 'Level 12',
                fyc: '100',
                renewal:'20',
                clm:'35',
                actions: ''
              },
              {
                serial:'0006',
                level: 'Level 11',
                fyc: '95',
                renewal:'18',
                clm:'33',
                actions: ''
              },
              {
                serial:'0007',
                level: 'Level 2',
                fyc: '45',
                renewal:'6',
                clm:'23',
                actions: ''
              },
              {
                serial:'0008',
                level: 'Level 3',
                fyc: '50',
                renewal:'7',
                clm:'24',
                actions: ''
              },
              {
                serial:'0009',
                level: 'Level 6',
                fyc: '70',
                renewal:'10',
                clm:'27',
                actions: ''
              },
              {
                serial:'0010',
                level: 'Level 11',
                fyc: '95',
                renewal:'18',
                clm:'33',
                actions: ''
              },
              {
                serial:'0011',
                level: 'Level 8',
                fyc: '80',
                renewal:'15',
                clm:'32',
                actions: ''
              },
              {
                serial:'0012',
                level: 'Level 4',
                fyc: '55',
                renewal:'8',
                clm:'25',
                actions: ''
              },
              {
                serial:'0013',
                level: 'Level 7',
                fyc: '75',
                renewal:'12',
                clm:'28',
                actions: ''
              },
              {
                serial:'0014',
                level: 'Level 10',
                fyc: '90',
                renewal:'17',
                clm:'32',
                actions: ''
              },
              {
                serial:'0015',
                level: 'Level 7',
                fyc: '75',
                renewal:'12',
                clm:'28',
                actions: ''
              },
              {
                serial:'0016',
                level: 'Level 9',
                fyc: '85',
                renewal:'16',
                clm:'31',
                actions: ''
              },
              {
                serial:'0017',
                level: 'Level 6',
                fyc: '70',
                renewal:'10',
                clm:'27',
                actions: ''
              },
              {
                serial:'0018',
                level: 'Level 12',
                fyc: '100',
                renewal:'20',
                clm:'35',
                actions: ''
              },
              {
                serial:'0019',
                level: 'Level 9',
                fyc: '85',
                renewal:'16',
                clm:'31',
                actions: ''
              },
              {
                serial:'0020',
                level: 'Level 10',
                fyc: '90',
                renewal:'17',
                clm:'32',
                actions: ''
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
                            <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/create-commission"  activeClassName=" active">
                                <span>Add Commission</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                              <h4 className="card-title pull-left ">Commissions Summary</h4>
                            </div>
                            <div className="card-body">
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                    <h3 className="bold">11</h3>
                                    <span className="text-dark">No. of Levels</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                    <h3 className="bold">11</h3>
                                    <span className="text-success">Active Levels</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left">
                                    <h3 className="bold">0</h3>
                                    <span className="text-danger">Inactive Levels</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <br/><br/>
            <div className="container-fluid">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h4 className="card-title pull-left ">Commission Management</h4>
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

export default Commissions;