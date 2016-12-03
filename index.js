import React from 'react';
import ReactDOM from 'react-dom';
// const React = require('react');
// const ReactDOM = require('react-dom');
import Spaceship from './components/Spaceship';
// const Spaceship = require('./components/Spaceship');

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed="34"
  />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
