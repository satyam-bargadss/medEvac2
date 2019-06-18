
import React, { Component,Fragment } from 'react';
import { MDBDataTable } from 'mdbreact';
import  './css/material-dashboard.css';
import * as myConst from './helper/Constant';
import Switch from 'react-toggle-switch';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { HashRouter as Router, Route ,NavLink,Link} from "react-router-dom";
const URL = myConst.HTTP_URL;
class Agent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
            columns: [
              {
                label: 'Agent ID',
                field: 'agentId',
                sort: 'asc',
                width: 150
              },
              {
                label: 'First Name',
                field: 'firstName',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Last Name',
                field: 'lastName',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Date Of Birth',
                field: 'dob',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Agent Status',
                field: 'isActive',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Action',
                field: 'view',  
                width: 100
              }
            ]
        
      }
    }
    async fetchAgents(username,assa,aasss) {
     
      try{
        let response = await fetch(URL+'agent', {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
        
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              
              // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        
          let data = await response.json()
        
         // console.log(data.customers.customers);
         // return await  data.customers;
          this.setState(()=>({
            rows:data.agents,
            activeAgents:data.activeAgents,
            inActiveAgents:data.inActiveAgents,
            totalAgents:data.totalAgents
          }))
         
          // console.log('hi');
           const newrows =  this.state.rows.map((row) => {

            return {...row, view: <Link to="/agentview">view</Link>};
        });
        this.setState({rows: newrows });
    } catch(error){
      console.log(error);
    }
    //end Api calling
    
    }
    componentDidMount(){
     
           const agents= this.fetchAgents();
            console.log(agents) ;
           
          
          }
    
     
   
    render() {
   
   
      let data={
        columns: this.state.columns,
         rows:this.state.rows
       }
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

export default Agent;