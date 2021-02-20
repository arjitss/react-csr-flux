import React from 'react';
import PropTypes from 'prop-types';

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div className="jumbotron">
      <h1>PluralSight Administration</h1>
      <p>React, Flux, and React Router for ultra responsive web apps</p>
      <a href="/about">About</a>
    </div>
  );
}

export default HomePage;
