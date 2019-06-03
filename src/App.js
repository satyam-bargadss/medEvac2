import React, { Component } from 'react';
import logo from './logo.svg';

import  './css/style.css';

import CustomerLoginForm from './CustomerLoginForm';
//import  './css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import CustomerRegistrationForm from './CustomerRegistrationForm'
import CustomerManagement from './CustomerManagement';
//import Test from './Test';
import AdminDashboard from './AdminDashboard';
 
class App extends Component 
{
	constructor(props) {
		super(props);
		console.log(localStorage.getItem('isAdminAuth'));
		//this.state.isAdminAuth = await localStorage.getItem('isAdminAuth');
	}
	
 render() {
 
  return (
		<div>
	    
		<Router>
		   
			<Route path="/" exact match  component={CustomerLoginForm} />
		
			{ /*
			<Route path="/customer-management" component={CustomerManagement} />
			*/	}
		    <Route path="/admin-dashboard" component={AdminDashboard} />
		
			
	   </Router>
	
    

		</div>
  );
}
}

export default App;
