const router = require('express').Router();
const authRouter = require('./auth');


router.use('/api/user', authRouter)



module.exports = router;