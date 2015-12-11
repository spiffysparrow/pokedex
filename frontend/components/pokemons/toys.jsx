var React = require('react');
var ToyDetail = require('./toy_detail');

var ToyIndex = React.createClass ({
  showToy: function(){
    console.log("show toy");
  },
  render: function() {
    var toys = this.props.pokemon.toys.map(function(toy, idx){
      return (
        <li className="toy-list-item" key={idx} onClick={this.showToy}>
          {toy.name}
        </li>
      );
    });
    return (
      <div>
        <ul>
            {toys}
        </ul>
      </div>
    );
  }
});

module.exports = ToyIndex;
