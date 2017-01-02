import React from 'react';

// import { IndexLink } from 'react-router';
import NavLinks from './NavLinks';

export default function App(props) {
  return (
    <div>
      <h1>React Router Tutorial</h1>
      <ul data-role="nav">
        {/* <li><IndexLink to="/">Home</IndexLink></li> */}
        <li><NavLinks to="/" onlyActiveOnIndex>Home</NavLinks></li>
        <li><NavLinks to="/about">About</NavLinks></li>
        <li><NavLinks to="/repos">Repos</NavLinks></li>
      </ul>

      { props.children }

    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
