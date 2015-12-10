var ApiActions = require("../actions/pokemonActions.js");
var API = {};

API.fetchAllPokemons = function(){
  $.get("api/pokemon", function(data){
    ApiActions.receiveAllPokemons(data);
  });
};

module.exports = API;
