import React from 'react';
import NavLinks from './NavLinks';

export default function Repos(props) {
  return (
    <div>
      <h2>Repos</h2>

      <ul>
        <li><NavLinks to="/repos/reactjs/react-router">React Router</NavLinks></li>
        <li><NavLinks to="/repos/facebook/react">React</NavLinks></li>
      </ul>

      {props.children}
    </div>
  );
}

Repos.propTypes = {
  children: React.PropTypes.element,
};
