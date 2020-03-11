import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    payroll: PropTypes.number,
    dept: PropTypes.string,
    email: PropTypes.string
  }))
}

const defaultProps = {
  employees: [
    {name: '', payroll: '', dept: '', email:''}
  ]
}
const EmployeeList = props => {
  const { employees } = props;
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Emp. Name</th>
          <th scope="col">Emp. PayRoll</th>
          <th scope="col">Emp. Dept</th>
          <th scope="col">Emp. Email</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.payroll}>
            <th scope="row">{employee.name}</th>
            <td>{employee.payroll}</td>
            <td>{employee.dept}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

EmployeeList.propTypes = propTypes;
EmployeeList.defaultProps = defaultProps;

export default EmployeeList;