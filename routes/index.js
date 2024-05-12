const router = require('express').Router();

router.use('/', require('./swagger.js'));
router.use('/books', require('./books.js'));
router.use('/reviews', require('./reviews.js'));

module.exports = router;