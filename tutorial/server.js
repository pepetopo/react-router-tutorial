import React from 'react';
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router';

import Routes from './modules/Routes';

const express = require('express');
const compression = require('compression');
// const path = require('path');

const PORT = process.env.port || 8080;
const app = express();

app
.use(compression())
  .use(express.static('public'))

  .get('*', (req, res) => {
    match({ routes: Routes, location: req.url }, (err, redirect, props) => {
      // in here we can make some decisions all at once
      if (err) {
        // there was an error somewhere during route matching
        res.status(500).send(err.message);
      } else if (redirect) {
        // we haven't talked about `onEnter` hooks on routes, but before a
        // route is entered, it can redirect. Here we handle on the server.
        res.redirect(redirect.pathname + redirect.search);
      } else if (props) {
        // if we got props then we matched a route and can render
        const appHtml = renderToString(<RouterContext {...props} />);
        res.send(renderPage(appHtml));
      } else {
        // no errors, no redirect, we just didn't match anything
        res.status(404).send('Not Found');
      }
    });
  })

  .listen(PORT, () => {
    console.log(`Production Express server running at localhost: ${PORT}`);
  })
;

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <div id=app>${appHtml}</div>
    <script src="bundle.js"></script>
   `;
}
