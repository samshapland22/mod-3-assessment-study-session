import React from "react";
import "../App.css";

class Pets extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }

  fetchPats = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pets: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchPats();
  };

  render() {
    let petsToDisplay = this.state.pets.map((pet) => {
      return (
        <div className="pet-card">
          <h2>Name: {pet.name} </h2>
          <h3>Species: {pet.type} </h3>
          <h3>Breed: {pet.breed} </h3>
        </div>
      );
    });

    return (
      <div className="Pets">
        <h1>This is pets</h1>
        <div className="pets-container">{petsToDisplay}</div>
      </div>
    );
  }
}

export default Pets;
