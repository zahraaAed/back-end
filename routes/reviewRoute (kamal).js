
const express = require("express");

const app = express();

const getReviews = require("./controllers/reviewController(kamal).js");
const getReview = require("./controllers/reviewController(kamal).js");
const createReview = require("./controllers/reviewController(kamal).js");
const deleteReview = require("./controllers/reviewController(kamal).js");
const updateReview = require("./controllers/reviewController(kamal).js");

app.get("/", getReviews);

app.get("/:id", getReview);

app.post("/", createReview);

app.delete("/:id", deleteReview);

app.patch("/:id", updateReview);

// module.exports = app;