import React from 'react';
import { Link } from 'react-router';

export default function NavLinks(props) {
  return <Link {...props} activeStyle={{ color: 'red' }} />;
}

NavLinks.propTypes = {
  children: React.PropTypes.string.isRequired,
};

