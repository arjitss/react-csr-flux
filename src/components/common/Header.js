import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {};

function Header(props) {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/about">About</a> |{' '}
      <a href="/courses">Courses</a>
    </nav>
  );
}

export default Header;
