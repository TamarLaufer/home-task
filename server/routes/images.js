const express = require("express");
const router = express.Router();
const { fetchImages } = require("../services/pixabayService");

router.get("/", async (req, res) => {
  try {
    const { category = "nature", page = 1, sortBy = "id" } = req.query;
    const data = await fetchImages(category, page, sortBy);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;