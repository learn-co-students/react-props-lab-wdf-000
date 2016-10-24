import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h4>Speed: {this.props.speed}</h4>
        <small>Has Rockets: {this.props.hasRockets}</small>
        <small>Colors: {this.props.colors}</small>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
