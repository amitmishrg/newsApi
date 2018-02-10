const express = require('express');
const { errorHandler } = require('./utils/error-handler');

module.exports = (app, config) => {
  require('./routes')(app, config);
  app.use(errorHandler)
}
