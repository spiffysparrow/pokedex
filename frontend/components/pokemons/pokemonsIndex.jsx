var React = require('react');
var pokemonStore = require('../../stores/pokemon.js');


var pokemonIndex = React.createClass ({

  getInitialState: function() {
    return {pokemons: pokemonStore.all()};
  },

  render: function() {

    return (
      <div>Hi</div>
    );
  }
});

module.exports = pokemonIndex;
