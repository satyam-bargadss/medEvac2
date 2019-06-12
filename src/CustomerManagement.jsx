import React, { Component,Fragment } from 'react';
import { HashRouter as Router, Route
   ,NavLink,Redirect} from "react-router-dom";
import { MDBDataTable } from 'mdbreact';
import  './css/material-dashboard.css';
import * as myConst from './helper/Constant';
import Switch from 'react-toggle-switch'
const URL = myConst.HTTP_URL;
	
class CustomerManagement extends Component {
constructor(props) {
  super(props);
  console.log(props);
  this.state = {
    switched: false,
    data:  {
      columns: [
        {
          label: 'Member ID',
          field: 'id',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Member Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Membership Date',
          field: 'date',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Plan',
          field: 'plan',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Amount',
          field: 'amount',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Date of Renewal',
          field: 'dater',
          sort: 'asc',
          width: 150
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
          id:'0001',
          name: 'Tiger Nixon',
          date: '2011/04/25',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2011/05/24',
          actions: ''
        },
        {
          id:'0002',
          name: 'Garrett Winters',
          date: '2011/07/25',
          plan: 'Yearly',
          amount: '$3,499',
          dater: '2012/07/24',
          actions:<Fragment><a href="#"><span class="view"></span></a>
          <a href="#"><span class="edit"></span></a>
          <Switch onClick={this.toggleSwitch} on={true}/>
          </Fragment>
        },
        {
          id:'0003',
          name: 'Ashton Cox',
          date: '2009/01/12',
          plan: 'Yearly',
          amount: '$3,499',
          dater: '2010/01/11',
          actions: ''
        },
        {
          id:'0004',
          name: 'Cedric Kelly',
          date: '2012/03/29',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2012/04/28',
          actions: ''
        },
        {
          id:'0005',
          name: 'Airi Satou',
          date: '2008/11/28',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2008/12/27',
          actions: ''
        },
        {
          id:'0006',
          name: 'Brielle Williamson',
          date: '2012/12/02',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2013/01/01',
          actions: ''
        },
        {
          id:'0007',
          name: 'Herrod Chandler',
          date: '2012/08/06',
          plan: 'Yearly',
          amount: '$3,499',
          dater: '2013/08/05',
          actions: ''
        },
        {
          id:'0008',
          name: 'Rhona Davidson',
          date: '2010/10/14',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2011/11/13',
          actions: ''
        },
        {
          id:'0009',
          name: 'Colleen Hurst',
          date: '2009/09/15',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2009/10/14',
          actions: ''
        },
        {
          id:'0010',
          name: 'Sonya Frost',
          date: '2008/12/13',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2009/01/12',
          actions: ''
        },
        {
          id:'0011',
          name: 'Jena Gaines',
          date: '2008/12/19',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2009/01/18',
          actions: ''
        },
        {
          id:'0012',
          name: 'Quinn Flynn',
          date: '2013/03/03',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2013/04/02',
          actions: ''
        },
        {
          id:'0013',
          name: 'Charde Marshall',
          date: '2008/08/16',
          plan: 'Yearly',
          amount: '$3,499',
          dater: '2008/11/15',
          actions: ''
        },
        {
          id:'0014',
          name: 'Haley Kennedy',
          date: '2012/12/18',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2013/11/17',
          actions: ''
        },
        {
          id:'0015',
          name: 'Tatyana Fitzpatrick',
          date: '2010/03/17',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2010/04/16',
          actions: ''
        },
        {
          id:'0016',
          name: '	Michael Silva',
          date: '2012/11/27',
          plan: 'Yearly',
          amount: '$3,499',
          dater: '2013/11/26',
          actions: ''
        },
        {
          id:'0017',
          name: 'John Doe',
          date: '2010/06/09',
          plan: 'Yearly',
          amount: '$3,499',
          dater: '2011/06/08',
          actions: ''
        },
        {
          id:'0018',
          name: 'Gloria Little',
          date: '2009/04/10',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2009/05/09',
          actions: ''
        },
        {
          id:'0019',
          name: 'Bradley Greer',
          date: '2012/10/13',
          plan: '5 Years Plan',
          amount: '$10,999',
          dater: '2017/10/12',
          actions: ''
        },
        {
          id:'0020',
          name: 'Dai Rios',
          date: '2012/09/26',
          plan: 'Monthly',
          amount: '$1,999',
          dater: '2012/10/25',
          actions: ''
        }
      ]}
  };
}

toggleSwitch = () => {
  this.setState(prevState => {
    return {
      switched: !prevState.switched
    };
  });
};

	
    render() {
        return (
           
     
      <div class="content" style={{width: '100%'}}>
		<div class="container-fluid">
				<div class="col-md-12">
					<div class="buttons ml-3" style={{overflow:'hidden'}}>
          <NavLink class="btn btn-info pull-left mb-4" className="nav-link" to="/member-registration"  activeClassName=" active">
                  <span>Add Member</span>
                </NavLink>
						<a href="#" class="btn btn-info pull-left mb-4">Import Members</a>
						<a href="#" class="btn btn-info pull-left mb-4">Contacts</a>
					</div>
				</div>
		</div>
    <br/>
		<div class="container-fluid">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header card-header-primary">
						  <h4 class="card-title pull-left ">Members Summary</h4>
						</div>
						<div class="card-body">
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">11</h3>
								<span class="text-dark">Total Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">11</h3>
								<span class="text-success">Active Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">0</h3>
								<span class="text-danger">Inactive Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">11</h3>
								<span class="text-info">Active Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">0</h3>
								<span class="text-danger">Inactive Members</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left">
								<h3 class="bold">1</h3>
								<span class="text-danger">Contacts Logged In Today</span>
							</div>
						</div>
					</div>
				</div>
		</div>
    <br/><br/>
        <div class="container-fluid">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title pull-left ">Member Management</h4>
                </div>
                <div class="card-body">
				   <table border="0" cellspacing="5" cellpadding="5">
						<tr>
							<td>Date:</td>
							<td><input type="date" name="start_date" id="start_date" class="form-control" /></td>
							<td><input type="date" name="end_date" id="end_date" class="form-control" /></td>
							<td><button class="btn btn-rounded  waves-effect" type="submit">Search</button></td>
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

export default CustomerManagement;