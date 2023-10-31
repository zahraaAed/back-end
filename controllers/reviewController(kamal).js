const Review = require("../models/reviews");

const getReviews = async(req, res) => { //gets all reviews
  try {
    const reviews = await Review.find({});
    res.status(200);
    res.json(reviews);
  }catch (error){
    console.log(error.message);
    res.status(500);
    res.json({message: error.message});
  }
}

const getReview = async(req, res) => { //gets a review by id
    try {
      const id = req.params.id;
      const review = await Review.findById(id);
      res.status(200);
      res.json(review);
    }catch (error) {
      console.log(error.message);
      res.status(500);
      res.json({message: error.message});
    }
}

const createReview = async(req, res) => { //posts a review
  try {
    const reviewer_name = req.query.name;
    const review_body = req.query.body;
    const reviewed_id = req.query.id;
    if (reviewer_name && review_body && reviewed_id == !isNaN) {
      let review_post = {};
      review_post.name = reviewer_name;
      review_post.reviews = review_body;
      review_post.productsId = parseFloat(reviewed_id);
      await Review.create(review_post);
    }else {
      res.status(403);
      res.send("you can't add a review without a name, text, and id of item reviewed")
    }
  }catch (error) {
    console.log(error.message);
    res.status(500);
    res.json({message: error.message});
  }
  }

const deleteReview = async(req,res) => { //deletes a review
  try {
    const id = req.params.id;
    const review_deleted = await Review.findByIdAndDelete(id);
    if (review_deleted) {
      res.status(200);
      res.send("the review is deleted successfully");
    } else {
      res.status(403);
      res.send("review not found");
    }
  }catch (error) {
    console.log(error.message);
    res.status(500);
    res.json({message: error.message});
  }
}

const updateReview = async(req,res) => { //edit a review
  try {
    const id = req.params.id;
    const new_name = req.query.name;
    const new_review = req.query.body;
    if (new_name && new_review) {
      const review_updated = await Review.findByIdAndUpdate(id, {name: new_name, reviews: new_review});
    }
    else if (new_name) {
      const review_updated = await Review.findByIdAndUpdate(id, {name: new_name});
    }
    else if (new_review) {
      const review_updated = await Review.findByIdAndUpdate(id, {reviews: new_review});
    } else {
      console.log("Enter name or review text to update");
      res.status(403);
      res.send("Enter name or review text to update");
    }
    if (review_updated) {
      res.status(200);
      res.send("review is updated");
    }
    }catch (error) {
      console.log(error.message);
      res.status(500);
      res.json({message: error.message});
  }
}

// module.exports = {
//   getReviews,
//   getReview,
//   createReview,
//   deleteReview,
//   updateReview
// };