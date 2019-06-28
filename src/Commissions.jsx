import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import { MDBDataTable } from 'mdbreact';
 import  './css/material-dashboard.css';
 import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
                label: 'Member ID',
                field: 'customerId',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Member   Name',
                field: 'membername',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Plan Name',
                field: 'CustomerFee',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Plan Fees',
                field: 'CustomerFee',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Agent Name',
                field: 'aFirstName',
                sort: 'asc',
                width: 100
              },
            
              {
                label: 'Agent Commission',
                field: 'acommission',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Manager Commission',
                field: 'mcommission',
                sort: 'asc',
                width: 100
              }           
            ]
           
          }
    }
    async commisionBymember(username,assa,aasss) {
     
      try{
        let response = await fetch(URL+'member-wise-commision', {
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
            rows:data.comissionByMember
          }))
          console.log(data.comissionByMember);
    } catch(error){
      console.log(error);
    }
    //end Api calling
    
    }
    componentDidMount(){
      this.commisionBymember();
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
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h4 className="card-title pull-left ">Commission Report</h4>
                    </div>
                    <div className="card-body">
                       <table border="0" cellspacing="5" cellpadding="5">
                            <tr>
                                <td className="date">Date:</td>
                                <td><input type="date" name="start_date" id="start_date" className="form-control" /></td>
                                <td><input type="date" name="end_date" id="end_date" className="form-control" /></td>
                                <td className="select">
                                    <Select>
                                        <MenuItem value={'customerId'}>Member ID</MenuItem>
                                        <MenuItem value={'membername'}>Member Name</MenuItem>
                                        <MenuItem value={'planname'}>Plan Name</MenuItem>
                                        <MenuItem value={'planfees'}>Plan Fees</MenuItem>
                                        <MenuItem value={'agentname'}>Agent Name</MenuItem>
                                        <MenuItem value={'agentcomm'}>Agent Commission</MenuItem>
                                        <MenuItem value={'managercomm'}>Manager Commission</MenuItem>
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