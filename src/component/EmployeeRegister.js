import React from 'react'
import EmployeeList from './EmployeeList'
import {ExportExcel} from './ExportExcel'

const employees = [
  {name: 'Dylan Bradley', payroll: 100, dept: 'Accounts', email: 'dylan@test.com'},
  {name: 'Daisy Griffiths', payroll: 101, dept: 'Marketing', email: 'daisy@test.com'},
  {name: 'Taylor Sims', payroll: 102, dept: 'Human Resource', email: 'taylor@test.com'},
  {name: 'Daniel Waters', payroll: 103, dept: 'Talent Mgmt', email: 'daniel@test.com'},
  {name: 'Mason Oliver', payroll: 104, dept: 'Accounts', email: 'mason@test.com'},
  {name: 'Molly McCarthy', payroll: 105, dept: 'Engg', email: 'molly@test.com'},
  {name: 'Kian Dennis', payroll: 106, dept: 'Administration', email: 'kian@test.com'},
  {name: 'Mia Harvey', payroll: 107, dept: 'Delivery', email: 'mia@test.com'},
  {name: 'Keira Smith', payroll: 108, dept: 'Quality', email: 'keira@test.com'},
  {name: 'John Barnett', payroll: 109, dept: 'Design', email: 'john@test.com'},
]

const EmployeeRegister = (props) => {
  return (
    <>
      <div className="alert alert-success">
        <h2>Employee Register</h2>
      </div>
      <EmployeeList employees={employees}/>
      <hr/>
      <ExportExcel csvData={employees} fileName="Customers"/>
    </>
  )
}

export default EmployeeRegister