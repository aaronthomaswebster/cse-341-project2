const router = require('express').Router();
const reviewController = require('../controllers/reviews');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', reviewController.getAll);
router.post('/', isAuthenticated, reviewController.createReview);
router.get('/:id', reviewController.getSingle);
router.put('/:id', isAuthenticated, reviewController.updateReview);
router.delete('/:id', isAuthenticated, reviewController.deleteReview);

module.exports = router;