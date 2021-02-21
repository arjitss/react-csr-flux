import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div className="jumbotron">
      <h1>PluralSight Administration</h1>
      <p>React, Flux, and React Router for ultra responsive web apps</p>
      <a href="/about">About</a> |{' '}
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
