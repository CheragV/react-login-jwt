const router = require('express').Router();
const User = require('../model/User');

router.get('/', async (req, res) => {
    // const user = await User.findOne({
    //     _id: req.user.id
    // })
    // console.log(user)
    // res.send(user)
    res.send({
        posts: 'Posts'
    })
})

module.exports = router;