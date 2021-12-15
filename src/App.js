import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Pets from "./components/Pets";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/employees" component={Employees} />
          <Route path="/pets" component={Pets} />
        </Switch>
      </div>
    );
  }
}

export default App;
