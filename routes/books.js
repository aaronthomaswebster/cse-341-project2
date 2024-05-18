const router = require('express').Router();
const bookController = require('../controllers/books');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', bookController.getAll);
router.get('/:id', bookController.getSingle);
router.post('/', isAuthenticated, bookController.createBook);
router.put('/:id', isAuthenticated, bookController.updateBook);
router.delete('/:id', isAuthenticated, bookController.deleteBook);

module.exports = router;