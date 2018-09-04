import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = ({ name }) => {
  console.log(name);
  return <div>Hello {name}</div>;
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};
export default App;
