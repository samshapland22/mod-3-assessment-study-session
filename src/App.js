import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pets from "./components/Pets";
import Employees from "./components/Employees";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          {/* EACH OF THESE 3 ROUTES HAS A CORRESPONDING LINK IN Navbar.js */}
          <Route exact path="/" component={Home} />
          <Route path="/employees" component={Employees} />
          <Route path="/pets" component={Pets} />
        </Switch>
      </div>
    );
  }
}

export default App;
