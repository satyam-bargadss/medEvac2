
import React, { Component,Fragment } from 'react';
import { MDBDataTable } from 'mdbreact';
import  './css/material-dashboard.css';
import * as myConst from './helper/Constant';
import Switch from 'react-toggle-switch';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { HashRouter as Router, Route ,NavLink,Redirect} from "react-router-dom";
const URL = myConst.HTTP_URL;
class Agent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
            columns: [
              {
                label: 'Agent ID',
                field: 'id',
                sort: 'asc',
                width: 150
              },
              {
                label: 'First Name',
                field: 'fname',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Last Name',
                field: 'lname',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Level',
                field: 'level',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Agent Status',
                field: 'status',
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
                id:'0001',
                fname: 'Tiger',
                lname: 'Nixon',
                level: '12',
                status: 'Active',
                actions: ''
              },
              {
                id:'0002',
                fname: 'Garrett',
                lname: 'Winters',
                level: '11',
                status: 'Active',
                actions:<Fragment><a href="#"><span className="view"></span></a>
                <a href="#"><span className="edit"></span></a>
                <Switch onClick={this.toggleSwitch} on={true}/>
                </Fragment>
              },
              {
                id:'0003',
                fname: 'Ashton',
                lname: 'Cox',
                level: '10',
                status: 'Active',
                actions: ''
              },
              {
                id:'0004',
                fname: 'Cedric',
                lname: 'Kelly',
                level: '9',
                status: 'Active',
                actions: ''
              },
              {
                id:'0005',
                fname: 'Airi',
                lname: 'Satou',
                level: '8',
                status: 'Inactive',
                actions: ''
              },
              {
                id:'0006',
                fname: 'Brielle',
                lname: 'Williamson',
                level: '7',
                status: 'Active',
                actions: ''
              },
              {
                id:'0007',
                fname: 'Herrod',
                lname: 'Chandler',
                level: '6',
                Status: 'Active',
                actions: ''
              },
              {
                id:'0008',
                fname: 'Rhona',
                lname: 'Davidson',
                level: '5',
                status: 'Active',
                actions: ''
              },
              {
                id:'0009',
                fname: 'Colleen',
                lname: 'Hurst',
                level: '4',
                status: 'Active',
                actions: ''
              },
              {
                id:'0010',
                fname: 'Sonya',
                lname: 'Frost',
                level: '3',
                status: 'Active',
                actions: ''
              },
              {
                id:'0011',
                fname: 'Jena',
                lname: 'Gaines',
                level: '2',
                status: 'Active',
                actions: ''
              },
              {
                id:'0012',
                fname: 'Quinn',
                lname: 'Flynn',
                level: '1',
                status: 'Active',
                actions: ''
              },
              {
                id:'0013',
                fname: 'Charde',
                lname: 'Marshall',
                level: '12',
                status: 'Inactive',
                actions: ''
              },
              {
                id:'0014',
                fname: 'Haley',
                lname: 'Kennedy',
                level: '11',
                status: 'Active',
                actions: ''
              },
              {
                id:'0015',
                fname: 'Tatyana',
                lname: 'Fitzpatrick',
                level: '10',
                status: 'Active',
                actions: ''
              },
              {
                id:'0016',
                fname: 'Michael',
                lname: 'Silva',
                level: '9',
                status: 'Active',
                actions: ''
              },
              {
                id:'0017',
                fname: 'John',
                lname: 'Doe',
                level: '8',
                status: 'Active',
                actions: ''
              },
              {
                id:'0018',
                fname: 'Gloria',
                lname: 'Little',
                level: '7',
                status: 'Active',
                actions: ''
              },
              {
                id:'0019',
                fname: 'Bradley',
                lname: 'Greer',
                level: '6',
                status: 'Active',
                actions: ''
              },
              {
                id:'0020',
                fname: 'Dai',
                lname: 'Rios',
                level: '5',
                status: 'Active',
                actions: ''
              }
            ]}
        };
      }
    render() {
        return (
            <div className="content" style={{width: '100%'}}>
            <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="buttons ml-3" style={{overflow:'hidden'}}>
                        <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/agent-registration"  activeClassName=" active">
                  <span>Add Agent
                      
                  </span>
                </NavLink>
                            <a href="#" className="btn btn-info pull-left mb-4">Import Agents</a>
                        </div>
                    </div>
            </div>
        <br/>
            <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                              <h4 className="card-title pull-left ">Agents Summary</h4>
                            </div>
                            <div className="card-body">
                                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 className="bold">11</h3>
                                    <span className="text-dark">Total Agents</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 className="bold">11</h3>
                                    <span className="text-success">Active Agents</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 className="bold">0</h3>
                                    <span className="text-danger">Inactive Agents</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 className="bold">$10,000</h3>
                                    <span className="text-info">Total Commissions Paid</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 className="bold">$15,500</h3>
                                    <span className="text-danger">Total Commissions Due</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left">
                                    <h3 className="bold">25</h3>
                                    <span className="text-danger">Total Agent Managers</span>
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
                      <h4 className="card-title pull-left ">Agent Management</h4>
                    </div>
                    <div className="card-body">
                       <table border="0" cellspacing="5" cellpadding="5">
                            <tr>
                                <td className="date">Date:</td>
                                <td><input type="date" name="start_date" id="start_date" className="form-control" /></td>
                                <td><input type="date" name="end_date" id="end_date" className="form-control" /></td>
                                <td className="select">
                                  <Select>
                                    <MenuItem value={'agentid'}>Agent ID</MenuItem>
                                    <MenuItem value={'agentname'}>Agent Name</MenuItem>
                                    <MenuItem value={'agenttype'}>Agent Type</MenuItem>
                                    <MenuItem value={'level'}>Level</MenuItem>
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

export default Agent;