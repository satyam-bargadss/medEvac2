import React, { Component } from 'react';
import { HashRouter as Router, Route
    ,NavLink,Redirect} from "react-router-dom";
 import { MDBDataTable } from 'mdbreact';
 import  './css/material-dashboard.css';
 import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
 import * as myConst from './helper/Constant';
 import Switch from 'react-toggle-switch'

class AgentCommReport extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          switched: false,
          data:  {
            columns: [
              {
                label: 'Agent ID',
                field: 'agentid',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Agent Name',
                field: 'agentname',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Customer Name',
                field: 'customername',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Plan Fees',
                field: 'fees',
                sort: 'asc',
                width: 100
              },
              {
                label: 'New Commission',
                field: 'newcommission',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Renewal Commission',
                field: 'rcommission',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Override Commission',
                field: 'overcommission',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Total Commission',
                field: 'totalcommission',
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
                agentid:'0001',
                agentname: 'John Doe',
                customername: 'Tiger Nixon',
                fees:'$6,999',
                newcommission:'$2,000',
                rcommission:'$4,000',
                overcommission:'$250',
                totalcommission:'$6,250',
                actions:''
              },
              {
                agentid:'0002',
                agentname: 'John Doe',
                customername: 'Garrett Winters',
                fees:'$1,999',
                newcommission:'$3,500',
                rcommission:'$6,000',
                overcommission:'$750',
                totalcommission:'$10,250',
                actions:''
              },
              {
                agentid:'0003',
                agentname: 'John Doe',
                customername: 'Ashton Cox',
                fees:'$2,999',
                newcommission:'$1,700',
                rcommission:'$900',
                overcommission:'$300',
                totalcommission:'$2,900',
                actions:''
              },
              {
                agentid:'0004',
                agentname: 'John Doe',
                customername: 'Cedric Kelly',
                fees:'$1,499',
                newcommission:'$2,000',
                rcommission:'$600',
                overcommission:'$150',
                totalcommission:'$2,750',
                actions:''
              },
              {
                agentid:'0005',
                agentname: 'John Doe',
                customername: 'Airi Satou',
                fees:'$9,999',
                newcommission:'$5,400',
                rcommission:'$2,700',
                overcommission:'$800',
                totalcommission:'$8,900',
                actions:''
              },
              {
                agentid:'0006',
                agentname: 'John Doe',
                customername: 'Jena Gaines',
                fees:'$1,999',
                newcommission:'$3,700',
                rcommission:'$2,800',
                overcommission:'$740',
                totalcommission:'$1,240',
                actions:''
              },
              {
                agentid:'0007',
                agentname: 'John Doe',
                customername: 'Brielle Williamson',
                fees:'$9,999',
                newcommission:'$3,600',
                rcommission:'$7,000',
                overcommission:'$200',
                totalcommission:'$10,800',
                actions:''
              },
              {
                agentid:'0008',
                agentname: 'John Doe',
                customername: 'Herrod Chandler',
                fees:'$2,999',
                newcommission:'$1,500',
                rcommission:'$7,000',
                overcommission:'$350',
                totalcommission:'$8,850',
                actions:''
              },
              {
                agentid:'0009',
                agentname: 'John Doe',
                customername: 'Rhona Davidson',
                fees:'$6,999',
                newcommission:'$6,775',
                rcommission:'$2,500',
                overcommission:'$700',
                totalcommission:'$9,975',
                actions:''
              },
              {
                agentid:'0010',
                agentname: 'John Doe',
                customername: 'Colleen Hurst',
                fees:'$3,499',
                newcommission:'$2,000',
                rcommission:'$5,500',
                overcommission:'$200',
                totalcommission:'$7,700',
                actions:''
              },
              {
                agentid:'0011',
                agentname: 'John Doe',
                customername: 'Sonya Frost',
                fees:'$3,499',
                newcommission:'$1,900',
                rcommission:'$7,100',
                overcommission:'$800',
                totalcommission:'$9,800',
                actions:''
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
                      <h4 className="card-title pull-left ">Agent Wise Commission Report</h4>
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

export default AgentCommReport;