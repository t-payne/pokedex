import React from 'react';
import './Pokecard.css';

function padDigits(number, digits) {
  return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

class Pokecard extends React.Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    const pokemonImageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padDigits(id, 3)}.png`
    return (
      <div className="Pokecard">
        <h3 className="Pokecard-h3">{name}</h3>
        <img src={pokemonImageUrl}></img>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
