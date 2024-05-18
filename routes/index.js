const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger.js'));
router.use('/books', require('./books.js'));
router.use('/reviews', require('./reviews.js'));

router.get('/login', passport.authenticate('github'), (req, res) => {});
router.get('/logout', (req, res, next) => {
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.session.destroy();
        return res.redirect('/');
    });
});

module.exports = router;