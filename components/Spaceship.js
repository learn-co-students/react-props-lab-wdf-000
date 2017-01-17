const React = require('react');

class Spaceship extends React.Component {
  render() {
    return(
      <div>
      <h1>Name: {this.props.name}</h1>
      <h3>Speed: {this.props.speed}</h3>
      <h3>Rockets: {this.props.hasRockets}</h3>
      <h3>Colors: {this.props.colors}</h3>
      </div>
      );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;