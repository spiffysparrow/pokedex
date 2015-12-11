var React = require('react');

var ToyDetail = React.createClass ({
  render: function() {
    var toy = this.props.toy;
    var details = (
      <ul className="detail">
        <li><img src={toy.image_url} /></li>
        <li>Happines: {toy.happines}</li>
        <li>Price: {toy.price}</li>
      </ul>
    );

    return (
      <div>
        {details}
      </div>
    );
  }
});

module.exports = ToyDetail;
