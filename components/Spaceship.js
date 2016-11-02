import React from 'react';

class Spaceship extends React.Component {
  render(){
    return (
      <div className = "spaceShip">
      <p>{this.props.name}</p>
      <p>{this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <p>{this.props.colors.join(", ")}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship
