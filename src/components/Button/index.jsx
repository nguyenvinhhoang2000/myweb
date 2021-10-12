import "./style.scss";

import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  href: PropTypes.any,
};

function Button(props) {
  const { className, children, href } = props;
  return (
    <>
      <button href={href} className={className}>
        {children}
      </button>
    </>
  );
}

export default Button;
