
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
                label: 'Agent Name',
                field: 'name',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Agent Type',
                field: 'type',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Group',
                field: 'group',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Level',
                field: 'level',
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
                name: 'Tiger Nixon',
                type: 'Individual',
                group: 'Platinum Memberships in FL ACH',
                level: '1',
                actions: ''
              },
              {
                id:'0002',
                name: 'Garrett Winters',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '2',
                actions:<Fragment><a href="#"><span className="view"></span></a>
                <a href="#"><span className="edit"></span></a>
                <Switch onClick={this.toggleSwitch} on={true}/>
                </Fragment>
              },
              {
                id:'0003',
                name: 'Ashton Cox',
                type: 'Corporate',
                group: 'Electronic ACH Debit',
                level: '3',
                actions: ''
              },
              {
                id:'0004',
                name: 'Cedric Kelly',
                type: 'Individual',
                group: 'Electronic ACH Debit',
                level: '4',
                actions: ''
              },
              {
                id:'0005',
                name: 'Airi Satou',
                type: 'Individual',
                group: 'Electronic ACH Debit',
                level: '5',
                actions: ''
              },
              {
                id:'0006',
                name: 'Brielle Williamson',
                type: 'Corporate',
                group: 'Home Office ACH',
                level: '6',
                actions: ''
              },
              {
                id:'0007',
                name: 'Herrod Chandler',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '7',
                actions: ''
              },
              {
                id:'0008',
                name: 'Rhona Davidson',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '8',
                actions: ''
              },
              {
                id:'0009',
                name: 'Colleen Hurst',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '9',
                actions: ''
              },
              {
                id:'0010',
                name: 'Sonya Frost',
                type: 'Corporate',
                group: 'Home Office ACH',
                level: '10',
                actions: ''
              },
              {
                id:'0011',
                name: 'Jena Gaines',
                type: 'Corporate',
                group: 'Home Office ACH',
                level: '11',
                actions: ''
              },
              {
                id:'0012',
                name: 'Quinn Flynn',
                type: 'Corporate',
                group: 'Home Office ACH',
                level: '12',
                actions: ''
              },
              {
                id:'0013',
                name: 'Charde Marshall',
                type: 'Individual',
                group: 'Platinum Memberships in FL ACH',
                level: '11',
                actions: ''
              },
              {
                id:'0014',
                name: 'Haley Kennedy',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '10',
                actions: ''
              },
              {
                id:'0015',
                name: 'Tatyana Fitzpatrick',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '9',
                actions: ''
              },
              {
                id:'0016',
                name: '	Michael Silva',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '8',
                actions: ''
              },
              {
                id:'0017',
                name: 'John Doe',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '7',
                actions: ''
              },
              {
                id:'0018',
                name: 'Gloria Little',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '6',
                actions: ''
              },
              {
                id:'0019',
                name: 'Bradley Greer',
                type: 'Individual',
                group: 'Home Office ACH',
                level: '5',
                actions: ''
              },
              {
                id:'0020',
                name: 'Dai Rios',
                type: 'Corporate',
                group: 'Home Office ACH',
                level: '4',
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
                                    <h3 className="bold">11</h3>
                                    <span className="text-info">Active Contacts</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 className="bold">0</h3>
                                    <span className="text-danger">Inactive Contacts</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left">
                                    <h3 className="bold">1</h3>
                                    <span className="text-danger">Contacts Logged In Today</span>
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