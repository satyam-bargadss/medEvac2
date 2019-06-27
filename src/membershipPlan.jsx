import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import  './css/material-dashboard.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import * as myConst from './helper/Constant';
import Switch from 'react-toggle-switch';
import { HashRouter as Router, Route ,NavLink,Redirect} from "react-router-dom";

class membershipPlan extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
            columns: [
              {
                label: 'Plan ID',
                field: 'id',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Plan Name',
                field: 'name',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Individual Fees',
                field: 'indfees',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Family Fees',
                field: 'familyfees',
                sort: 'asc',
                width: 200
              }
            ],
            rows: [
              {
                id:'0001',
                name: 'Monthly',
                indfees: '$24.75',
                familyfees: '$37.50'
              },
              {
                id:'0002',
                name: 'Lifetime',
                indfees: '$3,250',
                familyfees: '$4,450'
              },
              {
                id:'0003',
                name: '5 Year',
                indfees: '$2,150',
                familyfees: '$3,150'
              },
              {
                id:'0004',
                name: 'Annual',
                indfees: '$297',
                familyfees: '$474'
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
                                <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/plans"  activeClassName=" active">
                                  <span>Add Plan</span>
                                </NavLink>
                                </div>
                            </div>
                    </div>
                <br/>
                    <div className="container-fluid">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                    <h4 className="card-title pull-left ">Plans Summary</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                            <h3 className="bold">11</h3>
                                            <span className="text-dark">Total Plans</span>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                            <h3 className="bold">11</h3>
                                            <span className="text-success">Active Plans</span>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left">
                                            <h3 className="bold">0</h3>
                                            <span className="text-danger">Inactive Plans</span>
                                        </div>
                                        {/*<div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
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
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                    </div>
                <br/><br/>
                    <div className="container-fluid">
                        <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                            <h4 className="card-title pull-left ">Plan Management</h4>
                            </div>
                            <div className="card-body">
                            <table border="0" cellspacing="5" cellpadding="5">
                                    <tr>
                                        <td className="date">Date:</td>
                                        <td><input type="date" name="start_date" id="start_date" className="form-control" /></td>
                                        <td><input type="date" name="end_date" id="end_date" className="form-control" /></td>
                                        <td className="select">
                                          <Select>
                                            <MenuItem value={'planid'}>Plan ID</MenuItem>
                                            <MenuItem value={'planname'}>Plan Name</MenuItem>
                                            <MenuItem value={'indfees'}>Individual Fees</MenuItem>
                                            <MenuItem value={'familyfees'}>Family Fees</MenuItem>
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

export default membershipPlan;