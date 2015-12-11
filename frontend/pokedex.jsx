var React = require('react');
var ReactDOM = require('react-dom');
var PokemonIndex = require('./components/pokemons/pokemonsindex.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var App = require('./components/app');
var PokemonDetail = require('./components/pokemons/pokemonDetail.jsx');

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
      
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
}
);



// window.pokemonStore = require("./stores/pokemon.js");
