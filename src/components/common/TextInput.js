import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  let wrapperClass = 'form-group';
  if (props.error.length > 0) {
    wrapperClass = wrapperClass + ' has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          onChange={props.onChange}
          className="form-control"
          value={props.value}
        />
      </div>
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: '',
};

export default TextInput;