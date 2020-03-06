const routes = require('./routes/routes');

require('dotenv/config');

const bodyParser = require('body-parser');
const express = require('express');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(process.env.PORT, function() {
  console.log(`BACKEND is running on port ${process.env.PORT}`);
});

module.exports = server