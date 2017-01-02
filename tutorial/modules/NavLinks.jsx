import React from 'react';
import { Link } from 'react-router';

export default function NavLinks(props) {
  return <Link to={props.to} activeStyle={{ color: 'red' }}>{props.data}</Link>;
}

NavLinks.propTypes = {
  to: React.PropTypes.string.isRequired,
  data: React.PropTypes.string.isRequired,
};

