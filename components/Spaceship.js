import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.speed}</h2>
        <h2>{this.props.hasRockets ? 'Yes' : 'No'}</h2>
        <h2>{this.props.colors.join(", ")}</h2>
      </div>
    );
  }
}
 
Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Spaceship;