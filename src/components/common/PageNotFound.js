import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

PageNotFound.propTypes = {};

function PageNotFound(props) {
  return (
    <div>
      <h2>Page Not found</h2>
      Go to
      <Link to="/">
        <div className="btn btn-primary">HOME</div>
      </Link>
    </div>
  );
}

export default PageNotFound;
