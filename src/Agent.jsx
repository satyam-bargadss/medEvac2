
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
                actions: ''
              },
              {
                id:'0002',
                name: 'Garrett Winters',
                type: 'Individual',
                group: 'Home Office ACH',
                actions:<Fragment><a href="#"><span class="view"></span></a>
                <a href="#"><span class="edit"></span></a>
                <Switch onClick={this.toggleSwitch} on={true}/>
                </Fragment>
              },
              {
                id:'0003',
                name: 'Ashton Cox',
                type: 'Corporate',
                group: 'Electronic ACH Debit',
                actions: ''
              },
              {
                id:'0004',
                name: 'Cedric Kelly',
                type: 'Individual',
                group: 'Electronic ACH Debit',
                actions: ''
              },
              {
                id:'0005',
                name: 'Airi Satou',
                type: 'Individual',
                group: 'Electronic ACH Debit',
                actions: ''
              },
              {
                id:'0006',
                name: 'Brielle Williamson',
                type: 'Corporate',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0007',
                name: 'Herrod Chandler',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0008',
                name: 'Rhona Davidson',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0009',
                name: 'Colleen Hurst',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0010',
                name: 'Sonya Frost',
                type: 'Corporate',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0011',
                name: 'Jena Gaines',
                type: 'Corporate',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0012',
                name: 'Quinn Flynn',
                type: 'Corporate',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0013',
                name: 'Charde Marshall',
                type: 'Individual',
                group: 'Platinum Memberships in FL ACH',
                actions: ''
              },
              {
                id:'0014',
                name: 'Haley Kennedy',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0015',
                name: 'Tatyana Fitzpatrick',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0016',
                name: '	Michael Silva',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0017',
                name: 'John Doe',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0018',
                name: 'Gloria Little',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0019',
                name: 'Bradley Greer',
                type: 'Individual',
                group: 'Home Office ACH',
                actions: ''
              },
              {
                id:'0020',
                name: 'Dai Rios',
                type: 'Corporate',
                group: 'Home Office ACH',
                actions: ''
              }
            ]}
        };
      }
    render() {
        return (
            <div class="content" style={{width: '100%'}}>
            <div class="container-fluid">
                    <div class="col-md-12">
                        <div class="buttons ml-3" style={{overflow:'hidden'}}>
                        <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/agent-registration"  activeClassName=" active">
                  <span>Add Agent
                      
                  </span>
                </NavLink>
                            <a href="#" class="btn btn-info pull-left mb-4">Import Agents</a>
                        </div>
                    </div>
            </div>
        <br/>
            <div class="container-fluid">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header card-header-primary">
                              <h4 class="card-title pull-left ">Agents Summary</h4>
                            </div>
                            <div class="card-body">
                                <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 class="bold">11</h3>
                                    <span class="text-dark">Total Agents</span>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 class="bold">11</h3>
                                    <span class="text-success">Active Agents</span>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 class="bold">0</h3>
                                    <span class="text-danger">Inactive Agents</span>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 class="bold">11</h3>
                                    <span class="text-info">Active Contacts</span>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
                                    <h3 class="bold">0</h3>
                                    <span class="text-danger">Inactive Contacts</span>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left">
                                    <h3 class="bold">1</h3>
                                    <span class="text-danger">Contacts Logged In Today</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        <br/><br/>
            <div class="container-fluid">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header card-header-primary">
                      <h4 class="card-title pull-left ">Agent Management</h4>
                    </div>
                    <div class="card-body">
                       <table border="0" cellspacing="5" cellpadding="5">
                            <tr>
                                <td className="date">Date:</td>
                                <td><input type="date" name="start_date" id="start_date" class="form-control" /></td>
                                <td><input type="date" name="end_date" id="end_date" class="form-control" /></td>
                                <td className="select">
                                  <Select>
                                    <MenuItem value={'agentid'}>Agent ID</MenuItem>
                                    <MenuItem value={'agentname'}>Agent Name</MenuItem>
                                    <MenuItem value={'agenttype'}>Agent Type</MenuItem>
                                    <MenuItem value={'agentgroup'}>Tier</MenuItem>
                                  </Select>
                                </td>
                                <td><button class="btn btn-rounded  waves-effect" type="submit">Search</button></td>
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