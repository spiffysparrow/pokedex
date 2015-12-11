var AppDispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require('../constants/pokemonConstants.js');

var pokemonActions = {
  receiveAllPokemons: function(pokemons){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function(pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = pokemonActions;
