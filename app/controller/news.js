const news = require('../model/news');
const constant = require('../constant/index');
const common = require('../utils/common');

let headlines = async (req, res, next) => {
  let url = common.constructHeadlinesApiEndPoint(req);
  try {
    let response = await news.headline(url);
    if (response) {
      res.send(response);
    }
  } catch (error) {
    next(error);
  }
};

let allNews = async (req, res, next) => {
  let url = common.constructNewsApiEndPoint(req);
  try {
    let response = await news.allNews(url);
    if (response) {
      res.send(response);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  headlines,
  allNews
};
