import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import  './css/material-dashboard.css';

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320'
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170'
      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433'
      },
      {
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        salary: '$162'
      },
      {
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: '41',
        date: '2012/10/13',
        salary: '$132'
      },
      {
        name: 'Yuri Berry',
        position: 'Chief Marketing Officer (CMO)',
        office: 'New York',
        age: '40',
        date: '2009/06/25',
        salary: '$675'
      },
      {
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        office: 'New York',
        age: '21',
        date: '2011/12/12',
        salary: '$106'
      },
      {
        name: 'Doris Wilder',
        position: 'Sales Assistant',
        office: 'Sidney',
        age: '23',
        date: '2010/09/20',
        salary: '$85'
      },
      {
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        age: '47',
        date: '2009/10/09',
        salary: '$1'
      },
      {
        name: 'Gavin Joyce',
        position: 'Developer',
        office: 'Edinburgh',
        age: '42',
        date: '2010/12/22',
        salary: '$92'
      },
      {
        name: 'Jennifer Chang',
        position: 'Regional Director',
        office: 'Singapore',
        age: '28',
        date: '2010/11/14',
        salary: '$357'
      },
      {
        name: 'Brenden Wagner',
        position: 'Software Engineer',
        office: 'San Francisco',
        age: '28',
        date: '2011/06/07',
        salary: '$206'
      },
      {
        name: 'Fiona Green',
        position: 'Chief Operating Officer (COO)',
        office: 'San Francisco',
        age: '48',
        date: '2010/03/11',
        salary: '$850'
      },
      {
        name: 'Shou Itou',
        position: 'Regional Marketing',
        office: 'Tokyo',
        age: '20',
        date: '2011/08/14',
        salary: '$163'
      },
      {
        name: 'Michelle House',
        position: 'Integration Specialist',
        office: 'Sidney',
        age: '37',
        date: '2011/06/02',
        salary: '$95'
      },
      {
        name: 'Suki Burks',
        position: 'Developer',
        office: 'London',
        age: '53',
        date: '2009/10/22',
        salary: '$114'
      },
      {
        name: 'Prescott Bartlett',
        position: 'Technical Author',
        office: 'London',
        age: '27',
        date: '2011/05/07',
        salary: '$145'
      },
      {
        name: 'Gavin Cortez',
        position: 'Team Leader',
        office: 'San Francisco',
        age: '22',
        date: '2008/10/26',
        salary: '$235'
      },
      {
        name: 'Martena Mccray',
        position: 'Post-Sales support',
        office: 'Edinburgh',
        age: '46',
        date: '2011/03/09',
        salary: '$324'
      },
      {
        name: 'Unity Butler',
        position: 'Marketing Designer',
        office: 'San Francisco',
        age: '47',
        date: '2009/12/09',
        salary: '$85'
      },
      {
        name: 'Howard Hatfield',
        position: 'Office Manager',
        office: 'San Francisco',
        age: '51',
        date: '2008/12/16',
        salary: '$164'
      },
      {
        name: 'Hope Fuentes',
        position: 'Secretary',
        office: 'San Francisco',
        age: '41',
        date: '2010/02/12',
        salary: '$109'
      },
      {
        name: 'Michael Bruce',
        position: 'Javascript Developer',
        office: 'Singapore',
        age: '29',
        date: '2011/06/27',
        salary: '$183'
      },
      {
        name: 'Donna Snider',
        position: 'Customer Support',
        office: 'New York',
        age: '27',
        date: '2011/01/25',
        salary: '$112'
      }
    ]}
	
class CustomerManagement extends Component {
constructor(props) {
  super(props);
  console.log(props);
}

	
    render() {
        return (
            <div className="body">
               <div class="wrapper ">
    
    <div class="main-panel">
     
      <div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="buttons ml-3">
						<a href="../../../Customer_Registration_Form.html" class="btn btn-info pull-left mb-4">New Customer</a>
						<a href="#" class="btn btn-info pull-left mb-4">Import Customers</a>
						<a href="#" class="btn btn-info pull-left mb-4">Contacts</a>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header card-header-primary">
						  <h4 class="card-title pull-left my-3">Customers Summary</h4>
						</div>
						<div class="card-body">
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">11</h3>
								<span class="text-dark">Total Customers</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">11</h3>
								<span class="text-success">Active Customers</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">0</h3>
								<span class="text-danger">Inactive Customers</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">11</h3>
								<span class="text-info">Active Contacts</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left border-right">
								<h3 class="bold">0</h3>
								<span class="text-danger">Inactive Contacts</span>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-2 col-lg-2 pull-left">
								<h3 class="bold">1</h3>
								<span class="text-danger">Contacts Logged In Today</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title pull-left my-3">Customer Management</h4>
                </div>
                <div class="card-body">
				   <table border="0" cellspacing="5" cellpadding="5">
						<tr>
							<td>Date Range:</td>
							<td><input type="date" name="start_date" id="start_date" class="form-control" /></td>
							<td><input type="date" name="end_date" id="end_date" class="form-control" /></td>
							<td><button class="btn btn-rounded my-3 waves-effect" type="submit">Search</button></td>
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
        </div>
      </div>
      
    </div>
  </div>  
            </div>
        );
    }
}

export default CustomerManagement;