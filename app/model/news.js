const axios = require("axios");
const common = require('../utils/common');

let headline = async url => {
  try {
    let response = await axios(url);
    return response = response.data;
  } catch (error) {
    throw error;
  }
}

let allNews = async url => {
  try {
    let response = await axios(url);
    return response = response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  headline,
  allNews
}
