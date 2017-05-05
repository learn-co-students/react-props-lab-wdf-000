const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div className='spaceship'>
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

module.exports = Spaceship;
