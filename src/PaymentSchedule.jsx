import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { HashRouter as Router, Route
    ,NavLink,Redirect,Link} from "react-router-dom";
 import { MDBDataTable } from 'mdbreact';
 import  './css/material-dashboard.css';
 import Select from '@material-ui/core/Select';
 import MenuItem from '@material-ui/core/MenuItem';
 import Modal from 'react-awesome-modal';
 import * as myConst from './helper/Constant';
 import Switch from 'react-toggle-switch';
 import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const URL = myConst.HTTP_URL

class PaymentSchedule extends Component {
    constructor(props) {
        super(props);
        {/*this.state = {
          visible : false
      }*/}
        //console.log('Tirtha');
        //console.log(props.match.params.agentId);
        this.state = {
          agentId:props.match.params.agentId,
          switched: false,
          columns: [
            {
              label: 'Serial No.',
              field: 'slNo',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Client Name',
              field: 'clientName',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Client Type',
              field: 'clienType',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Membership Plan',
              field: 'memPlan',
              sort: 'asc',
              width: 300
            },
            {
              label: 'Fees',
              field: 'fees',
              sort: 'asc',
              width: 300
            },
            {
                label: 'Group Code',
                field: 'groupCode',
                sort: 'asc',
                width: 300
            },
            {
                label: 'New Comm',
                field: 'newComm',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Advance Comm',
                field: 'chargeback',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Override Comm',
                field: 'override',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Renewal Comm',
                field: 'renewal',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Total Comm',
                field: 'total',
                sort: 'asc',
                width: 300
            },
            {
                label: '1% Interest on Advance',
                field: 'interest',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Earned Comm',
                field: 'earnedComm',
                sort: 'asc',
                width: 300
            }
          ]
        };
    }
   
    async fetchAgentsDetailsCommision() {
     
      try{
        let response = await fetch(URL+'agentPaymentSchedule/'+this.state.agentId, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
        
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              
              // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        
          let data = await response.json()
         console.log(data);
         this.setState(()=>({
             rows:data.agents,
            agentName:data.agentDetails[0].agentName,
            agentLevel:data.agentDetails[0].agentLevel,
            totalCustomer:data.total_customer[0]
          }))


    } catch(error){
      console.log(error);
    }
    //end Api calling
    
    }
   componentDidMount(){
      const agents= this.fetchAgentsDetailsCommision();
       console.log(agents) ;
     }

    render() {

      let data={
         columns: this.state.columns,
         rows:this.state.rows
      }
       const { open } = this.state;

        return (
            <div style={{width: '100%'}}>
                <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="buttons ml-3" style={{overflow:'hidden'}}>
                            {/*<NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/create-commission"  activeClassName=" active">
                                <span>Add Level</span>
                            </NavLink>*/}
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            <div className="container-fluid">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h4 className="card-title pull-left ">Due Commission Status</h4>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h3>Global Medevac</h3>
                            <h5>Address: Texus</h5>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 pull-left">
                                <div className="row">
                                    <label htmlFor="name" className="col-xs-6 col-sm-5 col-md-5 col-lg-5">Agent Name:</label>
                                    <span className="col-xs-6 col-sm-7 col-md-7 col-lg-7">{this.state.agentName}</span>

                                    <div class="clearfix"></div>

                                    <label htmlFor="name" className="col-xs-6 col-sm-5 col-md-5 col-lg-5">Agent Level:</label>
                                    <span className="col-xs-6 col-sm-7 col-md-7 col-lg-7">{this.state.agentLevel}</span>
                                </div>
                            </div>
                            {/*<div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">  
                                <label htmlFor="period" className="col-xs-2 col-sm-2 col-md-2 col-lg-2 period">Period</label>
                                <span className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <TextField
                                    id="date"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    />
                                </span>
                                <span className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <TextField
                                    id="date1"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    />
                                </span>
                                <span className="col-xs-4 col-sm-4 col-md-4 col-lg-4 installment">
                                    <button className="btn btn-rounded waves-effect" type="submit">Filter</button>
                                </span>
                            </div>*/}
                        </div>
                        <div className="clearfix"></div>
                        <div className="table-responsive">
                         <MDBDataTable
                          striped
                          hover
                          data={data}
                        />
                        </div>
                    </div>
                    <div className="buttons text-center">
                    {/*<button className="btn btn-rounded my-4 waves-effect" value="Open" onClick={() => this.openModal()}>Print</button>
                      <Modal visible={this.state.visible} width="552" height="519" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                        <div className="header_part">
                          <h2>Add Agent Manager</h2>
                          <a href="javascript:void(0);" onClick={() => this.closeModal()}>
                            <i class="material-icons">clear</i>
                          </a>
                        </div>
                        <div className="modalBody pt-3">
                          <p>Some Contents</p>
                        </div>
                      </Modal>
                      <button className="btn btn-rounded my-4 waves-effect">Print</button>*/}
                      <button className="btn btn-rounded my-4 waves-effect" onClick={() => window.history.back()}>Back</button>
                      <button className="btn btn-rounded my-4 waves-effect" onClick={() => window.print()}>Print</button>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        );
    }
}

export default PaymentSchedule;