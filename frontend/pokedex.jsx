var React = require('react');
var ReactDOM = require('react-dom');
var PokemonIndex = require('./components/pokemons/pokemonsindex.jsx');
// console.log("i'm running!!!!!!");

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<PokemonIndex/>, document.getElementById('root'));
  }
);


var fetchAllPokemons = require("./util/apiUtil.js");
fetchAllPokemons();



window.pokemonStore = require("./stores/pokemon.js");
