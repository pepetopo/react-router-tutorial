import React from 'react';
import { IndexRoute, Route } from 'react-router';

import About from './About';
import App from './App';
import Home from './Home';
import Repo from './Repo';
import Repos from './Repos';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo} />
    </Route>
    <Route path="/about" component={About} />
  </Route>
);
