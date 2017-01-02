const express = require('express');
const compression = require('compression');
// const path = require('path');

const PORT = process.env.port || 8080;
const app = express();

app
.use(compression())
  .use(express.static(`${__dirname}/public`))
  .get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
  })
  .listen(PORT, () => {
    console.log(`Production Express server running at localhost: ${PORT}`);
  })
;
