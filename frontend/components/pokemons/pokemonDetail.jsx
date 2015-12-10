var React = require('react');
var pokemonStore = require('../../stores/pokemon');

var pokemonDetail = React.createClass ({

  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function() {
    var id = parseInt(this.props.params.pokemonId);
    var pokieState = pokemonStore.find(id);
    // this.setState({pokemon: pokieState});
    return {pokemon: pokieState};
  },


  render: function() {
    // var details = {
    //   name: this.state
    // }
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">{this.state.pokemon.name}</div>
        </div>
      </div>
    );
  }
});

module.exports = pokemonDetail;
