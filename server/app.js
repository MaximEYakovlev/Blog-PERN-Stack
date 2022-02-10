const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5001;
const app = express();

const indexRouter = require("./routes/indexRouter");
const articleRouter = require("./routes/articleRouter");

// setup morgan
app.use(morgan("dev"));

// setup cors
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET, POST, PUT, DELETE",
  })
);

// parses incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/articles", indexRouter);
app.use("/article", articleRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
