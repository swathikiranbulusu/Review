const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllReviews = async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
};

exports.getReviewsByMovie = async (req, res) => {
  const { movieId } = req.params;
  const reviews = await Review.find({ movieId });
  res.json(reviews);
};
