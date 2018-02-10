
const newsCtrl = require('./controller/news');
const errMsg = require('./constant/error-message');

module.exports = (app, config) => {

  app.get('/headlines', newsCtrl.headlines);

  app.get('/news', newsCtrl.allNews);

  app.get('*', function(req, res, next) {
    res.status(404).send('The page you requested cannot be found.');
  });
}
