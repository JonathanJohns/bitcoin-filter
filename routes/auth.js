const {Router} = require('express');
const passport = require('passport'); 
const local = require('./../strategies/local')
const router = Router();

const dotenv = require('dotenv');
dotenv.config();





router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send({
        'msg': `Your port is ${process.env.PORT}`, // 8626
    })

});


router.get('/check',passport.authenticate('local'), (req, res) => {

    if (req.user) {
        res.send(200)
    } else {
        res.send(403)
    }
    
});




module.exports = router;