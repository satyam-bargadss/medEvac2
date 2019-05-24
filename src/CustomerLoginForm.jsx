import React, { Component } from 'react';
import CustomerManagement from './CustomerManagement';
import $ from 'jquery';
import validation from 'jquery-validation';
import { Redirect,Route } from 'react-router-dom'
class CustomerLoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
				email: '',
				password: '',
				status:'',
				errMessage:''
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
	
	}
	if(data.status == 401){

		console.log('something went wrong');
		this.setState({errMessage:data.message});
	}
} catch(error){
  console.log(error);
}
//end Api calling

}
	componentDidMount(){
		/*define(["jquery", "jquery.validate"], function( $ ) {
			$("form").validate();
		
	});
   	*/
	}
    render() {
        return (
            <div>
							<Route path="/customer-management" component={CustomerManagement} />
							{this.state.status ==200?<Redirect to='/customer-management'  />:''}
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
						<input type="email" name="email" value={this.state.email} className="form-control"   required autoFocus onChange={e => this.handleChange(e)}/>
						<label htmlFor="inputEmail">User Email</label>
					  </div>

					  <div className="form-label-group">
						<input type="password" name="password" value={this.state.password}  className="form-control" required autoFocus onChange={e => this.handleChange(e)}/>
						<label htmlFor="inputPassword">Password</label>
					  </div>

					  <div className="custom-control custom-checkbox mb-3">
						<input type="checkbox" className="custom-control-input" id="customCheck1"/>
						<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
						
						<a href="" className="pull-right">Forgot Password?</a>
					  </div>
					  <button  className="btn btn-lg btn-primary btn-block text-uppercase waves-effect waves-light" onClick={this.onSubmit}>Sign in</button>
					</form>
					 <div>{this.state.errMessage?''}</div>
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