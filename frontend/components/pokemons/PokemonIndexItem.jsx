var React = require('react');
var History = require('react-router').History;
var pokemonIndexItem = React.createClass ({

  mixins: [History],

  viewDetails: function() {
    var detailUrl = 'pokemon/' + this.props.pokemon.id;
    this.history.push(detailUrl);
  },

  render: function() {
    return (
      <li className="poke-list-item" onClick={this.viewDetails}>
        {this.props.pokemon.name} : {this.props.pokemon.poke_type}
      </li>
    );
  }
});

module.exports = pokemonIndexItem;
