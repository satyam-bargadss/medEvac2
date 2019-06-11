import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import  './css/material-dashboard.css';
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
                label: 'Plan Description',
                field: 'desc',
                sort: 'asc',
                width: 200
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
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0002',
                name: 'Yearly',
                desc: 'Description goes here',
                actions:''
              },
              {
                id:'0003',
                name: 'Yearly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0004',
                name: '5 Years Plan',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0005',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0006',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0007',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0008',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0009',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0010',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0011',
                name: 'Yearly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0012',
                name: 'Yearly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0013',
                name: '5 Years Plan',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0014',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0015',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0016',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0017',
                name: 'Yearly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0018',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0019',
                name: 'Monthly',
                desc: 'Description goes here',
                actions: ''
              },
              {
                id:'0020',
                name: 'Monthly',
                desc: 'Description goes here',
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
                                <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/plans"  activeClassName=" active">
                        <span>Add Plan
                            
                        </span>
                        </NavLink>
                                    <a href="#" class="btn btn-info pull-left mb-4">Export Plan</a>
                                </div>
                            </div>
                    </div>
                <br/>
                    <div class="container-fluid">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header card-header-primary">
                                    <h4 class="card-title pull-left ">Plans Summary</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                            <h3 class="bold">11</h3>
                                            <span class="text-dark">Total Plans</span>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                            <h3 class="bold">11</h3>
                                            <span class="text-success">Active Plans</span>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left">
                                            <h3 class="bold">0</h3>
                                            <span class="text-danger">Inactive Plans</span>
                                        </div>
                                        {/*<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
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
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                    </div>
                <br/><br/>
                    <div class="container-fluid">
                        <div class="col-md-12">
                        <div class="card">
                            <div class="card-header card-header-primary">
                            <h4 class="card-title pull-left ">Plan Management</h4>
                            </div>
                            <div class="card-body">
                            <table border="0" cellspacing="5" cellpadding="5">
                                    <tr>
                                        <td>Date:</td>
                                        <td><input type="date" name="start_date" id="start_date" class="form-control" /></td>
                                        <td><input type="date" name="end_date" id="end_date" class="form-control" /></td>
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

export default membershipPlan;