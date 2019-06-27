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
         
            columns: [
              {
                label: 'Level ID',
                field: 'AgentId',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Commision Fee',
                field: 'firstName',
                sort: 'asc',
                width: 150
              },
              {
                label: '1 st year commission',
                field: 'lastName',
                sort: 'asc',
                width: 150
              },
              {
                label: 'First Name',
                field: 'Commission',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Last Name',
                field: 'Commission',
                sort: 'asc',
                width: 200
              }
            ]
        };
    }
    async fetchCommision(username,assa,aasss) {
     
      try{
        let response = await fetch(URL+'agent-commision', {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
        
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              
              // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        
          let data = await response.json()
        
          this.setState(()=>({
            rows:data.agentComission
          }))
          console.log(data.agentComission);
    } catch(error){
      console.log(error);
    }
    //end Api calling
    
    }
    componentDidMount(){
      this.fetchCommision();
    }
    render() {


      let data={
        columns: this.state.columns,
         rows:this.state.rows
       }
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
                          data={data}
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