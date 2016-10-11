const React = require('react');
const ReactDOM = require('react-dom');

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Spaceship name: {this.props.name}</h1>
        <h2>Rockets: {this.props.hasRockets} </h2>
        <h2>Speed: {this.props.speed} </h2>
        <h2> Colors: {this.props.colors} </h2>
      </div>
  );}
};

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
