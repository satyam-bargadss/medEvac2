﻿import React, { Component } from 'react';
import AdminDashboard from './AdminDashboard';
//import App from './App'
import $ from 'jquery';
import * as myConst from './helper/Constant';

import validation from 'jquery-validation';
import {MDBInput} from 'mdbreact';
import  './css/style.css';
import  './mdb.min.css';
import  './css/material-dashboard.css';
//import { Redirect,Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
//import { red } from '@material-ui/core/colors';
//import { blockStatement } from '@babel/types';
const URL = myConst.HTTP_URL;
class CustomerLoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
				email: '',
				password: '',
				rememberMe: true,
				status:'',
				errMessage:'',
				redirect:false,
				isadminLogin:false,
		};
		this.onSubmit = this.onSubmit.bind(this);
		console.log(URL);
		if(window.sessionStorage.getItem('isAdminAuth')===true){
			this.props.history.push('/admin-dashboard');
		}
}
handleChange = (e) => {
	this.setState({
			[e.target.name]: e.target.value
	})
}
/*handleCheck = () => {
	this.setState({rememberMe: !this.state.rememberMe},()=>{
		console.log(this.state.rerememberMe);
	}
		);
		
}
*/
handleCheck = ()=>{
	this.setState((preState) => ({
		rememberMe: !preState.rememberMe 
		}),()=>{
			console.log(this.state.rememberMe);
		});
	 //console.log(this.state.isSpouse); 
}
async  onSubmit(event) {
	event.preventDefault();
	const form = {
	  email: this.state.email,
		password: this.state.password,
		rememberMe:this.state.rememberMe
	}
		//console.log(form);
	//const { user, rememberMe } = this.state;
  localStorage.setItem('rememberMe', form.rememberMe);
	localStorage.setItem('adminEmail', form.rememberMe  ? form.email : '');
	localStorage.setItem('adminPassword', form.rememberMe ? form.password : '');
	console.log(window.localStorage.getItem('rememberMe'));
	console.log(window.localStorage.getItem('adminEmail'));
	console.log(form.rememberMe);
//return false;

//	Api colling
try{
let response = await fetch(URL+'login', {
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

	//console.log(data.status);
	this.setState({
		status: data.status 
	});
	if(data.status == 200){
		// console.log('redirect in admin dashboard');
		 //console.log(data) ;
		 
		 this.setState({
			 redirect:true,
       isadminLogin:true
		 })
		 
		 await window.sessionStorage.setItem('isAdminAuth', true);
		 console.log(this.state.redirect);
		 //return false;
     await window.sessionStorage.setItem('data',JSON.stringify(data));
		 var adminDetails = await window.sessionStorage.getItem('data');
		 if(window.sessionStorage.getItem("isAdminAuth"))
        {
					setTimeout(()=>{
						this.props.history.push('/admin-dashboard#/dashboard');
					}, 1000)
        
          
        }
		// console.log(window.sessionStorage.getItem('data'));
		// console.log(window.sessionStorage.getItem('isAdminAuth'));
		 //console.log(adminDetails['name']);

		
	
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
	
      if(this.state.status=200){
				console.log(this.state.status);
		return <Redirect  to='/AdminDashboard' component={AdminDashboard} render={(props) => <AdminDashboard {...props} isAuthed={this.state.isadminLogin} />}></Redirect>
			}
			
}
	
	componentDidMount() {
		const rememberMe = localStorage.getItem('rememberMe');
		console.log(rememberMe);
		let  email = rememberMe ? localStorage.getItem('adminEmail') : '';
		let password = rememberMe ? localStorage.getItem('adminPassword') : '';
		this.setState({ email:email,password:password,rememberMe:rememberMe });
	}
    render() {
         
		//	const { redirect } = this.state;
         
			if (window.sessionStorage.getItem('isAdminAuth')) {
				return (
				 <Redirect  to='/admin-dashboard' component={AdminDashboard} render={(props) => <AdminDashboard {...props} isAuthed={this.state.isadminLogin} />}></Redirect>
					)	}
			else{
        return (
          <div>
		     
  <div className="container">
  <div className="logo">
				<img src="./images/logo.png" alt="Global Medevac" className="img-fluid"/>
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
						
						<MDBInput autoComplete="off"className="border border-light" label="Member ID or Email Address" type="email" name="email" value={this.state.email} className="form-control"   required autoFocus onChange={e => this.handleChange(e)}/>
					
						{this.state.emailErr?<span style={{  color:'red',display:'block',paddingLeft:20,paddingTop:5,fontSize:12
						 }}>{this.state.emailErr}</span>:''}
					  </div>
					
					  <div className="form-label-group">
						<MDBInput className="border border-light" label ="Password" type="password" name="password" value={this.state.password}  className="form-control" required autoFocus onChange={e => this.handleChange(e)}/>
					
						{this.state.passwordErr?<span style={{  color:'red',display:'block',paddingLeft:20,paddingTop:5,fontSize:12
						 }}>{this.state.passwordErr}</span>:''}
					 
						</div>
					  <div className="custom-control custom-checkbox mb-3">
						<input type="checkbox" className="custom-control-input" id="customCheck1" name="rememberMe" onChange = {this.handleCheck} defaultChecked={this.state.rememberMe}/>
						<label className="custom-control-label" htmlFor="customCheck1">Remember Password</label>

						<a href="" className="pull-right">Forgot Password?</a>
					  </div>
					  <button  className="btn btn-lg btn-primary btn-block text-uppercase waves-effect waves-light" onClick={this.onSubmit}>Sign in</button>
					</form>
					 {this.state.errMessage?<span style={{  color:'red',display:'block',paddingLeft:20,paddingTop:5,fontSize:12
						 }}>{this.state.errMessage}</span>:''}
					<div className="other_links">
						<a href="#" className="member" target="_blank">Become a Member</a>
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
	}


export default CustomerLoginForm;