const api = require('../config/api_endpoint');
const constant = require('../constant/index');

let constructHeadlinesApiEndPoint = req => {
  let country = req.query.country || '',
      category = req.query.category || '',
      q = req.query.query || '',
      url = `${api.headlines.endPoint}?country=${country}&category=${category}&q=${q}`;
  return {
    url: url,
    method: 'get',
    headers: {
      'X-Api-Key': constant.token.slice(8, 40)
    }
  }
}

let constructNewsApiEndPoint = req => {
  let q = req.query.query || '',
      startDate = req.query.startDate || '',
      endDate = req.query.endDate || '',
      language = req.query.language || '',
      sortBy = req.query.sortBy || '',
      pageSize = req.query.pageSize || api.news.pageSize,
      page = req.query.page || api.news.page,
      url = `${api.news.endPoint}?&q=${q}&from=${startDate}&to=${endDate}&language=${language}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`;
  return {
    url: url,
    method: 'get',
    headers: {
      'X-Api-Key': constant.token.slice(8, 40)
    }
  }
}

  module.exports = {
    constructHeadlinesApiEndPoint,
    constructNewsApiEndPoint
  }
