const React = require('react');

class Spaceship extends React.Component {
  hasRockets(){
    return false;
  }
  colors(){
    return ['black','red'];
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

module.exports = Spaceship;
