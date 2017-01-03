import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import Routes from './modules/Routes';

render(
  <Router routes={Routes} history={browserHistory} />,
  document.getElementById('app'),
);
