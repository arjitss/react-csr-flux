import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {};

function Header(props) {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/about">About</a>
    </nav>
  );
}

export default Header;
