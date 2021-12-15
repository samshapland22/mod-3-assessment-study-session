import React from "react";
import "../App.css";

class Employees extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      currentEmployee: null,
    };
  }

  fetchEmployees = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          employees: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchEmployees();
  };

  handleDropDownChange = (event) => {
    this.setState({
      currentEmployee: event.target.value,
    });
  };

  render() {
    let dropDownOption = this.state.employees.map((employee) => {
      return <option>{employee.firstName}</option>;
    });

    let currentEmployeeObject = this.state.employees.find((employee) => {
      return employee.firstName === this.state.currentEmployee;
    });

    return (
      <div className="Employee">
        <h1>This is Employees</h1>
        <select onChange={this.handleDropDownChange}>
          <option>Select an Employee</option>
          {dropDownOption}
        </select>
        <h1>
          {currentEmployeeObject?.firstName} {currentEmployeeObject?.lastName}
        </h1>
      </div>
    );
  }
}

export default Employees;
