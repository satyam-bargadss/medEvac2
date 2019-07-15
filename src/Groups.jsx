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

class Groups extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
          columns: [
            {
              label: 'Group ID',
              field: 'groupId',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Group Name',
              field: 'groupName',
              sort: 'asc',
              width: 150
            },
            {
              label: 'Date of Creation',
              field: 'doc',
              sort: 'asc',
              width: 150
            },
            {
              label: 'No. of Members',
              field: 'nom',
              sort: 'asc',
              width: 200
            }
          ],
          rows: [
            {
              groupId:'USBAR001',
              groupname: 'gbegebhe',
              doc: '05/02/2017',
              nom:'15'
            },
            {
                groupId:'USBAR002',
                groupname: 'wfwfwf',
                doc: '03/11/2018',
                nom:'25'
            },
            {
                groupId:'USGSM012',
                groupname: 'qwluijwf',
                doc: '12/02/2015',
                nom:'100'
            },
            {
                groupId:'USNRT009',
                groupname: 'dqfkj',
                doc: '08/13/2018',
                nom:'23'
            },
            {
                groupId:'T&TLSM001',
                groupname: 'w1r1qdwf',
                doc: '11/19/2018',
                nom:'102'
            },
            {
                groupId:'BAGHN001',
                groupname: 'egerkgje',
                doc: '09/05/2016',
                nom:'26'
            },
            {
                groupId:'USNOM003',
                groupname: 'etmymym',
                doc: '07/15/2018',
                nom:'30'
            },
            {
                groupId:'USMBA002',
                groupname: 'yw4yw4yh',
                doc: '06/23/2014',
                nom:'32'
            },
            {
                groupId:'T&TNOP009',
                groupname: 'grntnt',
                doc: '010/21/2018',
                nom:'102'
            },
            {
                groupId:'ANTPOS005',
                groupname: 'gegeg',
                doc: '11/07/2015',
                nom:'45'
            },
            {
                groupId:'USPLK006',
                groupname: 'fwfwf',
                doc: '05/21/2018',
                nom:'36'
            },
            {
                groupId:'USKLP007',
                groupname: 'swfwev',
                doc: '05/11/2017',
                nom:'155'
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
                              <h4 className="card-title pull-left ">Group Summary</h4>
                            </div>
                            <div className="card-body">
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                    <h3 className="bold">11</h3>
                                    <span className="text-dark">No. of Members</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left border-right">
                                    <h3 className="bold">11</h3>
                                    <span className="text-success">Active Group</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 pull-left">
                                    <h3 className="bold">0</h3>
                                    <span className="text-danger">Inactive Group</span>
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
                      <h4 className="card-title pull-left ">Group Management</h4>
                    </div>
                    <div className="card-body">
                      {/*} <table border="0" cellspacing="5" cellpadding="5">
                            <tr>
                                <td className="date">Date:</td>
                                <td><input type="date" name="start_date" id="start_date" className="form-control" /></td>
                                <td><input type="date" name="end_date" id="end_date" className="form-control" /></td>
                                <td className="select">
                                    <Select>
                                        <MenuItem value={'groupID'}>Group ID</MenuItem>
                                        <MenuItem value={'groupname'}>Group Name</MenuItem>
                                        <MenuItem value={'doc'}>Date of Creation</MenuItem>
                                        <MenuItem value={'nom'}>No. of Members</MenuItem>
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

export default Groups;