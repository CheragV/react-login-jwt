const router = require('express').Router();
const authRouter = require('./auth');
const postsRouter = require('./posts');

const verityRoute = require('./verifyToken');


router.use('/api/user', authRouter);
router.use('/api/posts', verityRoute, postsRouter);



module.exports = router;