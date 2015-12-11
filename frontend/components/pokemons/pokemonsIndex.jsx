var React = require('react');
var API = require('../../util/apiUtil');
var pokemonStore = require('../../stores/pokemon');
var PokemonIndexItem = require('./PokemonIndexItem');


var pokemonIndex = React.createClass ({

  getInitialState: function() {
    return {pokemons: pokemonStore.all()};
  },

  componentDidMount: function(){
    pokemonStore.addListener(this._onChange);
    API.fetchAllPokemons();
  },

  componentWillUnmount: function(){
    pokemonStore.removeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({ pokemons: pokemonStore.all() });
  },

  render: function() {
    var pokemonsLis = this.state.pokemons.map(function(pokemon, idx){
      return (<PokemonIndexItem pokemon={pokemon} key={idx}/>);
    });
    return (
      <ul>{pokemonsLis}</ul>
    );
  }
});

module.exports = pokemonIndex;
