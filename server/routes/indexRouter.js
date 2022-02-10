const router = require("express").Router();
const { Article } = require("../db/models");

// get a list of articles, sort in reverse order by id
router.get("/", async (req, res) => {
  try {
    const allArticles = await Article.findAll({
      order: [["id", "DESC"]],
    });
    res.status(200).json(allArticles);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
