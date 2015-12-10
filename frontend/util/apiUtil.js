var ApiActions = require("../actions/pokemonActions.js");

var fetchAllPokemons = function(){
  $.get("api/pokemon", function(data){
    ApiActions.receiveAllPokemons(data);
  });
};

module.exports = fetchAllPokemons;
