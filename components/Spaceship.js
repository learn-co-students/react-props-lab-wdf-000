const React = require('react');

class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>Has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <small>Colors: {this.props.colors.join(",")}</small>
      </div>
    );
  }
}

Spaceship.defaultProps = {
 hasRockets: false,
 colors: ['black', 'red']
};

module.exports = Spaceship;
