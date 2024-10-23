import React from 'react';
import PropTypes from 'prop-types';
import './CustomTextField.css'; // optional: CSS-Datei zur individuellen Gestaltung

function CustomTextField({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="custom-text-field"
    />
  );
}

// PropTypes zur Validierung der Props
CustomTextField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomTextField;
