// Exercício realizado com auxílio do gabarito Trybe:

import logo from "./logo.svg";
import React from "react";
import "./App.css";
import pokemons from "./data.js";
import Pokedex from "./Pokedex.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex data={pokemons} />
      </div>
    );
  }
}

export default App;
