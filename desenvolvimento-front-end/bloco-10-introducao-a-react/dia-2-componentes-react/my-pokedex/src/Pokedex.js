// Exercício realizado com auxílio do gabarito Trybe:

import React from "react";
import Pokemon from "./Pokemon.js";

class Pokedex extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="pokedex">
        {data.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
