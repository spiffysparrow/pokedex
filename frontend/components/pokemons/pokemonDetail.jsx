var React = require('react');
var pokemonStore = require('../../stores/pokemon');
var pokemonDetail = React.createClass ({

  getInitialState: function() {
    return this.getStateFromStore(this.props);
  },

  getStateFromStore: function(props) {
    var id = parseInt(props.params.pokemonId);
    var pokieState = pokemonStore.find(id);
    return {pokemon: pokieState};
  },

  updatePokemon: function(){
    this.setState(this.getStateFromStore(this.props));
  },

  componentDidMount: function() {
    pokemonStore.addListener(this.updatePokemon);
  },

  componentWillReceiveProps: function(newProps){
    this.setState(this.getStateFromStore(newProps));
  },

  render: function() {
    var details;
    var pokemon = this.state.pokemon;
    if (pokemon) {
      details = <div className="detail">
                      <h2>{pokemon.name}</h2>
                      <img src={pokemon.image_url}/>
                    </div>;
      } else {
        details = <div>Loading!</div>;
        }
    return (
      <div>
        <div className="pokemon-detail-pane">
          {details}
        </div>
      </div>
    );
  }
});

module.exports = pokemonDetail;
