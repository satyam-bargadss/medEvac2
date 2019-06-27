import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import  './css/style.css';
import  './css/material-dashboard.css';
import  './mdb.min.css';
import { HashRouter as Router, Route, Switch ,NavLink,Redirect} from "react-router-dom";
import CustomerRegistrationForm from './CustomerRegistrationForm'
import CustomerManagement from './CustomerManagement';
import Dashboard  from './Dashboard';
import MemberRegistrationForm from './MemberRegistrationForm';
import Agent from './Agent'
import AgentRegistrationForm from './AgentRegistrationForm';
import Commissions from './Commissions';
import AgentLevels from './AgentLevels';
import CreateCommission from './CreateCommission';
import membershipPlan from './membershipPlan';
import plans from './plans';
import Thanks from './Thanks';
import MemberView from './MemberView';
import report from './report';
import agentview from './agentView';
import AgentCommReport from './AgentCommReport'
//import { BrowserRouter as Router, Route, Switch,Link ,NavLink } from "react-router-dom";

class AdminDashboard extends Component {
      constructor(props) {
        super(props);
        console.log(props);
	
      var isAdminAuth =   window.sessionStorage.getItem('isAdminAuth');
      var data =   window.sessionStorage.getItem('data');
      console.log(isAdminAuth);
      
      console.log(data);
      }
      adminLogout = ()=>{
       // alert('hi');
        window.sessionStorage.removeItem("isAdminAuth");
        window.sessionStorage.removeItem("data");
        if(window.sessionStorage.removeItem("isAdminAuth") != true)
        {
         this.props.history.push('/');
          
        }
      }
    render() {

        return (
            <Router>
          
            <div className="body">
            <div className="wrapper ">
    <div className="sidebar">
   
      <div className="logo">
        {/* adding tongle drop down */}
        
       <h3 onClick={this.adminLogout} className="simple-text logo-normal" 
        >
          <img src="./images/logo.png" alt="Global Medevac" className="img-fluid"/>
        </h3>
      </div>
      <div className="sidebar-wrapper">
        
            
     
        
        
        <ul className="nav">
        <li className="nav-item ">
            <NavLink className="nav-link" to="/Dashboard"  activeClassName=" active">
            <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </NavLink>
          </li>

          {/*<li className="nav-item ">
            <NavLink className="nav-link" to="/user">
              <i className="material-icons">person</i>
              <p>Users</p>
            </NavLink>
        </li>*/}
          
          <li className="nav-item ">
            <NavLink className="nav-link" to="/customer-management"  activeClassName=" active">
              <i className="material-icons">person</i>
              <p>Clients</p>
            </NavLink>
          </li>
		      <li className="nav-item ">
            <NavLink className="nav-link" to="/agent"  activeClassName=" active">
              <i className="material-icons">person</i>
              <p>Agents</p>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/commissions" activeClassName=" active">
              <i className="material-icons">content_paste</i>
              <p>Commissions</p>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/AgentLevels" activeClassName=" active">
              <i className="material-icons">content_paste</i>
              <p>Agents Levels</p>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/membership-plan" activeClassName=" active">
              <i className="material-icons">library_books</i>
              <p>Membership Plans</p>
            </NavLink>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">storage</i>
              <p>Groups</p>
            </a>
          </li>
          {/*<li className="nav-item ">
            <NavLink className="nav-link" to="/report" activeClassName=" active">
              <i className="material-icons">insert_chart_outlined</i>
              <p>Reports</p>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/agentcomm-report" activeClassName=" active">
              <i className="material-icons">insert_chart_outlined</i>
              <p>Agent-wise Comm. Reports</p>
            </NavLink>
      </li>*/}
          <li className="nav-item ">
            <a className="nav-link" href="#">
            <i class="material-icons">settings</i>
              <p>Admin Settings</p>
            </a>
          </li>
        
        </ul>
      
      </div>
    </div>
    <div className="main-panel">
    
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <p className="navbar-brand">Dashboard</p>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
          {
            /*
            <ul className="navbar-nav" onClick={this.adminLogout}>
             
              <li className="nav-item dropdown">
                <a className="nav-link"  id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                
                  <a className="dropdown-item" href="#">Log out</a>
                </div>
              </li>
            </ul>
        
            */
           <Dropdown>
           <Dropdown.Toggle id="dropdown-basic">
           <i className="material-icons">person</i>
           </Dropdown.Toggle>
 
         <Dropdown.Menu>
          <Dropdown.Item onClick={this.adminLogout}>Logout</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
          }
          </div>
        </div>
      </nav>
      
      <div className="content">
        <div className="container">           
          <div className="row">
          
            <Switch>
              <Route path="/Dashboard" component={Dashboard} exact strict/>
              <Route path="/customer-management" component={CustomerManagement} exact strict/>
              <Route path="/member-registration" component={MemberRegistrationForm} exact strict/>
              <Route path="/agent-registration" component={AgentRegistrationForm} exact strict/>
              <Route path="/agent" component={Agent} exact strict/>
              <Route path="/commissions" component={Commissions} exact strict/>
              <Route path="/AgentLevels" component={AgentLevels} exact strict/>
              <Route path="/create-commission" component={CreateCommission} exact strict/>
              <Route path="/membership-plan" component={membershipPlan} exact strict/>
              <Route path="/plans" component={plans} exact strict/>
              <Route path="/user" component='' exact strict/>
              <Route path="/thanks" component={Thanks} exact strict/>
              <Route path="/MemberView/:customerId" component={MemberView} replace exact strict/>
              <Route path="/report" component={report} exact strict/>
              <Route path="/agentview/:agentId" component={agentview} exact strict/>
              <Route path="/agentcomm-report" component={AgentCommReport} exact strict/>
             
          </Switch>
          </div>
      </div>
     {
       /*
      <footer className="footer">
        <div className="container-fluid">
          <div className="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script>, Designed by
            <a href="http://bargadss.com/" target="_blank">Bargadss</a>.
          </div>
        </div>
      </footer>
      */
     }
    </div>
  </div>
  
  
 </div> 
 </div>
 </Router>   
        );
    }
}

export default AdminDashboard;