import React from 'react';
import NavLinks from './NavLinks';

export default function Repos(props) {
  return (
    <div>
      <h2>Repos</h2>

      <ul>
        <li><NavLinks to="/repos/reactjs/react-router" data="React Router" /></li>
        <li><NavLinks to="/repos/facebook/react" data="React" /></li>
      </ul>

      {props.children}
    </div>
  );
}

Repos.propTypes = {
  children: React.PropTypes.element,
};
