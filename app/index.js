const express = require('express');
const { errorHandler } = require('./utils/error-handler');
const cors = require('cors');

module.exports = (app, config) => {
  app.use(cors());
  require('./routes')(app, config);
  app.use(errorHandler)
}
