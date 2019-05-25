import React, { Component } from 'react';
//import AdminDashboard from './AdminDashboard';
//import App from './App'
import $ from 'jquery';
import validation from 'jquery-validation';
import  './css/style.css';
//import  './mdb.min.css';
import { Redirect,Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { red } from '@material-ui/core/colors';
//import { blockStatement } from '@babel/types';

class CustomerLoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
				email: '',
				password: '',
				status:'',
				errMessage:'',
				redirect:false
		};
		this.onSubmit = this.onSubmit.bind(this);
}
handleChange = (e) => {
	this.setState({
			[e.target.name]: e.target.value
	})
}
async  onSubmit(event) {
	event.preventDefault();
	const form = {
	  email: this.state.email,
	  password: this.state.password
	}
	console.log(form);


//	Api colling
try{
let response = await fetch('http://127.0.0.1:8000/api/login', {
	method: 'POST', // *GET, POST, PUT, DELETE, etc.

	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	//credentials: 'same-origin', // include, *same-origin, omit
	headers: {
			'Content-Type': 'application/json',
			
			// 'Content-Type': 'application/x-www-form-urlencoded',
	},
	//redirect: 'follow', // manual, *follow, error
	//referrer: 'no-referrer', // no-referrer, *client
	body: JSON.stringify(form), // body data type must match "Content-Type" header
})

  let data = await response.json()
	console.log(data) ;
	console.log(data.status);
	this.setState({
		status: data.status 
	});
	if(data.status == 200){
		 console.log('redirect in admin dashboard');
		 this.setState({
			 redirect:true
		 })
		
	
	}
	else if(data.status == 203){

		console.log(data.message);
		//console.log(data.message.password[0]);
		if(data.message.email)
		{
			this.setState({emailErr : data.message.email[0]})
		}
		else
		{
			this.setState({emailErr :''})
		}
		if(data.message.password)
		{
			this.setState({ passwordErr : data.message.password[0]});
		}
		else{
			this.setState({passwordErr :''})
		  }
		

				//	console.log(this.state.emailErr)	;
	}
	else if(data.status == 401){

		console.log('something went wrong');
		this.setState({errMessage:data.message});
		console.log(this.state.errMessage);
	}
} catch(error){
  console.log(error);
}
//end Api calling

}
renderRedirect = () => {
	/*
      if(this.state.status=200){
				console.log(this.state.status);
		return <Redirect  to='/AdminDashboard' component={AdminDashboard}></Redirect>
			}
			*/
}
	componentDidMount(){
		/*define(["jquery", "jquery.validate"], function( $ ) {
			$("form").validate();
		
	});
   	*/
	}
    render() {

			const { redirect } = this.state;

			if (redirect) {
				return <Redirect  to='/admin-dashboard' ></Redirect>;
			}
        return (
          <div>
		     
  <div className="container">
  <div className="logo">
				<img src="./images/logo3.png" alt="Global Medevac" className="img-fluid"/>
			</div>
  <div className="row">
			  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
				<div className="card card-signin">
				  <div className="head">
					<h2>Administration</h2>
				  </div>
				  <div className="card-body">
					<h5 className="card-title">Sign In</h5>
					<hr/>
          
					<img src="./images/E-mail-icon.png" title="email-icon" alt="email-icon"/>
					<form id="myform"className="form-signin">
					  <div className="form-label-group">
							{console.log(this.state.emailErr)}
						<input type="email" name="email" value={this.state.email} className="form-control"   required autoFocus onChange={e => this.handleChange(e)}/>
						<label htmlFor="inputEmail">User Email</label>
						{this.state.emailErr?<span style={{  color:'red',display:'block',paddingLeft:20,paddingTop:5,fontSize:12
						 }}>{this.state.emailErr}</span>:''}
					  </div>
					
					  <div className="form-label-group">
						<input type="password" name="password" value={this.state.password}  className="form-control" required autoFocus onChange={e => this.handleChange(e)}/>
						<label htmlFor="inputPassword">Password</label>
						{this.state.passwordErr?<span style={{  color:'red',display:'block',paddingLeft:20,paddingTop:5,fontSize:12
						 }}>{this.state.passwordErr}</span>:''}
					 
						</div>
					  <div className="custom-control custom-checkbox mb-3">
						<input type="checkbox" className="custom-control-input" id="customCheck1"/>
						<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
						
						<a href="" className="pull-right">Forgot Password?</a>
					  </div>
					  <button  className="btn btn-lg btn-primary btn-block text-uppercase waves-effect waves-light" onClick={this.onSubmit}>Sign in</button>
					</form>
					 {this.state.errMessage?<span style={{  color:'red',display:'block',paddingLeft:20,paddingTop:5,fontSize:12
						 }}>{this.state.errMessage}</span>:''}
					<div className="other_links">
						<a href="#" className="member" target="_blank">Become a Customer</a>
						<a href="#" className="agent" target="_blank">Become an Agent</a>
					</div>
					<div className="clearfix"></div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>	
      
      <script type="text/javascript" src="js/jquery-3.4.0.min.js"></script>

  <script type="text/javascript" src="js/popper.min.js"></script>

  <script type="text/javascript" src="js/bootstrap.min.js"></script>

  <script type="text/javascript" src="js/mdb.min.js"></script>
            </div>
        );
    }
}

export default CustomerLoginForm;