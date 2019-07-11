import FormControl from '@material-ui/core/FormControl';
import React, { Component,Fragment } from 'react';
import { MDBDataTable } from 'mdbreact';
import  './css/material-dashboard.css';
import * as myConst from './helper/Constant';
import Switch from 'react-toggle-switch';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Modal from 'react-responsive-modal';
import Modal1 from 'react-responsive-modal';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css';
import Select2, {Option} from '@material/react-select';
import { HashRouter as Router, Route ,NavLink,Link} from "react-router-dom";
import { array } from 'prop-types';
const URL = myConst.HTTP_URL;

class Agent extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.handleSelectedManager = this.handleSelectedManager.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //console.log(this.props.location.state.message)
        this.state = {
          switched: false,
           open:false,
           open1:false,
           manager:[],
           selectedManager:[],
            columns: [
              {
                label: 'Agent ID',
                field: 'agentId',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Agent Name',
                field: 'firstName',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Date Of Birth',
                field: 'dob',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Agent Level',
                field: 'levelID',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Agent Manager',
                field: 'agentmanager',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Total Commission',
                field: 'totalcomm',
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
    handleChange = (e) => {
      this.setState({
              [e.target.name]: e.target.value
      })
  }
    onOpenModal = (agentId,agentName,currentLevelId) => {
      //console.log(agentName);
   
      this.setState({
            agentId:agentId,
            agentName:agentName,
            levelID:currentLevelId,
      },()=>{
        console.log(agentId)
       return this.getAgentForManager(this.state.agentId,this.state.levelID);
      })
      this.setState({ open: true });
    }
    onOpenModal1 = (agentId,agentName,paymentAmount) => {
      this.setState({
        agentId:agentId,
        agentName:agentName,
        total_amount:paymentAmount,
        },()=>{
      console.log(agentId);
      })
      this.setState({open1 : true});
    }
    onCloseModal = () => {
      this.setState({ open: false });
    };
    onCloseModal1 = () => {
      this.setState({ open1: false });
    };
    async  getAgentForManager(currentAgentId,currentLevelId) {
      
        
      //return false
    
      try{
       let response = await fetch(URL+'agent-for-manager?agentId='+currentAgentId+'&currentLevelId='+currentLevelId, {
           method: 'GET', // *GET, POST, PUT, DELETE, etc.
       
           cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
           //credentials: 'same-origin', // include, *same-origin, omit
           headers: {
                   'Content-Type': 'application/json',
                   
                   // 'Content-Type': 'application/x-www-form-urlencoded',
           }
           //redirect: 'follow', // manual, *follow, error
           //referrer: 'no-referrer', // no-referrer, *client
         // body data type must match "Content-Type" header
       })
       let data = await response.json()

       console.log(data);
   if(data.status ==200)
   {
     //console.log(data.AgentId);
    await  this.setState({agentManager: data.agentManager})

    /* for (var i = 1; i <= 1000; i++) {
      bigList.push({ id: i, name: `Item ${i}` });
    } */
    /*  
   await this.state.agentManager.map((row)=>{
      console.log(row.agentId);
      var newArray = [];    
      newArray.push({id:row.agentId, name:row.firstName + ' '+row.lastName})
      console.log(newArray);
      this.setState({
        manager:newArray 
     })
     })
     */
    var newArray = [];    
    for(let i=0;i<this.state.agentManager.length;i++)
    {
      console.log(this.state.agentManager[i].agentId);
      newArray.push({id:this.state.agentManager[i].agentId, name:this.state.agentManager[i].firstName + ' '+this.state.agentManager[i].lastName})
     
    }
    console.log(newArray);
   
    this.setState({ manager: newArray });
    //this.setState(preState=>{})
    // console.log(this.state.manager);
   }
}
catch(error){
   console.log(error);
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
        
         console.log(data);
         // return await  data.customers;
         //console.log(data.agents);
         //console.log(data.commision);
          this.setState(()=>({
            rows:data.agents,
            activeAgents:data.activeAgents,
            inActiveAgents:data.inActiveAgents,
            totalAgents:data.totalAgents,
            total_amount:data.total_amount
          }))
         
          // console.log('hi');
           const newrows =  this.state.rows.map((row) => {
            return {...row, view: 
            <React.Fragment>
              <Link data-toggle="tooltip" title="View" to={`/agentview/${row.agentId}`}><i class="material-icons">visibility</i></Link>
              <a data-toggle="tooltip" title="Add Manager" onClick={() => this.onOpenModal(row.agentId,row.agent_name,row.levelID)}><i className="material-icons">add_circle</i></a>
              <Link data-toggle="tooltip" title="Payment Schedule" to={`/PaymentSchedule/${row.agentId}`}><i class="material-icons">assignment</i></Link>
              <Link data-toggle="tootltip" title="Payment" onClick={() => this.onOpenModal1(row.agentId,row.agent_name,row.total_commission)}><i class="material-icons">payment</i></Link>
              </React.Fragment>};
            //return {...row, view: <React.Fragment><Link data-toggle="tooltip" title="View" to={`/agentview/${row.agentId}`}><i class="material-icons">visibility</i></Link><a data-toggle="tooltip" title="Add Manager" onClick={() => this.onOpenModal(row.agentId,row.agent_name,row.levelID)}><i className="material-icons">add_circle</i></a><Link data-toggle="tooltip" title="Payment Schedule" to="/PaymentSchedule"><i class="material-icons">payment</i></Link></React.Fragment>};
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
    
     selectMultipleOption = (value) => {
            console.count('onChange')
            console.log("Val", value);
            console.log("Val", value);
            
          //const optionValue  = this.state.selectedManager.push(value);
           
            this.setState( {
              selectedManager: value 
            })
            console.log(this.state.selectedManager)
        }
        
      async handleSelectedManager(event)
      {
        event.preventDefault();
        await console.log(this.state.selectedManager);
        //submit data
        await console.log(this.state.agentId)
        const managerData = {
          currentAgent: this.state.agentId,
          selectetedmanager:this.state.selectedManager
        }
        console.log(managerData);
        try{
          let response = await fetch(URL+'insert-agent-manager', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
          
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(managerData), // body data type must match "Content-Type" header
          })
          
            let data = await response.json()
          
            console.log(data);
            this.setState({
              status: data.status 
            });
            if(data.status == 200){
              // console.log('redirect in admin dashboard');
               console.log(data) ;
               
               this.setState({ open: false });
               this.setState({ open1: false });
              }
            }
            catch(error){
              console.log(error);
            }
      }

      async handleSubmit(event)
      {
        event.preventDefault();
        //submit data
        //await console.log(this.state.paymenttype)
        const agentPaymentData = {
          currentAgent: this.state.agentId,
          total_amount:this.state.total_amount,
          payment_method:this.state.paymenttype
        }
        console.log(agentPaymentData);
        try{
          let response = await fetch(URL+'agentpayNow', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
          
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                //'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(agentPaymentData), // body data type must match "Content-Type" header
          })
          
            let data = await response.json()
            console.log(data);
            this.setState({
              status: data.status 
            });
            if(data.status == 200){
              console.log('redirect in admin dashboard');
               console.log(data) ;
               this.setState({ open: false });
               this.setState({ open1: false });
              }
            }
            catch(error){
              console.log(error);
            }
      }
      
      
    render() {
   
   
      let data={
        columns: this.state.columns,
         rows:this.state.rows
    }
       const { open } = this.state;
       const { open1 } = this.state;
        return (
            <div className="content" style={{width: '100%'}}>
              {this.state.sucessMessage?<p style={{'color':'green'}}>Thank you</p>:''}
            <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="buttons ml-3" style={{overflow:'hidden'}}>
                        <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/agent-registration"  activeClassName=" active">
                          <span>Add Agent</span>
                        </NavLink>
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
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="header_part">
                <h2>Add Agent Manager</h2>
              </div>
              <div className="modalBody pt-3">
                <label htmlFor="agentname" className="col-sm-4 col-md-4 col-lg-4 pull-left">Agent Name</label>
                <div className="col-sm-8 col-md-8 col-lg-8 pull-left">{this.state.agentName !=''?this.state.agentName:''} </div>
                <div className="clearfix"></div><br/>
                <form onSubmit={this.handleSelectedManager}>  
                <label htmlFor="selectmanager" className="col-sm-4 col-md-4 col-lg-4 pull-left">Select Manager</label>
                <div className="col-sm-8 col-md-8 col-lg-8 pull-left">
                  {this.state.manager?<Picky
                    
                    options={this.state.manager}
                    value={this.state.selectedManager}
                    
                    open={true}
                    includeSelectAll={true}
                    onChange={this.selectMultipleOption}
                    labelKey="name"
                    
                    multiple={true}
                    includeSelectAll={true}
                  
                    valueKey="id"
                    
                   includeFilter={true}
                   dropdownHeight={600}
                  />:''}
                  
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="buttons text-center">
                    <button className="btn btn-rounded my-4 waves-effect">Submit</button>
                </div>
                <div className="clearfix"></div>
                 </form>
                 <div className="clearfix"></div>
              </div>
            </Modal>

            <Modal1 open={open1} onClose={this.onCloseModal1} center>
              <div className="header_part">
                <h2>Payment</h2>
              </div>
              <div className="modalBody pt-3">
                <form method="post" onSubmit={this.handleSubmit}>
                <label htmlFor="agentname" className="col-sm-4 col-md-4 col-lg-4 pull-left"> Agent Name :</label>
                <div className="col-sm-8 col-md-8 col-lg-8 pull-left">{this.state.agentName !=''?this.state.agentName:''}</div>
                <div className="clearfix"></div><br/>  
                  <label htmlFor="paymenttype" className="col-sm-4 col-md-4 col-lg-4 pull-left"> Total Amount :</label>
                  <div className="col-sm-8 col-md-8 col-lg-8 pull-left">{this.state.total_amount !=''?this.state.total_amount:''}</div>
                    {/*<div className="clearfix"></div><br/>
                    <label htmlFor="paymenttype" className="col-sm-4 col-md-4 col-lg-4 pull-left">Narration:</label>
                    <div className="col-sm-8 col-md-8 col-lg-8 pull-left">
                      <textarea placeholder="Write your narration here" name="narration" className="form-control"></textarea>
                    </div>*/}
                    <div className="clearfix"></div><br/>
                    <label htmlFor="paymenttype" className="col-sm-4 col-md-4 col-lg-4 pull-left"> Total Amount :</label>
                  <div className="col-sm-8 col-md-8 col-lg-8 pull-left">
                   
                    <Select
                      id="paymenttype"
                      value={this.state.paymenttype}
                      onChange={this.handleChange}
                      name='paymenttype'
                    >
                      <MenuItem value={'Check'} selected>Check</MenuItem>
                      <MenuItem value={'ACH'}>ACH</MenuItem>
                      <MenuItem value={'Cash'}>Cash</MenuItem>
                    </Select>
                    </div>
                    {/*<div className="clearfix"></div><br/>
                    <label htmlFor="paymenttype" className="col-sm-4 col-md-4 col-lg-4 pull-left">Narration:</label>
                    <div className="col-sm-8 col-md-8 col-lg-8 pull-left">
                      <textarea placeholder="Write your narration here" name="narration" className="form-control"></textarea>
                    </div>*/}
                    <div className="clearfix"></div><br/><br/><br/>
                    <div className="buttons text-center">
                      <button className="btn btn-rounded my-4 waves-effect">Pay Now</button>
                    </div>
                </form>
                
               
              </div>
            </Modal1>

          </div>
        );
    }
}

export default Agent;