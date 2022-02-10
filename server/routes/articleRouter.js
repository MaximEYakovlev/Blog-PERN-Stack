const router = require("express").Router();
const { Article } = require("../db/models");

router
  .route("/")

  // create an article
  .post(async (req, res) => {
    const { heading, content } = req.body;
    try {
      const newArticle = await Article.create({
        heading,
        content,
      });
      res.status(200).json(newArticle);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router
  .route("/:id")

  // get a specific article
  .get(async (req, res) => {
    try {
      const article = await Article.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json(error);
    }
  })

  // update a specific article
  .put(async (req, res) => {
    const { heading, content } = req.body;
    try {
      const updatedArticle = await Article.update(
        {
          heading,
          content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(500).json(error);
    }
  })

  // delete a specific article
  .delete(async (req, res) => {
    try {
      await Article.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
