import React from 'react';
import { browserHistory } from 'react-router'

import NavLinks from './NavLinks';

export default function Repos(props, context) {
  function handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    console.log(path);
    browserHistory.push(path)
  }

  return (
    <div>
      <h2>Repos</h2>

      <ul>
        <li><NavLinks to="/repos/reactjs/react-router">React Router</NavLinks></li>
        <li><NavLinks to="/repos/facebook/react">React</NavLinks></li>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="userName" /> / {' '}
          <input type="text" placeholder="repo" /> / {' '}
          <button type="submit">Go</button>
        </form>
      </ul>

      {props.children}
    </div>
  );
}

Repos.propTypes = {
  children: React.PropTypes.element,
};