import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (
  <h1 id="header">{text}</h1>
);

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Title!',
};

export default Header;
