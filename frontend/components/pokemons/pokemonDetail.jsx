var React = require('react');
var pokemonStore = require('../../stores/pokemon');
var ToyIndex = require('./toys.jsx');
var API = require('../../util/apiUtil');
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
    var id = parseInt(this.props.params.pokemonId);
    // console.log(this.props.params.pokemonId);
    API.fetchSinglePokemon(id);
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
                      <ul>
                        <li>Attack: {pokemon.attack}</li>
                        <li>Defense: {pokemon.defense}</li>
                        <li>Poke Type: {pokemon.poke_type}</li>
                        <li>Moves: {pokemon.moves}</li>
                      </ul>
                      <img src={pokemon.image_url}/>
                      <ToyIndex pokemon={this.state.pokemon}/>
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
