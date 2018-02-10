const errMessages = require('../constant/error-message');

let errorHandler = (err, req, res, next) => {
    let errorStatus = err.response.status || 500;
    let errMsg;
    if (errorStatus === 404) {
      errMsg = errMessages.NOT_FOUND;
      res.status(errorStatus).json({
         message: errMsg,
       });
      return;
    } else {
      errMsg = (err.response && err.response.data.message) || errMessages.DEFAULT_ERR_MESSAGE;
    }
    res.status(errorStatus).json({
       message: errMsg,
     });
  }

  module.exports = {
    errorHandler
  }
