const router = require('express').Router();
const reviewController = require('../controllers/reviews');

router.get('/', reviewController.getAll);
router.post('/', reviewController.createReview);
router.get('/:id', reviewController.getSingle);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;