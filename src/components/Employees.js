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

  handleDropdownChange = (event) => {
    //FINDING THE EMPLOYEE WHOSE NAME MATCHES THE DROPDOWN VALUE USING .find()
    let currentEmployeeObject = this.state.employees.find((employee) => {
      return employee.firstName === event.target.value;
    });

    //SET THE EMPLOYEE OBJECT IN STATE
    this.setState({
      currentEmployee: currentEmployeeObject,
    });
  };

  //ROHAN'S WAY OF SETTING THE ENTIRE EMPLOYEE OBJECT IN STATE USING ITS INDEX IN THE ARRAY
  //THANKS FOR THE SUGGESTION ROHAN!
  // handleDropdownChange = (event) => {
  //   this.setState({
  //     currentEmployee: this.state.employees[event.target.value],
  //   });
  // };

  render() {
    //ROHAN'S WAY OF SETTING THE ENTIRE EMPLOYEE OBJECT IN STATE USING ITS INDEX IN THE ARRAY
    //THANKS FOR THE SUGGESTION ROHAN!
    // let dropDownOptions = this.state.employees.map((employee, i) => {
    //   return <option value={i}>{employee.firstName}</option>;
    // });

    //MAP THROUGH THE ARRAY OF EMPLOYEES AND MAKE A DROPDOWN OPTION FOR EACH ONE.
    //THIS ARRAY OF DROPDOWN OPTIONS IS BEING RENDERED INSIDE OF THE select ELEMENT ON LINE 66
    let dropDownOptions = this.state.employees.map((employee) => {
      return <option>{employee.firstName}</option>;
    });

    return (
      <div className="Employees">
        <h1>this is the Employees page!!</h1>
        <select onChange={this.handleDropdownChange}>
          <option>Select an Employee</option>
          {dropDownOptions}
        </select>

        {/* LINES 73-75 AND LINE 76 ARE TWO DIFFERENT WAYS OF WRITING THE SAME THING. THEY CHECK TO SEE IF 
        this.state.currentEmployee IS TRUTHY. IF IT IS TRUTHY, DISPLAY this.state.currentEmployee.firstName,
        IF this.state.currentEmployee IS FALSY, DISPLAY null. */}
        <h1>
          {this.state.currentEmployee
            ? this.state.currentEmployee?.firstName
            : null}{" "}
          {this.state.currentEmployee?.lastName}
        </h1>
      </div>
    );
  }
}

export default Employees;
