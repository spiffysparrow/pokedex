var React = require('react');
var PokemonIndex = require('./pokemons/pokemonsindex.jsx');

var App = React.createClass ({
  render: function() {
    return (
      <div id="pokedex">
        {this.props.children}
        <div className="pokemon-index-pane">
          <PokemonIndex/>
        </div>
      </div>
    );
  }
});

module.exports = App;
