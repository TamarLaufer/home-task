const axios = require("axios");
require("dotenv").config();

const PIXABAY_URL = "https://pixabay.com/api/";
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

const fetchImages = async (category, page = 1, sortBy = "id") => {
  const order = sortBy === "date" ? "latest" : "popular";
  const { data } = await axios.get(PIXABAY_URL, {
    params: { key: PIXABAY_API_KEY, q: category, page, per_page: 9, order },
  });
  return data;
};

module.exports = { fetchImages };