import React from "react";
import "../App.css";

class Pets extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
    };
  }

  fetchPets = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
      .then((res) => res.json()) //<- THIS IS AN EXAMPLE OF IMPLICIT RETURN. WE CAN OMMIT THE return KEYWORD AND {curly brackets} BECAUSE IT'S A ONE-LINER.
      .then((data) => {
        this.setState({
          pets: data,
        });
      });
  };

  //componentDidMount IS A LIFECYCLE METHOD THAT RUNS RIGHT AFTER THE COMPONENT RENDERS FOR THE FIRST TIME.
  //IT'S THE MOST COMMONLY USED LIFECYCLE METHOD.
  componentDidMount = () => {
    this.fetchPets();
  };

  render() {
    //petsToDisplay IS AN ARRAY OF JSX ELEMENTS. IT'S BEING RENDERED ON LINE 44.
    let petsToDisplay = this.state.pets.map((pet) => {
      return (
        <div className="pet-card">
          <h2>Name: {pet.name} </h2>
          <h3>Species: {pet.kind} </h3>
          <h3>Breed: {pet.breed} </h3>
        </div>
      );
    });

    return (
      <div className="Pets">
        <h1>this is the Pets page</h1>
        <div className="pets-container">{petsToDisplay}</div>
      </div>
    );
  }
}

export default Pets;
