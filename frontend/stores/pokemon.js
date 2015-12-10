var Store = require("flux/utils").Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require('../constants/pokemonConstants.js');

var pokemonStore = new Store(AppDispatcher);
var _allPokemon = {};

pokemonStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      break;
  }
};

pokemonStore.all = function() {
  var pokemonArray = [];
  for (var key in _allPokemon) {
    var value = _allPokemon[key];
    pokemonArray.push(value);
  }
  return pokemonArray;
};

var resetPokemons = function(pokemons) {
  _allPokemon = {};
  pokemons.forEach (function (pokemon) {
    var id = pokemon.id;
    _allPokemon[id] = pokemon;
  });
};

console.log("pokemonStore", _allPokemon);



module.exports = pokemonStore;
