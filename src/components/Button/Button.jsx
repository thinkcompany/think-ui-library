import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return <button className="ui-btn" {...props} />;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
