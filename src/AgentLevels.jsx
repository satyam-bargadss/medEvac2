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

class AgentLevels extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
          columns: [
            {
              label: 'Level ID',
              field: 'levelId',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Level Name',
              field: 'levelName',
              sort: 'asc',
              width: 150
            },
            {
              label: '1 st year commission Rate',
              field: 'firstyrcomm',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Renewal Commission Rate',
              field: 'renewalcomm',
              sort: 'asc',
              width: 200
            },
            {
              label: '5 Year & Lifetime Membership Commission Rate',
              field: 'fiveyrlmc',
              sort: 'asc',
              width: 200
            }
          ],
          rows: [
            {
              levelId:'0001',
              levelname: '1',
              firstyrcomm: '40%',
              renewalcomm:'5%',
              fiveyrlmc:'20%'
            },
            {
               levelId:'0002',
               levelname: '2',
               firstyrcomm: '45%',
               renewalcomm:'6%',
               fiveyrlmc:'23%'
            },
            {
               levelId:'0003',
               levelname: '3',
               firstyrcomm: '50%',
               renewalcomm:'7%',
               fiveyrlmc:'24%'
            },
            {
              levelId:'0004',
              levelname: '4',
              firstyrcomm: '55%',
              renewalcomm:'8%',
              fiveyrlmc:'25%'
            },
            {
              levelId:'0005',
              levelname: '5',
              firstyrcomm: '60%',
              renewalcomm:'9%',
              fiveyrlmc:'26%'
            },
            {
              levelId:'0006',
              levelname: '6',
              firstyrcomm: '70%',
              renewalcomm:'10%',
              fiveyrlmc:'27%'
            },
            {
               levelId:'0007',
               levelname: '7',
               firstyrcomm: '75%',
               renewalcomm:'12%',
               fiveyrlmc:'28%'
            },
            {
              levelId:'0008',
              levelname: '8',
              firstyrcomm: '80%',
              renewalcomm:'15%',
              fiveyrlmc:'32%'
            },
            {
              levelId:'0009',
              levelname: '9',
              firstyrcomm: '85%',
              renewalcomm:'16%',
              fiveyrlmc:'31%'
            },
            {
              levelId:'0010',
              levelname: '10',
              firstyrcomm: '90%',
              renewalcomm:'17%',
              fiveyrlmc:'32%'
            },
            {
              levelId:'0011',
              levelname: '11',
              firstyrcomm: '95%',
              renewalcomm:'18%',
              fiveyrlmc:'33%'
            },
            {
                levelId:'0012',
                levelname: '12',
                firstyrcomm: '100%',
                renewalcomm:'20%',
                fiveyrlmc:'35%'
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
                                <span>Add Level</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                              <h4 className="card-title pull-left ">Level Summary</h4>
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
                      <h4 className="card-title pull-left ">Level Management</h4>
                    </div>
                    <div className="card-body">
                       {/*<table border="0" cellspacing="5" cellpadding="5">
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
                       </table>*/}
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

export default AgentLevels;