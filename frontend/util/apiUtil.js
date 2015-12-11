var ApiActions = require("../actions/pokemonActions.js");
var API = {};

API.fetchAllPokemons = function(){
  $.get("api/pokemon", function(data){
    ApiActions.receiveAllPokemons(data);
  });
};

API.fetchSinglePokemon = function(id) {
  $.get("api/pokemon/" + id, function(data) {
    ApiActions.receiveSinglePokemon(data);
  });
};

// API.fetchPokemonToys = function(pokemonId) {
//   $.get("api/pokemon/" + id, function(data) {
//     ApiActions.receiveSinglePokemon(data);
//   });
// };

module.exports = API;
