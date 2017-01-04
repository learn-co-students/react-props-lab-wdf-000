const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <p>Has Rockets? {this.props.hasRockets ? "Yes" : "No"}</p>
        <small>Colors: {this.props.colors.join(", ")}</small>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

module.exports = Spaceship;
