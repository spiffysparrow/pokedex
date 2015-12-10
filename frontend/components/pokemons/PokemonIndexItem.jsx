var React = require('react');
var pokemonIndexItem = React.createClass ({

  render: function() {
    return (
      <li className="poke-list-item">
        {this.props.pokemon.name} : {this.props.pokemon.poke_type}
      </li>
    );
  }
});

module.exports = pokemonIndexItem;
