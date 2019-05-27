import React, { Component } from 'react';
import  './css/style.css';
import  './css/material-dashboard.css';
import  './mdb.min.css';
//import { BrowserRouter as Router, Route, Link ,NavLink} from "react-router-dom";
import CustomerRegistrationForm from './CustomerRegistrationForm'
import CustomerManagement from './CustomerManagement';
import { BrowserRouter as Router, Route, Switch,Link ,NavLink } from "react-router-dom";
class AdminDashboard extends Component {
      constructor(props) {
        super(props);
        console.log(props);
        localStorage.getItem('isAdminAuth');
      }
      
    render() {
        return (
            <div className="body">
            
                <div className="wrapper ">
    <div className="sidebar">
   
      <div className="logo">
        <a href="#" className="simple-text logo-normal">
          <img src="./img/logo3.png" alt="Global Medevac" className="img-fluid"/>
        </a>
      </div>
      <div className="sidebar-wrapper">
        {
            /*
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
    */
        }
        
        <ul className="nav">
          
          <li className="nav-item ">
            <NavLink className="nav-link" to="/customer-management" >
              <i className="material-icons">person</i>
              <p>Customer Management</p>
            </NavLink>
          </li>
		  <li className="nav-item ">
            <a className="nav-link" href="./agent-management.html">
              <i className="material-icons">person</i>
              <p>Agent Management</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./commission.html">
              <i className="material-icons">content_paste</i>
              <p>Commission</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./Customership-plan.html">
              <i className="material-icons">library_books</i>
              <p>Membership Plan</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./service-list.html">
              <i className="material-icons">storage</i>
              <p>Service List</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./reports.html">
              <i className="material-icons">insert_chart_outlined</i>
              <p>Reports</p>
            </a>
          </li>
        
        </ul>
      
      </div>
    </div>
    <div className="main-panel">
    
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a className="navbar-brand" href="#pablo">Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form">
              <div className="input-group no-border">
                <input type="text" value="" className="form-control" placeholder="Search..."/>
                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
             
              <li className="nav-item dropdown">
                <a className="nav-link" href="#pablo" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          </div>
        </div>
      </nav>
      
      <div className="content">
		<div className="container text-center">
			<h1>Welcome to Global Medevac!</h1>
		</div>
        <div className="container-fluid">
          <div className="row">
            <h1>hellow abcdefgh</h1>
          <Router>
		      <Route path="/customer-registration" component={Test} />
      <Route path="/customber-management"   render={(props) => <CustomerManagement/>}></Route>
          
	   </Router>
       

            
			<div className="clearfix"></div>
            
          <div className="row">
            
          
          </div>
        </div>
      </div>
     
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
    </div>
  </div>
  
  
 </div>  
            </div>
        );
    }
}
const Test= ()=> {return(<h1>hellow</h1>)};
export default AdminDashboard;