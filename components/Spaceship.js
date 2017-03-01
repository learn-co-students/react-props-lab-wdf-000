import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.speed}</h1>
        <h1>{this.props.hasRockets}</h1>
        <h1>{this.props.colors}</h1>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
