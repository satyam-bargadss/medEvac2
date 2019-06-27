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

class AdminSettings extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
          columns: [
            {
              label: 'Serial No.',
              field: 'serial',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Employee ID',
              field: 'employeeID',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Employee Name',
              field: 'employeeName',
              sort: 'asc',
              width: 150
            },
            {
              label: 'User Name',
              field: 'userName',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Designation',
              field: 'designation',
              sort: 'asc',
              width: 200
            },
            {
              label: 'Status',
              field: 'status',
              sort: 'asc',
              width: 200
            }
          ],
          rows: [
            {
              serial:'001',
              employeeID: '2300150',
              employeeName: 'Trevor Mardock',
              userName:'trevor001',
              designation:'Senior Manager',
              status:'Active'
            },
            {
              serial:'002',
              employeeID: '2300151',
              employeeName: 'Mike Hesson',
              userName:'mike001',
              designation:'Senior Manager',
              status:'Active'
            },
            {
              serial:'003',
              employeeID: '2300152',
              employeeName: 'Mick Foley',
              userName:'mick005',
              designation:'Executive',
              status:'Active'
            },
            {
              serial:'004',
              employeeID: '2300153',
              employeeName: 'Tiffany Reid',
              userName:'tiff213',
              designation:'Executive',
              status:'Active'
            },
            {
              serial:'005',
              employeeID: '2300154',
              employeeName: 'John Doe',
              userName:'john009',
              designation:'Consultant',
              status:'Active'
            },
            {
              serial:'006',
              employeeID: '2300155',
              employeeName: 'Mitchell Watson',
              userName:'mitch654',
              designation:'Senior Consultant',
              status:'Active'
            },
            {
              serial:'007',
              employeeID: '2300156',
              employeeName: 'Ricky Roy',
              userName:'rick740',
              designation:'Junior Executive',
              status:'Active'
            },
            {
              serial:'008',
              employeeID: '2300157',
              employeeName: 'Ronny Martin',
              userName:'ronny009',
              designation:'Executive',
              status:'Active'
            },
            {
              serial:'009',
              employeeID: '2300158',
              employeeName: 'Max Austin',
              userName:'max159',
              designation:'Assistant Manager',
              status:'Active'
            },
            {
              serial:'010',
              employeeID: '2300159',
              employeeName: 'Ross Watson',
              userName:'ross632',
              designation:'Executive',
              status:'Active'
            },
            {
              serial:'011',
              employeeID: '2300160',
              employeeName: 'Damien Doe',
              userName:'dam005',
              designation:'Executive',
              status:'Active'
            },
            {
              serial:'012',
              employeeID: '2300161',
              employeeName: 'Phill Simmons',
              userName:'phill007',
              designation:'Executive',
              status:'Active'
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
                                <span>Add User</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                              <h4 className="card-title pull-left ">User Summary</h4>
                            </div>
                            <div className="card-body">
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                    <h3 className="bold">11</h3>
                                    <span className="text-dark">No. of Users</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                    <h3 className="bold">11</h3>
                                    <span className="text-success">Active User</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left">
                                    <h3 className="bold">0</h3>
                                    <span className="text-danger">Inactive User</span>
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
                      <h4 className="card-title pull-left ">User Management</h4>
                    </div>
                    <div className="card-body">
                       <table border="0" cellspacing="5" cellpadding="5">
                            <tr>
                                <td className="date">Date:</td>
                                <td><input type="date" name="start_date" id="start_date" className="form-control" /></td>
                                <td><input type="date" name="end_date" id="end_date" className="form-control" /></td>
                                <td className="select">
                                    <Select>
                                        <MenuItem value={'serial'}>SL. No.</MenuItem>
                                        <MenuItem value={'employeeID'}>Employee ID</MenuItem>
                                        <MenuItem value={'employeeName'}>Employee Name</MenuItem>
                                        <MenuItem value={'userName'}>User Name</MenuItem>
                                        <MenuItem value={'designation'}>Designation</MenuItem>
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

export default AdminSettings;