import React from 'react';
import logo from './logo.svg';

import  './css/style.css';
import  './mdb.min.css';
import CustomerLoginForm from './CustomerLoginForm';
//import  './css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerRegistrationForm from './CustomerRegistrationForm'
import CustomerManagement from './CustomerManagement';
import AdminDashboard from './AdminDashboard';

function App() {
 
  return (
		<div>
		<Router>
		<div>
			

			<Route path="/" exact match  component={CustomerLoginForm} />
			<Route path="/customer-registration-form" exact component={CustomerRegistrationForm} />
			<Route path="/customer-management" component={CustomerManagement} />
			<Route path="/admin-dashboard" component={AdminDashboard} />
			
		</div>
	</Router>
    

		</div>
  );
}

export default App;
