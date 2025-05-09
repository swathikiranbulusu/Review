const express = require('express');
const router = express.Router();
const { createReview, getAllReviews, getReviewsByMovie } = require('../controllers/reviewController');

router.post('/', createReview);
router.get('/', getAllReviews);
router.get('/:movieId', getReviewsByMovie);

module.exports = router;
