import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label , className,  children  , ...props }) => {
  return (
    <button
      type="button"
      className={className}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  className: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  className: "bg-blue-500 px-3 py-2 rounded-xl text-white",
  size: 'large',
  onClick: undefined,
};
