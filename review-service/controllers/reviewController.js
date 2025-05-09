const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json(review);
};

exports.getReviewsByMovie = async (req, res) => {
  const reviews = await Review.find({ movieId: req.params.movieId });
  res.json(reviews);
};