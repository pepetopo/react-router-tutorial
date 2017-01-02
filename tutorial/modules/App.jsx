import React from 'react';

import NavLinks from './NavLinks';

export default function App(props) {
  return (
    <div>
      <h1>React Router Tutorial</h1>
      <ul data-role="nav">
        <li><NavLinks to="/about" data="About" /></li>
        <li><NavLinks to="/repos" data="Repos" /></li>
      </ul>

      { props.children }

    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element,
};
