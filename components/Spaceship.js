import React from 'react';

import ReactDOM from 'react-dom';


class Spaceship extends React.Component {
  render() {
    return (
      <div className="data">
        <h1>{this.props.name} </h1>
        <h2>{this.props.speed} </h2>
        <h2>{this.props.hasRockets} </h2>
        <h2>{this.props.colors} </h2>
      </div>
    );
  }
};


Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};


module.exports = Spaceship;
