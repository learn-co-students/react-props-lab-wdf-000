import React from 'react';
import ReactDOM from 'react-dom';


class Spaceship extends React.Component{
  render() {
    return (
      <div className="hi">
      <text>{this.props.name}</text>
      <text>{this.props.speed}</text>
      <p>Has rockets: {this.props.hasRockets}</p>
      <text>{this.props.colors.join(', ')}</text>
      </div>
    )
  }
}


Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};


module.exports = Spaceship;
